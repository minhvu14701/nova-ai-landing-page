import { CloudIcon, LightningIcon, ShieldCheckIcon } from '@phosphor-icons/react'
import SpotlightCard from './SpotlightCard'
import WindowsLogo from './WindowsLogo'

const HIGHLIGHTS = [
  {
    icon: <LightningIcon size={26} weight="fill" />,
    title: (
      <>
        Powered by
        <br />
        Advanced AI Models
      </>
    ),
    text: 'Get the latest AI technology for the best results.',
    tone: 'text-fuchsia-400 border-violet-400/50 bg-violet-500/10 shadow-[0_0_22px_-4px_rgb(168_85_247/0.6)]',
  },
  {
    icon: <ShieldCheckIcon size={26} />,
    title: 'Safe & Private',
    text: 'Your data stays on your device. No tracking. No data selling.',
    tone: 'text-cyan-300 border-cyan-400/50 bg-cyan-500/10 shadow-[0_0_22px_-4px_rgb(34_211_238/0.6)]',
  },
  {
    icon: <CloudIcon size={26} />,
    title: 'Fast & Reliable',
    text: 'Smooth performance, optimized for Windows.',
    tone: 'text-sky-300 border-sky-400/50 bg-sky-500/10 shadow-[0_0_22px_-4px_rgb(56_189_248/0.6)]',
  },
  {
    icon: <WindowsLogo className="w-6 h-6" />,
    title: 'Made for Windows',
    text: 'Designed to work seamlessly on Windows 10 & 11.',
    tone: 'text-blue-400 border-blue-400/50 bg-blue-500/10 shadow-[0_0_22px_-4px_rgb(59_130_246/0.6)]',
  },
]

export default function Highlights() {
  return (
    <section className="bg-ink-band border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 lg:divide-x">
          {HIGHLIGHTS.map((item) => (
            <SpotlightCard
              key={item.text}
              className="flex items-center gap-4 px-4 lg:px-6 py-7 transition-all duration-300 active:scale-[0.98] [--spot-color:rgb(56_189_248/0.1)]"
            >
              <div
                className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${item.tone}`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed transition-colors group-hover:text-slate-300">{item.text}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
