import { ArrowRightIcon, CheckIcon, CornersOutIcon, PlayIcon, SparkleIcon, SpeakerHighIcon } from '@phosphor-icons/react'
import { DOWNLOAD_URL } from '../config'
import CtaLink, { CtaArrow } from './CtaLink'
import fantasyCastle from '../assets/images/fantasy-castle.jpg'
import neonPortrait from '../assets/images/neon-portrait.jpg'
import sunsetMountains from '../assets/images/sunset-mountains.jpg'

const BENEFITS = ['High-quality output', 'Multiple styles & templates', 'Fast and easy to use']

export default function Creativity() {
  return (
    <section id="screenshots" className="py-20 lg:py-24 bg-ink text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-violet-700/25 blur-[120px] pointer-events-none" />
      <div className="absolute left-1/3 top-0 w-[420px] h-[420px] rounded-full bg-blue-700/20 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">
          {/* Stacked image & video showcase */}
          <div className="lg:col-span-6 perspective-[1600px]">
            <div className="relative h-80 sm:h-[420px] rotate-y-12 -rotate-x-2">
              {/* Layered "stack" outlines behind the castle */}
              <div className="absolute left-[3%] top-[2%] w-[52%] h-[46%] rounded-2xl border border-violet-400/40 bg-violet-500/5 shadow-[0_0_30px_rgb(139_92_246/0.35)] -rotate-6" />
              <div className="absolute left-[5%] top-[5%] w-[52%] h-[46%] rounded-2xl border border-blue-400/40 bg-blue-500/5 -rotate-3" />

              <div className="group absolute left-[7%] top-[8%] w-[52%] h-[46%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-500 hover:z-40 hover:scale-105 hover:border-cyan-300/60 hover:shadow-glow-cyan">
                <img
                  src={fantasyCastle}
                  alt="AI-generated fairytale castle"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="group absolute right-[2%] top-[18%] z-10 w-[46%] h-[74%] rounded-2xl p-[2px] bg-linear-to-br from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_45px_-5px_rgb(168_85_247/0.7)] transition-all duration-500 hover:z-40 hover:scale-[1.04] hover:shadow-[0_0_65px_-5px_rgb(168_85_247/0.85)]">
                <div className="w-full h-full rounded-[14px] overflow-hidden">
                  <img
                    src={neonPortrait}
                    alt="AI-generated neon portrait"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="group absolute left-0 bottom-[2%] z-20 w-[50%] rounded-xl p-[1.5px] bg-linear-to-br from-blue-400/80 via-violet-500/60 to-fuchsia-500/80 shadow-[0_0_35px_-5px_rgb(99_102_241/0.7)] transition-all duration-500 hover:z-40 hover:-translate-y-1.5">
                <div className="rounded-[10px] overflow-hidden bg-slate-950">
                  <div className="relative aspect-video">
                    <img
                      src={sunsetMountains}
                      alt="AI-generated cinematic video scene"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-colors group-hover:bg-black/10">
                      <div className="relative w-10 h-10">
                        <span className="absolute inset-0 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                        <div className="relative w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <PlayIcon size={16} weight="fill" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-2 text-slate-300">
                    <PlayIcon size={10} weight="fill" />
                    <div className="flex-1 bg-slate-700 h-1 rounded-full overflow-hidden">
                      <div className="bg-linear-to-r from-cyan-400 to-violet-400 h-full w-1/3 transition-all duration-1000 ease-out group-hover:w-full" />
                    </div>
                    <SpeakerHighIcon size={10} />
                    <CornersOutIcon size={10} />
                  </div>
                </div>
              </div>

              <div className="absolute right-[18%] top-0 z-30 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-cyan-400/60 text-cyan-200 text-xs font-semibold leading-tight backdrop-blur-md shadow-[0_0_25px_-3px_rgb(34_211_238/0.6)] -rotate-3">
                <SparkleIcon size={18} weight="fill" className="text-cyan-300 animate-pulse" />
                <span>
                  Image &amp; Video
                  <br />
                  Generation
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Unleash Your Creativity</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-tight">
              Create Stunning Images
              <br />
              and Videos with AI
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Bring your ideas to life with powerful AI image and video generation. From concept to creation — in just a
              few clicks.
            </p>

            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3 pt-1">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="group flex items-center gap-2 text-sm text-slate-200 font-medium">
                  <CheckIcon size={18} weight="bold" className="text-cyan-400 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                  <span className="transition-colors group-hover:text-white">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <CtaLink
                href={DOWNLOAD_URL}
                className="gap-2.5 px-7 py-3 text-sm border border-blue-500/80 bg-blue-950/30 shadow-[0_0_20px_rgb(59_130_246/0.3)] hover:bg-blue-600/25 hover:border-violet-400/80 hover:shadow-[0_0_28px_rgb(139_92_246/0.5)]"
              >
                <span>Try It Now</span>
                <CtaArrow icon={ArrowRightIcon} />
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
