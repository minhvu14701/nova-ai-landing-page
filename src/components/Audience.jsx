import { BriefcaseIcon, BuildingsIcon, GraduationCapIcon, PaletteIcon } from '@phosphor-icons/react'
import SpotlightCard from './SpotlightCard'

const AUDIENCES = [
  {
    icon: GraduationCapIcon,
    title: 'Students',
    lines: ['Study smarter,', 'get better results.'],
    tone: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
    bar: 'from-blue-500 to-cyan-400',
  },
  {
    icon: BriefcaseIcon,
    title: 'Professionals',
    lines: ['Save time,', 'boost productivity.'],
    tone: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600',
    bar: 'from-sky-500 to-blue-400',
  },
  {
    icon: PaletteIcon,
    title: 'Creators',
    lines: ['Bring your ideas', 'to life.'],
    tone: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600',
    bar: 'from-violet-500 to-fuchsia-400',
  },
  {
    icon: BuildingsIcon,
    title: 'Businesses',
    lines: ['Innovate, automate,', 'grow faster.'],
    tone: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
    bar: 'from-indigo-500 to-blue-400',
  },
]

export default function Audience() {
  return (
    <section id="faq" className="py-20 lg:py-24 bg-paper text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Perfect for Everyone</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              More Than a Tool —
              <br />
              Your AI Partner
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Whether you're a student, professional, creator, or business owner, Nova AI helps you work smarter, be more
              creative, and achieve more.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AUDIENCES.map(({ icon: Icon, title, lines, tone, bar }) => (
              <SpotlightCard
                key={title}
                className="overflow-hidden p-6 rounded-2xl bg-white border border-slate-200/80 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 active:scale-[0.98] [--spot-color:rgb(37_99_235/0.07)]"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 ${tone}`}
                >
                  <Icon size={22} weight="fill" />
                </div>
                <h3 className="text-base font-bold text-navy mb-1.5">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {lines[0]}
                  <br />
                  {lines[1]}
                </p>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-1 bg-linear-to-r origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${bar}`}
                />
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
