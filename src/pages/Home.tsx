import { useState } from 'react'
import { Button, Title, Text } from '@mantine/core'
import { IconBrandDiscord, IconCheck, IconCompass } from '@tabler/icons-react'
import ScrollIndicator from '../components/ScrollIndicator'
import { server, socials } from '../lib/config'
import { useTranslation } from '../i18n/hook'
import './Home.scss'

function HomeContentSection({
  title,
  image,
  isImageAlignedLeft,
  children,
}: {
  title: string
  image: string
  isImageAlignedLeft: boolean
  children: React.ReactNode
}) {
  return (
    <section
      className={`home-section ${isImageAlignedLeft ? '' : 'home-section--reversed'}`}
    >
      <div className="home-section__image">
        <img src={image} alt={title} />
      </div>
      <div className="home-section__text">
        <Title order={2} className="home-section__title">
          {title}
        </Title>
        <Text className="home-section__description">{children}</Text>
      </div>
    </section>
  )
}

export default function Home() {
  const [copiedClipboard, setCopiedClipboard] = useState(false)
  const { t } = useTranslation()

  const handleCopyClipboardClick = () => {
    if (!copiedClipboard) {
      setCopiedClipboard(true)
      setTimeout(() => setCopiedClipboard(false), 3000)
      navigator.clipboard.writeText(server.address)
    }
  }

  return (
    <div className="home">
      <div className="home__hero">
        <div
          className="home__hero-bg"
          style={{ backgroundImage: 'url(/assets/home/3.webp)' }}
        />
        <div className="home__hero-content">
          <Title order={1} className="home__hero-headline">
            {t('pages.home.headline') as string}
          </Title>
          <div className="home__hero-buttons">
            <Button
              component="a"
              href={socials.discord.link}
              target="_blank"
              rel="noreferrer"
              size="lg"
              variant="outline"
              color="white"
              leftSection={<IconBrandDiscord size={20} />}
              className="home__hero-btn"
            >
              {t('pages.home.joinUs') as string}
            </Button>
            <Button
              size="lg"
              variant="outline"
              color="white"
              leftSection={
                copiedClipboard ? (
                  <IconCheck size={20} />
                ) : (
                  <IconCompass size={20} />
                )
              }
              onClick={handleCopyClipboardClick}
              className="home__hero-btn"
            >
              {copiedClipboard
                ? (t('pages.home.copiedToClipboard') as string)
                : server.address}
            </Button>
          </div>
          <ScrollIndicator />
        </div>
      </div>

      <div id="ourMission" className="home__content">
        <HomeContentSection
          title={t('pages.home.contentBlocks.mission.title') as string}
          image="/assets/home/1.webp"
          isImageAlignedLeft={true}
        >
          {t('pages.home.contentBlocks.mission.description') as string}
        </HomeContentSection>
        <HomeContentSection
          title={t('pages.home.contentBlocks.server.title') as string}
          image="/assets/home/0.webp"
          isImageAlignedLeft={false}
        >
          {t('pages.home.contentBlocks.server.description') as string}
        </HomeContentSection>
        <HomeContentSection
          title={t('pages.home.contentBlocks.how.title') as string}
          image="/assets/home/2.webp"
          isImageAlignedLeft={true}
        >
          {t('pages.home.contentBlocks.how.description') as string}
        </HomeContentSection>
      </div>
    </div>
  )
}
