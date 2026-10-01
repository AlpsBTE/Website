import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { I18nProvider } from './i18n/context'
import App from './App'

describe('App', () => {
  it('renders the home page by default', () => {
    render(
      <MantineProvider>
        <I18nProvider>
          <MemoryRouter initialEntries={['/en']}>
            <App />
          </MemoryRouter>
        </I18nProvider>
      </MantineProvider>
    )

    expect(
      screen.getByRole('heading', {
        name: 'Recreating our Countries in Minecraft',
      })
    ).toBeInTheDocument()
  })

  it('renders the about page when navigated to', () => {
    render(
      <MantineProvider>
        <I18nProvider>
          <MemoryRouter initialEntries={['/en/about']}>
            <App />
          </MemoryRouter>
        </I18nProvider>
      </MantineProvider>
    )

    expect(
      screen.getByRole('heading', { name: 'About Us' })
    ).toBeInTheDocument()
  })
})
