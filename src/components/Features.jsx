import {
  ArrowRightIcon,
  ChatCircleDotsIcon,
  CodeIcon,
  GraduationCapIcon,
  ImageIcon,
  MonitorPlayIcon,
  PencilSimpleLineIcon,
} from '@phosphor-icons/react'
import { DOWNLOAD_URL } from '../config'
import CtaLink, { CtaArrow } from './CtaLink'
import SpotlightCard from './SpotlightCard'

const FEATURES = [
  { icon: ChatCircleDotsIcon, title: 'AI Chat', text: 'Get instant answers, ideas and solutions.', tone: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600' },
  { icon: PencilSimpleLineIcon, title: 'Writing Assistant', text: 'Write, improve and polish your content.', tone: 'bg-sky-50 text-sky-500 group-hover:bg-sky-500' },
  { icon: ImageIcon, title: 'Image Generation', text: 'Turn your imagination into stunning visuals.', tone: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600' },
  { icon: MonitorPlayIcon, title: 'Video Generation', text: 'Create professional videos from text or images.', tone: 'bg-pink-50 text-pink-500 group-hover:bg-pink-500' },
  { icon: CodeIcon, title: 'Code Assistant', text: 'Write, debug and optimize your code.', tone: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600', weight: 'bold' },
  { icon: GraduationCapIcon, title: 'Research', text: 'Find reliable information in seconds.', tone: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-24 bg-paper text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5 xl:col-span-4 space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Features</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2rem] xl:text-[2.5rem] font-extrabold text-navy tracking-tight leading-tight">
              <span className="lg:whitespace-nowrap">Everything You Need,</span>
              <br />
              in <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">One App</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Nova AI brings together the most advanced AI tools, so you can create, learn, and get things done — faster
              and easier than ever before.
            </p>
            <div className="pt-2">
              <CtaLink
                href={DOWNLOAD_URL}
                className="gap-2 px-6 py-3 text-sm bg-linear-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-violet-500/40"
              >
                <span>Explore All Features</span>
                <CtaArrow icon={ArrowRightIcon} />
              </CtaLink>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(({ icon: Icon, title, text, tone, weight = 'fill' }) => (
              <SpotlightCard
                key={title}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 active:scale-[0.98] [--spot-color:rgb(37_99_235/0.07)]"
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg ${tone}`}
                >
                  <Icon size={22} weight={weight} />
                </div>
                <h3 className="text-base font-bold text-navy mb-1.5 transition-colors group-hover:text-blue-700">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
