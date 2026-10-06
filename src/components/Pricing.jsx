import {
  ArrowRightIcon,
  CheckCircleIcon,
  CrownIcon,
  HeadsetIcon,
  InfinityIcon,
  LightningIcon,
  MonitorIcon,
  ShieldCheckIcon,
  TagIcon,
} from '@phosphor-icons/react'
import { PLAN_URLS, PRICES } from '../config'
import CtaLink, { CtaArrow } from './CtaLink'
import SpotlightCard from './SpotlightCard'

const formatUsd = (amount) => `$${amount.toFixed(2)}`

// Annual savings are measured against paying the monthly price for 12 months.
const ANNUAL_FULL_PRICE = PRICES.monthly * 12
const ANNUAL_SAVING_PERCENT = Math.round((1 - PRICES.annual / ANNUAL_FULL_PRICE) * 100)

const PLAN_FEATURES = [
  'Full access to all premium features',
  'Unlimited image generation',
  'Unlimited video generation',
  'Advanced AI models (GPT-4o, Claude, DALL·E 3, Stable Diffusion, etc.)',
  'AI writing & coding assistant',
  'Voice & speech features',
  'File upload & data analysis',
  'Priority processing speed',
  'No usage limits',
]

const PLANS = [
  {
    id: 'trial',
    title: '30-Day Pro Trial',
    tagline: 'Full access. No limits.',
    price: '$0',
    period: '/ 30 days',
    cta: 'Start 30-Day Free Trial',
    badge: (
      <span className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-[0_0_14px_rgb(37_99_235/0.6)]">
        <CrownIcon size={12} weight="fill" /> Free Trial
      </span>
    ),
    card: 'border border-blue-500/40 bg-[#0a1030]/80 hover:border-blue-400/70 hover:shadow-[0_0_45px_-10px_rgb(59_130_246/0.6)] [--spot-color:rgb(59_130_246/0.12)]',
    button: 'bg-linear-to-r from-blue-500 via-blue-600 to-violet-500 shadow-glow-blue hover:shadow-[0_12px_32px_-6px_rgb(124_58_237/0.7)]',
    check: 'text-blue-500',
  },
  {
    id: 'monthly',
    title: 'Monthly Plan',
    tagline: 'Full access. Great flexibility.',
    price: formatUsd(PRICES.monthly),
    period: '/ month',
    cta: 'Get Started',
    badge: (
      <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-linear-to-r from-sky-300 via-blue-200 to-indigo-300 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-indigo-950 shadow-[0_0_22px_rgb(129_140_248/0.7)]">
        <CrownIcon size={14} weight="fill" className="text-amber-500" /> Most Popular
      </span>
    ),
    card: 'border-2 border-transparent [background:linear-gradient(#0c1238,#0c1238)_padding-box,linear-gradient(140deg,#22d3ee,#6366f1_45%,#d946ef)_border-box] shadow-[0_0_55px_-10px_rgb(139_92_246/0.75)] hover:shadow-[0_0_75px_-8px_rgb(139_92_246/0.9)] [--spot-color:rgb(139_92_246/0.14)]',
    button: 'bg-linear-to-r from-blue-500 to-blue-600 shadow-glow-blue hover:shadow-[0_12px_32px_-6px_rgb(59_130_246/0.8)]',
    check: 'text-blue-500',
  },
  {
    id: 'annual',
    title: 'Annual Plan',
    tagline: 'Best value. More creativity.',
    price: formatUsd(PRICES.annual),
    originalPrice: formatUsd(ANNUAL_FULL_PRICE),
    period: '/ 12 months',
    cta: 'Get Annual Plan',
    badge: (
      <span className="absolute top-5 right-5 inline-flex items-center gap-1 rounded-full border border-emerald-400/50 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
        <TagIcon size={12} weight="fill" /> Save {ANNUAL_SAVING_PERCENT}%
      </span>
    ),
    card: 'border border-emerald-400/50 bg-linear-to-b from-[#062b2e]/90 to-[#071526]/90 shadow-[0_0_40px_-14px_rgb(16_185_129/0.6)] hover:border-emerald-300/80 hover:shadow-[0_0_50px_-10px_rgb(16_185_129/0.7)] [--spot-color:rgb(16_185_129/0.12)]',
    button: 'bg-linear-to-r from-emerald-500 to-teal-400 shadow-[0_10px_28px_-6px_rgb(16_185_129/0.6)] hover:shadow-[0_12px_32px_-6px_rgb(16_185_129/0.8)]',
    check: 'text-emerald-400',
  },
]

const PERKS = [
  { icon: InfinityIcon, title: 'Unlimited Everything', text: 'No limits on images, videos, or features.' },
  { icon: LightningIcon, title: 'Lightning Fast', text: 'Optimized for peak performance.' },
  { icon: ShieldCheckIcon, title: 'Secure & Private', text: 'Your data stays 100% yours.' },
  { icon: MonitorIcon, title: 'Works on Windows', text: 'Download and start in minutes.' },
  { icon: HeadsetIcon, title: '24/7 Support', text: "We're here to help, anytime." },
]

function PlanCard({ plan }) {
  return (
    <SpotlightCard className={`flex flex-col rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 ${plan.card}`}>
      {/* Same-height badge row in every card keeps titles, prices and buttons aligned across plans */}
      <div className="mb-3 h-6">{plan.badge}</div>

      <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
      <p className="mt-1 text-slate-300">{plan.tagline}</p>

      <div className="mt-5 flex items-end gap-3">
        <span className="text-5xl font-extrabold tracking-tight text-white">{plan.price}</span>
        {plan.originalPrice ? (
          <span className="pb-1 text-sm leading-tight text-slate-400">
            <s className="text-base text-slate-300">{plan.originalPrice}</s>
            <br />
            {plan.period}
          </span>
        ) : (
          <span className="pb-1.5 text-slate-300">{plan.period}</span>
        )}
      </div>

      <CtaLink href={PLAN_URLS[plan.id]} className={`mt-6 w-full gap-2 px-6 py-3.5 text-base ${plan.button}`}>
        <span>{plan.cta}</span>
        <CtaArrow icon={ArrowRightIcon} />
      </CtaLink>

      <ul className="mt-7 space-y-2.5">
        {PLAN_FEATURES.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
            <CheckCircleIcon size={18} weight="fill" className={`mt-px shrink-0 ${plan.check}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-ink border-b border-white/5 py-20 lg:py-24 text-white scroll-mt-20">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-225 h-125 rounded-full bg-blue-700/20 blur-[130px] pointer-events-none" />
      <div className="absolute -right-40 top-1/3 w-130 h-130 rounded-full bg-violet-700/20 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Choose Your Plan</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Simple Pricing.{' '}
            <span className="whitespace-nowrap bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Maximum Value.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
            Get full access to Nova AI's most advanced features — from image and video generation to writing, coding, and
            more. No limits. No restrictions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 rounded-2xl border border-blue-500/30 bg-[#0a1030]/70 divide-y divide-white/10 sm:divide-y-0 lg:divide-x">
          {PERKS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group flex items-center gap-4 px-5 py-6">
              <span className="flex w-12 h-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan-400/60 text-cyan-300 shadow-[0_0_18px_-2px_rgb(34_211_238/0.5)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon size={24} weight="bold" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
