import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { List, X } from '@phosphor-icons/react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { navigation } from '../../data/navigation'
import { buttonClass } from '../../lib/buttonClass'
import { cn } from '../../lib/cn'
import { whatsappMessages } from '../../lib/whatsapp'
import { WhatsAppLink } from '../business/WhatsAppLink'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const sentinel = document.getElementById('top-sentinel')
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-56px 0px 0px 0px' },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <header className={cn('site-header', scrolled && 'is-scrolled')}>
        <div className="site-header__inner container">
          <Link to="/" className="brand" aria-label="الصفحة الرئيسية">
            <span className="brand__mark" aria-hidden="true">
              A
            </span>
            <span className="brand__text">
              <strong>{siteConfig.brand.nameArabic}</strong>
              <small>{siteConfig.brand.nameEnglish}</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="التنقل الرئيسي">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn('desktop-nav__link', isActive && 'is-active')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <WhatsAppLink
              message={whatsappMessages.generalQuote}
              className={buttonClass('primary', 'sm', 'site-header__cta')}
            >
              اطلب عرض سعر
            </WhatsAppLink>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X size={24} weight="light" aria-hidden="true" />
              ) : (
                <List size={24} weight="light" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn('mobile-menu', menuOpen && 'is-open')}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-menu__nav" aria-label="تنقل الجوال">
          {navigation.map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={{ '--i': index } as CSSProperties}
              className={({ isActive }) =>
                cn('mobile-menu__link', isActive && 'is-active')
              }
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mobile-menu__number">0{index + 1}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <WhatsAppLink
          message={whatsappMessages.generalQuote}
          className={buttonClass('primary', 'md', 'mobile-menu__cta')}
          tabIndex={menuOpen ? 0 : -1}
        >
          اطلب عرض سعر
        </WhatsAppLink>
      </div>
    </>
  )
}
