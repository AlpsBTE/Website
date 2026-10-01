import { Link } from 'react-router-dom'
import { useDisclosure, useWindowScroll } from '@mantine/hooks'
import { Drawer, ActionIcon } from '@mantine/core'
import { IconMenu2 } from '@tabler/icons-react'
import Logo from './Logo'
import LanguageSwitcher from '../i18n/LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { navRoutes } from '../lib/config'
import { useTranslation } from '../i18n/hook'
import './Header.scss'

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false)
  const [scroll] = useWindowScroll()
  const { language, t } = useTranslation()

  const isTransparent = scroll.y < 100

  const handleBurgerClick = () => {
    if (!opened) {
      open()
    } else {
      close()
    }
  }

  return (
    <>
      <header
        className={`header ${isTransparent ? 'header--transparent' : ''}`}
        style={{
          backgroundColor: isTransparent
            ? 'transparent'
            : 'var(--mantine-color-body)',
          boxShadow: isTransparent ? 'none' : '0 0 16px rgba(0,0,0,0.12)',
        }}
      >
        <div className="header__inner">
          <Link to={`/${language}`} className="header__logo-link">
            <Logo />
            <span
              className="header__title"
              style={{
                color: isTransparent ? 'white' : 'var(--mantine-color-text)',
              }}
            >
              ALPS BTE
            </span>
          </Link>

          <nav className="header__nav">
            {navRoutes.map((item) => (
              <Link
                key={item.path}
                to={`/${language}/${item.path}`}
                className="header__nav-link"
                style={{
                  color: isTransparent ? 'white' : 'var(--mantine-color-text)',
                }}
              >
                {t(`navItems.${item.key}`) as string}
              </Link>
            ))}
            <div
              className="header__language"
              style={{
                color: isTransparent ? 'white' : 'var(--mantine-color-text)',
              }}
            >
              <LanguageSwitcher />
            </div>
            <div
              className="header__theme"
              style={{
                color: isTransparent ? 'white' : 'var(--mantine-color-text)',
              }}
            >
              <ThemeToggle />
            </div>
          </nav>

          <ActionIcon
            className="header__burger"
            onClick={handleBurgerClick}
            variant="transparent"
            style={{
              color: isTransparent ? 'white' : 'var(--mantine-color-text)',
            }}
          >
            <IconMenu2 size={24} />
          </ActionIcon>
        </div>
      </header>

      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        padding="md"
        position="right"
        title="Menu"
      >
        <div className="header__drawer">
          {navRoutes.map((item) => (
            <Link
              key={item.path}
              to={`/${language}/${item.path}`}
              onClick={close}
              className="header__drawer-link"
            >
              {t(`navItems.${item.key}`) as string}
            </Link>
          ))}
          <div className="header__drawer-language">
            <LanguageSwitcher />
          </div>
          <div className="header__drawer-theme">
            <ThemeToggle />
          </div>
        </div>
      </Drawer>
    </>
  )
}
