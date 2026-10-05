import { DiscordLogoIcon, FacebookLogoIcon, XLogoIcon, YoutubeLogoIcon } from '@phosphor-icons/react'
import { LEGAL_LINKS, NAV_LINKS, SOCIAL_LINKS } from '../config'
import LogoMark from './LogoMark'

const SOCIAL_ICONS = {
  Discord: DiscordLogoIcon,
  'X (Twitter)': XLogoIcon,
  YouTube: YoutubeLogoIcon,
  Facebook: FacebookLogoIcon,
}

export default function Footer() {
  return (
    <footer className="bg-ink-footer text-slate-400 text-xs border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="group flex items-center gap-2.5">
            <LogoMark size="sm" className="transition-transform duration-500 group-hover:rotate-12" />
            <span className="text-lg font-bold text-white tracking-tight">Nova AI</span>
          </a>

          <nav className="flex flex-wrap justify-center items-center gap-y-2 text-slate-300 font-medium divide-x divide-white/15">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="px-4 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-slate-300 font-medium">Follow us</span>
            {SOCIAL_LINKS.map(({ name, href }) => {
              const Icon = SOCIAL_ICONS[name]
              return (
                <a
                  key={name}
                  href={href}
                  title={name}
                  aria-label={name}
                  className="text-slate-200 transition-all duration-300 hover:text-cyan-400 hover:-translate-y-1 hover:scale-110 active:scale-90"
                >
                  <Icon size={20} weight="fill" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>© {new Date().getFullYear()} Nova AI. All rights reserved.</div>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-slate-300 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
