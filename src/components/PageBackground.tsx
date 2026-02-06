export function PageBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40" />

      {/* Soft gradient blobs - lighter and more colorful */}
      <div className="absolute -top-56 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,hsl(217_91%_85%),transparent_60%)]" />
      <div className="absolute top-[35%] -left-56 h-[520px] w-[520px] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_center,hsl(234_89%_88%),transparent_60%)]" />
      <div className="absolute bottom-[-260px] right-[-260px] h-[680px] w-[680px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,hsl(217_91%_90%),transparent_60%)]" />
      
      {/* Additional accent blob for variety */}
      <div className="absolute top-1/2 right-1/4 h-[420px] w-[420px] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,hsl(260_80%_90%),transparent_60%)]" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Softer vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,white_90%)]" />
    </div>
  );
}
