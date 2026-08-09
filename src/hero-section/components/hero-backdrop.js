export function HeroBackdrop() {
  return (
    <>
      <div
        className='pointer-events-none absolute inset-0 opacity-70 bg-[linear-gradient(to_right,rgba(26,26,28,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,26,28,0.08)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,#000_50%,transparent_45%)]'
        aria-hidden='true'
      />
      <div
        className='pointer-events-none absolute -top-40 left-1/2 size-168 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl'
        aria-hidden='true'
      />
    </>
  );
}
