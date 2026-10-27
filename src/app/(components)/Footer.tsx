export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
        {/* Left */}
        <div className="flex items-center gap-3">
          <span
            className="text-lg font-extrabold tracking-tight"
            style={{ color: '#D91E18' }}
          >
            Bungkusin
          </span>
          <span className="text-sm font-semibold text-slate-400">
            Food Delivery
          </span>
        </div>

        {/* Right */}
        <p className="text-xs text-slate-400">
          © 2026 Bungkusin Food Delivery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
