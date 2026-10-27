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
            Logistics
          </span>
          <div className="h-4 w-px bg-slate-200" />
          <span className="text-xs text-slate-400">
            Real-Time Event-Driven Architecture (Apache Kafka Cluster OP-ID)
          </span>
        </div>

        {/* Right */}
        <p className="text-xs text-slate-400">
          © 2025 Bungkusin Food Delivery, Jakarta, Indonesia.
        </p>
      </div>
    </footer>
  );
}
