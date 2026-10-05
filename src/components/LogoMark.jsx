import { useId } from 'react'

const SIZES = {
  xs: 'w-3.5 h-3.5',
  sm: 'w-7 h-7',
  md: 'w-9 h-9',
  lg: 'w-14 h-14',
}

// Gradient "N" brand glyph.
export default function LogoMark({ size = 'md', className = '' }) {
  // Strip characters that are not safe inside url(#...) references.
  const gradientId = `logo${useId().replace(/[^\w-]/g, '')}`
  return (
    <svg
      viewBox="0 0 32 32"
      className={`${SIZES[size]} shrink-0 drop-shadow-[0_0_10px_rgb(99_102_241/0.55)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="0.5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      <path
        d="M7.5 26V6l17 20V6"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
