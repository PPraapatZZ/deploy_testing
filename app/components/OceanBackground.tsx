'use client'

export default function OceanBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://cdn.pixabay.com/video/2016/03/31/2893-161879721_large.mp4" type="video/mp4" />
      </video>
      
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
