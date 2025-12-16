'use client'

export default function OceanBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* YouTube Embed Background - Lofi underwater music */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="https://www.youtube.com/embed/QCL7VXuO35g?autoplay=1&mute=1&loop=1&playlist=QCL7VXuO35g&controls=0&showinfo=0&rel=0&modestbranding=1"
        title="Ocean Background"
        allow="autoplay; encrypted-media"
        style={{
          transform: 'scale(1.5)',
          opacity: 0.4
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-teal-900/60 to-blue-900/80"></div>
      
      {/* Animated Fish/Bubbles */}
      <div className="absolute inset-0">
        <div className="bubble bubble-1">🐠</div>
        <div className="bubble bubble-2">🐟</div>
        <div className="bubble bubble-3">🐡</div>
        <div className="bubble bubble-4">🫧</div>
        <div className="bubble bubble-5">🫧</div>
        <div className="bubble bubble-6">🐙</div>
      </div>
    </div>
  )
}
