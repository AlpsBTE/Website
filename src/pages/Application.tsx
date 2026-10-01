import { Title, Text } from '@mantine/core'
import PageTitle from '../components/PageTitle'
import { useTranslation } from '../i18n/hook'
import { renderMarkdownText } from '../lib/utils'
import './Application.scss'

function ApplicationStep({
  stepNumber,
  title,
  description,
}: {
  stepNumber: number
  title: string
  description: string
}) {
  return (
    <div className="application-step">
      <div className="application-step__content">
        <Title order={2} className="application-step__title">
          {stepNumber}. {title}
        </Title>
        <Text className="application-step__description">
          {renderMarkdownText(description)}
        </Text>
      </div>
    </div>
  )
}

export default function Application() {
  const { t } = useTranslation()

  const steps = [
    { key: 'discord', number: 1 },
    { key: 'tutorialSystem', number: 2 },
    { key: 'plotSystem', number: 3 },
    { key: 'applicationForm', number: 4 },
  ] as const

  return (
    <div className="application">
      <PageTitle
        title={t('pages.application.title') as string}
        subtitle={t('pages.application.description') as string}
      />
      <div className="application__content">
        {steps.map((step) => (
          <ApplicationStep
            key={step.key}
            stepNumber={step.number}
            title={t(`pages.application.steps.${step.key}.title`) as string}
            description={
              t(`pages.application.steps.${step.key}.description`) as string
            }
          />
        ))}
        <div className="application__video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/MdFMsJ9pNls"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
