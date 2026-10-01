import { Accordion, Title, Text } from '@mantine/core'
import PageTitle from '../components/PageTitle'
import { useTranslation } from '../i18n/hook'
import { linkify } from '../lib/utils'
import './Faq.scss'

export default function Faq() {
  const { t } = useTranslation()
  const faqData = t('pages.faq.questions') as unknown as Array<{
    title?: string
    content?: string
    spacer?: string
  }>

  return (
    <div className="faq">
      <PageTitle
        title={t('pages.faq.title') as string}
        subtitle={t('pages.faq.description') as string}
      />
      <div className="faq__content">
        {faqData.map((item, i) =>
          item.spacer ? (
            <Title
              key={i}
              order={2}
              className="faq__spacer"
              ta="center"
              mt="lg"
              mb="md"
            >
              {item.spacer}
            </Title>
          ) : (
            <Accordion
              key={i}
              variant="contained"
              className="faq__accordion"
              radius="sm"
            >
              <Accordion.Item value={String(i)}>
                <Accordion.Control>
                  <Text fw={700}>{item.title}</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text>{linkify(item.content ?? '')}</Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          )
        )}
      </div>
    </div>
  )
}
