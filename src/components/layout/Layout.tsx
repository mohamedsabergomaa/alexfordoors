import type { ReactNode } from 'react'
import { WhatsAppFab } from '../business/WhatsAppFab'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        تخطَّ إلى المحتوى
      </a>
      <div id="top-sentinel" aria-hidden="true" />
      <ScrollToTop />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
