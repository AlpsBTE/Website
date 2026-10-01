import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css'
import './index.scss'
import { I18nProvider } from './i18n/context'
import App from './App'

const theme = createTheme({
  fontFamily: "'Open Sans', 'Roboto', sans-serif",
  headings: {
    fontFamily: "'Open Sans', 'Roboto', sans-serif",
  },
  primaryColor: 'gray',
  primaryShade: 6,
  defaultRadius: 'sm',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <BrowserRouter>
        <I18nProvider>
          <App />
        </I18nProvider>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
)
