import { Link } from 'react-router-dom'
import { Text, Anchor } from '@mantine/core'
import Logo from './Logo'
import { socials } from '../lib/config'
import { useTranslation } from '../i18n/hook'
import './Footer.scss'

export default function Footer() {
  const { t, language } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__about">
          <Link to={`/${language}`} className="footer__about-link">
            <Logo style={{ height: 32, width: 32 }} />
            <Text size="sm" fw={500} tt="uppercase" lts={1.5}>
              ALPS BTE
            </Text>
          </Link>
          <Text size="sm" c="dimmed">
            {t('footer.copyright') as string} {year} -{' '}
            {t('footer.rightsReserved') as string}
          </Text>
        </div>

        <div className="footer__links">
          <div className="footer__links-group">
            <Text size="sm" fw={700} mb="xs">
              {t('footer.quickLinks.team') as string}
            </Text>
            <Anchor
              component={Link}
              to={`/${language}/about`}
              size="sm"
              c="dimmed"
            >
              {t('navItems.aboutUs') as string}
            </Anchor>
            <Anchor
              component={Link}
              to={`/${language}/contact`}
              size="sm"
              c="dimmed"
            >
              {t('navItems.contact') as string}
            </Anchor>
            <Anchor
              component={Link}
              to={`/${language}/application`}
              size="sm"
              c="dimmed"
            >
              {t('navItems.application') as string}
            </Anchor>
          </div>

          <div className="footer__links-group">
            <Text size="sm" fw={700} mb="xs">
              {t('footer.quickLinks.showcase') as string}
            </Text>
            <Anchor
              component={Link}
              to={`/${language}/gallery`}
              size="sm"
              c="dimmed"
            >
              {t('navItems.gallery') as string}
            </Anchor>
          </div>

          <div className="footer__links-group">
            <Text size="sm" fw={700} mb="xs">
              {t('footer.quickLinks.help') as string}
            </Text>
            <Anchor
              component={Link}
              to={`/${language}/faq`}
              size="sm"
              c="dimmed"
            >
              {t('navItems.faq') as string}
            </Anchor>
          </div>

          <div className="footer__links-group">
            <Text size="sm" fw={700} mb="xs">
              {t('footer.quickLinks.socials') as string}
            </Text>
            {Object.values(socials).map((s) => (
              <Anchor
                key={s.text}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                size="sm"
                c="dimmed"
              >
                {s.text}
              </Anchor>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
