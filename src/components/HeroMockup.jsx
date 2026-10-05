import {
  ArrowRightIcon,
  ChatCenteredTextIcon,
  CodeIcon,
  GearIcon,
  ImageIcon,
  LightbulbIcon,
  MagnifyingGlassIcon,
  PencilSimpleLineIcon,
  PlayIcon,
  SparkleIcon,
  VideoIcon,
  WrenchIcon,
} from '@phosphor-icons/react'
import fantasyCastle from '../assets/images/fantasy-castle.jpg'
import neonCat from '../assets/images/neon-cat.jpg'
import sunsetMountains from '../assets/images/sunset-mountains.jpg'
import LogoMark from './LogoMark'

const SIDEBAR_ITEMS = [
  { icon: ChatCenteredTextIcon, label: 'Chat', active: true },
  { icon: ImageIcon, label: 'Image Generator' },
  { icon: VideoIcon, label: 'Video Generator' },
  { icon: PencilSimpleLineIcon, label: 'Writing' },
  { icon: CodeIcon, label: 'Code' },
  { icon: MagnifyingGlassIcon, label: 'Research' },
  { icon: WrenchIcon, label: 'Tools' },
]

const QUICK_PROMPTS = [
  { icon: ImageIcon, label: 'Create image' },
  { icon: VideoIcon, label: 'Create video' },
  { icon: PencilSimpleLineIcon, label: 'Write content' },
  { icon: LightbulbIcon, label: 'Explain' },
  { icon: CodeIcon, label: 'Code' },
  { icon: SparkleIcon, label: 'Brainstorm' },
]

const THUMBNAILS = [
  { src: fantasyCastle, video: false },
  { src: sunsetMountains, video: true },
  { src: neonCat, video: false },
]

// Decorative screenshot of the desktop app, rendered as a laptop seen slightly from the side.
export default function HeroMockup() {
  return (
    <div className="w-full max-w-2xl perspective-[1800px]" aria-hidden="true">
      <div className="group/laptop transition-transform duration-700 ease-out -rotate-y-12 rotate-x-3 hover:-rotate-y-4 hover:rotate-x-0 hover:-translate-y-2">
        <div className="bg-[#14161c] p-2.5 sm:p-3 rounded-t-2xl shadow-laptop border-t border-x border-slate-600/70 transition-shadow duration-500 group-hover/laptop:shadow-[0_0_0_2px_#27272a,0_35px_60px_-12px_rgb(0_0_0/0.85),0_0_60px_rgb(56_189_248/0.35)]">
          <div className="flex justify-center mb-1.5">
            <span className="w-1.5 h-1.5 bg-slate-800 rounded-full border border-slate-600" />
          </div>

          <div className="bg-[#0a0f24] rounded-md overflow-hidden border border-slate-800 text-[10px] sm:text-[11px] select-none text-slate-300">
            <div className="bg-[#0d1430] px-3 py-1.5 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <LogoMark size="xs" />
                <span className="font-semibold text-slate-200">Nova AI</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                <span className="px-1 rounded-sm hover:text-white hover:bg-slate-700/60 transition-colors">―</span>
                <span className="px-1 rounded-sm hover:text-white hover:bg-slate-700/60 transition-colors">▢</span>
                <span className="px-1 rounded-sm hover:text-white hover:bg-red-500/80 transition-colors">✕</span>
              </div>
            </div>

            <div className="grid grid-cols-12 min-h-64 sm:min-h-80">
              <div className="col-span-3 bg-[#080d20] p-2 border-r border-slate-800/80 flex flex-col gap-0.5">
                {SIDEBAR_ITEMS.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`px-1.5 py-1.5 rounded-md flex items-center gap-1.5 transition-all duration-200 ${
                      active
                        ? 'bg-blue-600/25 text-cyan-300 font-medium'
                        : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200 hover:translate-x-0.5'
                    }`}
                  >
                    <Icon size={12} className="shrink-0" />
                    <span className="truncate">{label}</span>
                  </div>
                ))}
                <div className="group/gear mt-auto px-1.5 py-1.5 text-slate-500 flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                  <GearIcon size={12} className="transition-transform duration-500 group-hover/gear:rotate-90" />
                  <span>Settings</span>
                </div>
              </div>

              <div className="col-span-6 p-3 sm:p-4 flex flex-col justify-center bg-linear-to-b from-[#0b1130] to-[#070b1d]">
                <p className="text-base sm:text-lg font-bold text-white">Hello!</p>
                <p className="text-[10px] sm:text-xs text-slate-300">How can I help you today?</p>

                <div className="relative mt-3">
                  <div className="w-full bg-[#121a3a] border border-blue-500/40 text-slate-400 rounded-lg px-2.5 py-2 text-[10px] pr-9 transition-all hover:border-cyan-400/60 hover:shadow-[0_0_12px_rgb(56_189_248/0.25)]">
                    Ask anything...
                  </div>
                  <span className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white transition-all hover:bg-cyan-500 hover:scale-110">
                    <ArrowRightIcon size={11} weight="bold" />
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-1.5 mt-3">
                  {QUICK_PROMPTS.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="flex items-center justify-center gap-1 px-1.5 py-1 rounded-md bg-[#111836] text-[8px] sm:text-[9px] text-slate-300 border border-slate-700/80 transition-all hover:border-cyan-400/60 hover:text-white hover:-translate-y-px"
                    >
                      <Icon size={10} className="shrink-0 text-slate-400" />
                      <span className="truncate">{label}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-3 p-2 flex flex-col gap-2 bg-[#070b1d]">
                {THUMBNAILS.map(({ src, video }) => (
                  <div
                    key={src}
                    className="group/thumb relative flex-1 rounded-md overflow-hidden border border-slate-700 transition-colors hover:border-cyan-400/60"
                  >
                    <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110" />
                    {video && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors group-hover/thumb:bg-black/10">
                        <span className="w-5 h-5 rounded-full bg-white/85 flex items-center justify-center text-slate-900 transition-transform duration-300 group-hover/thumb:scale-125">
                          <PlayIcon size={9} weight="fill" />
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard deck */}
        <div className="relative -mx-[6%] h-4 sm:h-5 bg-linear-to-b from-[#3a3f4b] via-[#252932] to-[#14161c] rounded-b-2xl shadow-2xl [clip-path:polygon(3%_0,97%_0,100%_100%,0_100%)] flex justify-center">
          <div className="w-20 h-1.5 bg-[#1a1d24] rounded-b-md" />
        </div>
        <div className="w-4/5 mx-auto h-3 bg-linear-to-r from-transparent via-cyan-500/30 to-transparent blur-md" />
      </div>
    </div>
  )
}
