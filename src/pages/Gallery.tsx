import { useCallback, useEffect, useMemo, useState } from 'react'
import { SimpleGrid, Image, Select } from '@mantine/core'
import PageTitle from '../components/PageTitle'
import { useTranslation } from '../i18n/hook'
import type { Language } from '../i18n/types'
import galleryData from '../data/gallery.json'
import './Gallery.scss'

interface GalleryCategory {
  label: Record<Language, string>
  images: string[]
}

const typedGalleryData = galleryData as Record<string, GalleryCategory>
const placesEntries = Object.entries(typedGalleryData)
const defaultPlace = placesEntries[0]?.[0] ?? ''

export default function Gallery() {
  const { t, language } = useTranslation()
  const [place, setPlace] = useState<string>(defaultPlace)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const category = typedGalleryData[place]
  const images = useMemo(() => category?.images ?? [], [category])

  const handleChange = (newPlace: string | null) => {
    if (newPlace && typedGalleryData[newPlace]) {
      setPlace(newPlace)
      setLightboxIndex(null)
    }
  }

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }, [images.length])
  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null
      return prev === images.length - 1 ? 0 : prev + 1
    })
  }, [images.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
      else if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, goPrev, goNext])

  return (
    <div className="gallery">
      <PageTitle
        title={t('pages.gallery.title') as string}
        subtitle={t('pages.gallery.description') as string}
      />
      <div className="gallery__controls">
        <div className="gallery__buttons">
          {placesEntries.map(([key, cat]) => {
            const isActive = place === key
            return (
              <button
                key={key}
                onClick={() => handleChange(key)}
                className={`gallery__button ${isActive ? 'gallery__button--active' : ''}`}
              >
                {cat.label[language] ?? cat.label.en}
              </button>
            )
          })}
        </div>

        <Select
          value={place}
          onChange={handleChange}
          data={placesEntries.map(([key, cat]) => ({
            value: key,
            label: cat.label[language] ?? cat.label.en,
          }))}
          className="gallery__select"
          allowDeselect={false}
        />
      </div>

      <div className="gallery__grid-wrapper">
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="sm"
          className="gallery__grid"
        >
          {images.map((filename, i) => (
            <button
              key={`${place}-${filename}`}
              className="gallery__item"
              onClick={() => openLightbox(i)}
              aria-label={`Open image ${i + 1}`}
            >
              <Image
                src={`/assets/gallery/${place}/${filename}`}
                alt={`${category?.label[language] ?? category?.label.en} image ${i}`}
                className="gallery__image"
                radius="sm"
              />
            </button>
          ))}
        </SimpleGrid>
      </div>

      {lightboxIndex !== null && (
        <div
          className="gallery__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="gallery__lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="gallery__lightbox-nav gallery__lightbox-nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={`/assets/gallery/${place}/${images[lightboxIndex]}`}
            alt={`${category?.label[language] ?? category?.label.en} image ${lightboxIndex}`}
            className="gallery__lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="gallery__lightbox-nav gallery__lightbox-nav--next"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}
