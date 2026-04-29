"use client"

export default function LoadingScreen({ isVisible = true }) {
  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#050814] px-6 text-slate-100">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,180,216,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(124,58,237,0.18),_transparent_32%),linear-gradient(180deg,rgba(5,8,20,0.98),rgba(7,11,19,0.96))]"
      />
      <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_28px_90px_rgba(2,8,24,0.72)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10">
          <div className="loader-ring h-14 w-14 rounded-full border-2 border-cyan-300/90 border-t-transparent" aria-hidden="true" />
        </div>
        <p className="mt-6 text-2xl font-semibold tracking-[0.24em] text-white">ASMA BANU I</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">Preparing a clean portfolio experience.</p>
        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <span className="loader-bar block h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400" />
        </div>
      </div>
    </div>
  )
}