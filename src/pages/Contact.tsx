import { Title, Anchor, ActionIcon } from '@mantine/core'
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandX,
  IconBrandTiktok,
  IconBrandReddit,
} from '@tabler/icons-react'
import PageTitle from '../components/PageTitle'
import { socials, contactEmails } from '../lib/config'
import { useTranslation } from '../i18n/hook'
import './Contact.scss'

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <IconBrandInstagram size={28} />,
  YouTube: <IconBrandYoutube size={28} />,
  Reddit: <IconBrandReddit size={28} />,
  Twitter: <IconBrandX size={28} />,
  TikTok: <IconBrandTiktok size={28} />,
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <div className="contact">
      <PageTitle
        title={t('pages.contact.title') as string}
        subtitle={t('pages.contact.description') as string}
      />
      <div className="contact__container">
        <div className="contact__social-media">
          <Title order={2} className="contact__title">
            {t('pages.contact.socialMedia') as string}
          </Title>
          <div className="contact__icons">
            {Object.values(socials)
              .filter((s) => socialIcons[s.text])
              .map((s) => (
                <Anchor
                  key={s.text}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__icon"
                >
                  <ActionIcon variant="transparent" size="xl">
                    {socialIcons[s.text]}
                  </ActionIcon>
                </Anchor>
              ))}
          </div>
        </div>
        <div className="contact__people">
          <div className="contact__people-section">
            <Title order={2} className="contact__title">
              {t('pages.contact.contact.outreach') as string}
            </Title>
            <Anchor href={`mailto:${contactEmails.outreach}`} className="link">
              {contactEmails.outreach}
            </Anchor>
          </div>
          <div className="contact__people-section">
            <Title order={2} className="contact__title">
              {t('pages.contact.contact.management') as string}
            </Title>
            <Anchor
              href={`mailto:${contactEmails.management}`}
              className="link"
            >
              {contactEmails.management}
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  )
}
