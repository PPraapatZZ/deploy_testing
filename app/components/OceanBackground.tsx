'use client'

export default function OceanBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video Background - Beautiful Ocean Scene */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="https://cdn.pixabay.com/video/2022/11/07/138747-768997038_large.mp4" type="video/mp4" />
        <source src="https://cdn.pixabay.com/video/2020/05/08/37864-419186096_large.mp4" type="video/mp4" />
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
