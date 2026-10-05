import { ArrowRightIcon, CreditCardIcon, MonitorIcon, ShieldCheckIcon } from '@phosphor-icons/react'
import { DOWNLOAD_URL } from '../config'
import CtaLink, { CtaArrow } from './CtaLink'
import HeroMockup from './HeroMockup'
import WindowsLogo from './WindowsLogo'
import heroMountains from '../assets/images/hero-mountains.jpg'

const TRUST_BADGES = [
  { icon: MonitorIcon, label: 'Windows 10 & 11' },
  { icon: ShieldCheckIcon, label: 'Free to try for 30 days' },
  { icon: CreditCardIcon, label: 'No credit card required' },
]

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-36 lg:pb-24 scroll-mt-20">
      {/* Background photo with overlays that keep the text readable */}
      <img src={heroMountains} alt="" aria-hidden="true" className="absolute inset-0 -z-20 w-full h-full object-cover object-[center_40%]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-transparent to-ink/60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-6 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400">The All-In-One AI Creative Studio</p>

            <h1 className="font-extrabold tracking-tight text-white">
              <span className="block text-6xl sm:text-7xl leading-none">
                Nova{' '}
                <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">AI</span>
              </span>
              <span className="block mt-3 text-3xl sm:text-4xl xl:text-[2.4rem] font-bold leading-tight lg:whitespace-nowrap">
                Create. Imagine.{' '}
                <span className="whitespace-nowrap bg-linear-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Do More.</span>
              </span>
            </h1>

            <p className="text-slate-200 text-base sm:text-lg max-w-lg leading-relaxed">
              Your powerful AI companion for work, study, and creativity. Chat, write, generate images and videos — all in
              one app.
            </p>

            <div className="pt-2">
              <CtaLink
                href={DOWNLOAD_URL}
                className="gap-3 px-8 py-3.5 text-base bg-linear-to-r from-sky-500 via-blue-600 to-violet-600 shadow-glow-violet hover:shadow-[0_15px_40px_-5px_rgb(124_58_237/0.7)] w-full sm:w-auto"
              >
                <WindowsLogo className="w-5 h-5" />
                <span>Download for Windows</span>
                <CtaArrow icon={ArrowRightIcon} size={18} />
              </CtaLink>
            </div>

            <ul className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <li key={label} className="group flex items-center gap-1.5 hover:text-white transition-colors">
                  <Icon size={16} className="text-slate-200 transition-transform duration-300 group-hover:scale-125" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="hidden sm:flex absolute -top-14 right-4 z-30 items-start select-none pointer-events-none animate-float">
              <svg className="w-14 h-12 mt-8 text-slate-200" viewBox="0 0 56 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <path d="M50 6C40 6 22 12 10 38" />
                <path d="M10 38l1-10M10 38l9-5" />
              </svg>
              <span className="font-hand text-2xl sm:text-[1.7rem] leading-7 text-slate-100 -rotate-12 text-center">
                Turn your ideas
                <br />
                into reality
              </span>
            </div>

            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
