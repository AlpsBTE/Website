import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
} from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from './i18n/hook'
import { languages } from './i18n/types'
import type { Language } from './i18n/types'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Downloads from './pages/Downloads'
import Faq from './pages/Faq'
import Application from './pages/Application'
import Contact from './pages/Contact'
import Error from './pages/Error'
import './App.scss'

function Layout() {
  const { lang } = useParams<{ lang: string }>()
  const { pathname } = useLocation()
  const { language, setLanguage } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const validLang = languages.includes(lang as Language)
      ? (lang as Language)
      : 'en'
    if (validLang !== language) {
      setLanguage(validLang)
    }
  }, [lang, language, setLanguage])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="faq" element={<Faq />} />
          <Route path="application" element={<Application />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/about" element={<Navigate to="/en/about" replace />} />
        <Route
          path="/gallery"
          element={<Navigate to="/en/gallery" replace />}
        />
        <Route
          path="/downloads"
          element={<Navigate to="/en/downloads" replace />}
        />
        <Route path="/faq" element={<Navigate to="/en/faq" replace />} />
        <Route
          path="/application"
          element={<Navigate to="/en/application" replace />}
        />
        <Route
          path="/contact"
          element={<Navigate to="/en/contact" replace />}
        />
        <Route path="/:lang/*" element={<Layout />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </div>
  )
}
