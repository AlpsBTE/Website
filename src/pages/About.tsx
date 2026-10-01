import { Link } from 'react-router-dom'
import { Title, Text } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import PageTitle from '../components/PageTitle'
import { useTranslation } from '../i18n/hook'
import { renderMarkdownText } from '../lib/utils'
import './About.scss'

export default function About() {
  const { t, language } = useTranslation()
  const aboutData = t('pages.aboutUs.description') as unknown as Array<{
    title: string
    description: string
  }>

  return (
    <div className="about">
      <PageTitle title={t('pages.aboutUs.title') as string} />
      <Link to={`/${language}/contact`} className="about__contact-link">
        <span>{t('pages.aboutUs.contactUs') as string}</span>
        <IconArrowRight size={16} />
      </Link>
      <div className="about__container">
        {aboutData.map((item, i) => (
          <div key={i} className="about__section">
            <Title order={2} className="about__section-title">
              {item.title}
            </Title>
            <Text className="about__section-text">
              {renderMarkdownText(item.description)}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
