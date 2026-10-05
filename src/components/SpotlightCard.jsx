// Card whose background glow follows the cursor (see the `spotlight` utility in index.css).
export default function SpotlightCard({ className = '', children }) {
  function handlePointerMove(event) {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div onPointerMove={handlePointerMove} className={`spotlight group ${className}`}>
      {children}
    </div>
  )
}
