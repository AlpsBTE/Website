import { useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'

export default function ThemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  return (
    <button
      className="theme-toggle"
      onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
    >
      {colorScheme === 'dark' ? (
        <IconSun size={20} stroke={1.5} />
      ) : (
        <IconMoon size={20} stroke={1.5} />
      )}
    </button>
  )
}
