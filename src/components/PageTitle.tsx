import { Title, Text } from '@mantine/core'
import './PageTitle.scss'

interface PageTitleProps {
  title: string
  subtitle?: string
  showImage?: boolean
  image?: string
  className?: string
}

export default function PageTitle({
  title,
  subtitle,
  showImage = true,
  image = '/assets/header/0.webp',
  className = '',
}: PageTitleProps) {
  return (
    <div className={`page-title ${className}`}>
      {showImage && (
        <div className="page-title__image-wrapper">
          <img src={image} alt="Page header" className="page-title__image" />
        </div>
      )}
      <div className="page-title__content">
        <Title order={1} className="page-title__title">
          {title}
        </Title>
        {subtitle && (
          <Text className="page-title__subtitle" c="dimmed">
            {subtitle}
          </Text>
        )}
      </div>
    </div>
  )
}
