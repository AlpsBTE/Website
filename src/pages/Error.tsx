import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import PageTitle from '../components/PageTitle'
import { useTranslation } from '../i18n/hook'
import './Error.scss'

export default function Error() {
  const { t, language } = useTranslation()

  return (
    <div className="error-page">
      <PageTitle
        title={t('pages.error.title') as string}
        showImage={false}
        className="error-page__page-title"
      />
      <div className="error-page__content">
        <img
          src="https://i.imgur.com/qTC69pF.png"
          alt="404"
          className="error-page__img"
        />
        <Link to={`/${language}`} className="error-page__back-home">
          <Button leftSection={<IconArrowLeft size={16} />} variant="subtle">
            {t('pages.error.backHome') as string}
          </Button>
        </Link>
      </div>
    </div>
  )
}
