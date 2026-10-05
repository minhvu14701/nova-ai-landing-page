import { useState } from 'react'

const BASE =
  'group btn-shine inline-flex items-center justify-center rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400'

// Call-to-action link with hover sheen, press feedback and a click ripple.
export default function CtaLink({ href, className = '', children }) {
  const [ripples, setRipples] = useState([])

  function handlePointerDown(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const ripple = {
      id: event.timeStamp,
      size,
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
    }
    setRipples((current) => [...current, ripple])
  }

  function removeRipple(id) {
    setRipples((current) => current.filter((ripple) => ripple.id !== id))
  }

  return (
    <a href={href} onPointerDown={handlePointerDown} className={`${BASE} ${className}`}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden="true"
          onAnimationEnd={() => removeRipple(ripple.id)}
          className="absolute -z-10 rounded-full bg-white/40 pointer-events-none animate-ripple"
          style={{ width: ripple.size, height: ripple.size, left: ripple.x, top: ripple.y }}
        />
      ))}
    </a>
  )
}

// Arrow that nudges right while its CtaLink is hovered.
export function CtaArrow({ icon: Icon, size = 16 }) {
  return <Icon size={size} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
}
