import { ArrowRightIcon, TimerIcon } from '@phosphor-icons/react'
import { DOWNLOAD_URL } from '../config'
import CtaLink, { CtaArrow } from './CtaLink'
import LogoMark from './LogoMark'
import WindowsLogo from './WindowsLogo'

// Flowing lines along the bottom edge of the band.
function Waves() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full h-28 pointer-events-none"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 90C240 40 480 120 720 80s480-70 720-20" stroke="rgb(99 102 241 / 0.35)" strokeWidth="1.5" />
      <path d="M0 100C260 60 500 125 760 92s460-60 680-18" stroke="rgb(56 189 248 / 0.25)" strokeWidth="1.5" />
      <path d="M0 110C280 80 540 128 800 104s420-46 640-14" stroke="rgb(168 85 247 / 0.3)" strokeWidth="1.5" />
    </svg>
  )
}

export default function DownloadCta() {
  return (
    <section
      id="download"
      className="group/cta relative overflow-hidden py-14 lg:py-16 text-white bg-linear-to-r from-[#060a22] via-[#0b1347] to-[#2a1c86] scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="absolute -top-20 right-[10%] w-96 h-96 rounded-full bg-violet-600/30 blur-[100px] pointer-events-none transition-all duration-700 group-hover/cta:bg-fuchsia-500/30 group-hover/cta:scale-125"
      />
      <Waves />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-4">
            <LogoMark size="lg" className="transition-transform duration-500 group-hover/cta:rotate-6 group-hover/cta:scale-105" />
            <div>
              <p className="text-3xl font-bold text-white">Nova AI</p>
              <p className="text-sm text-slate-300">Your All-in-One AI Creative Studio</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-16 bg-white/15" />

          <div>
            <h2 className="text-2xl font-bold text-white leading-snug">
              Ready to Unlock
              <br />
              Your Creativity?
            </h2>
            <p className="text-sm text-slate-300 mt-1.5">Download Nova AI now and get started with a 30-day free trial.</p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-3 w-full lg:w-auto">
          <CtaLink
            href={DOWNLOAD_URL}
            className="gap-3 px-8 py-3.5 text-base bg-linear-to-r from-sky-500 via-blue-600 to-violet-600 shadow-glow-violet hover:shadow-[0_15px_45px_-5px_rgb(124_58_237/0.75)] w-full sm:w-auto"
          >
            <WindowsLogo className="w-5 h-5" />
            <span>Download for Windows</span>
            <CtaArrow icon={ArrowRightIcon} />
          </CtaLink>
          <div className="flex items-center gap-5 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <WindowsLogo className="w-3 h-3" /> Windows 10 &amp; 11
            </span>
            <span className="flex items-center gap-1.5">
              <TimerIcon size={14} /> Free 30-day trial
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
