import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu } from '@mantine/core'
import { IconLanguage } from '@tabler/icons-react'
import { useTranslation } from './hook'
import { languages, languageLabels } from './types'
import type { Language } from './types'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [opened, setOpened] = useState(false)

  const handleChange = (newLang: Language) => {
    if (newLang === language) return
    setLanguage(newLang)
    const segments = location.pathname.split('/')
    if (segments.length > 1) {
      segments[1] = newLang
      navigate(segments.join('/'))
    }
  }

  return (
    <Menu opened={opened} onChange={setOpened}>
      <Menu.Target>
        <button className="language-switcher__trigger">
          <IconLanguage size={20} stroke={1.5} />
          <span className="language-switcher__label">
            {languageLabels[language]}
          </span>
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        {languages.map((l) => (
          <Menu.Item key={l} onClick={() => handleChange(l)}>
            {languageLabels[l]}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  )
}
