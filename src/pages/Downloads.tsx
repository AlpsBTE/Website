import PageTitle from '../components/PageTitle'
import { useTranslation } from '../i18n/hook'

export default function Downloads() {
  const { t } = useTranslation()

  return (
    <div>
      <PageTitle
        title={t('pages.downloads.title') as string}
        subtitle={t('pages.downloads.description') as string}
      />
    </div>
  )
}
