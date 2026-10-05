import { useEffect, useState } from 'react'
import { ListIcon, XIcon } from '@phosphor-icons/react'
import { DOWNLOAD_URL, NAV_LINKS } from '../config'
import CtaLink from './CtaLink'
import LogoMark from './LogoMark'
import WindowsLogo from './WindowsLogo'

const UNDERLINE =
  'relative after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:rounded-full after:bg-linear-to-r after:from-cyan-400 after:to-blue-500 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'bg-ink/85 backdrop-blur-md border-white/5' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <LogoMark className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
          <span className="text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap text-white group-hover:text-cyan-300 transition-colors">
            Nova AI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`${UNDERLINE} ${i === 0 ? 'text-white after:scale-x-100' : 'after:scale-x-0'} hover:text-cyan-300 transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <CtaLink
            href={DOWNLOAD_URL}
            className="gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm border border-blue-500/80 bg-blue-950/40 shadow-[0_0_18px_rgb(59_130_246/0.35)] hover:bg-blue-600/30 hover:border-cyan-400/80 hover:shadow-[0_0_26px_rgb(34_211_238/0.45)]"
          >
            <WindowsLogo className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span className="whitespace-nowrap">
              Download<span className="hidden sm:inline"> for Windows</span>
            </span>
          </CtaLink>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 active:scale-90 transition-all focus:outline-hidden cursor-pointer"
          >
            {menuOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden px-4 pt-2 pb-6 bg-ink-menu border-b border-white/10 space-y-3 animate-menu-in">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${i === 0 ? 'text-white' : 'text-slate-300'} hover:bg-white/5 hover:pl-5 active:bg-white/10 transition-all`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
