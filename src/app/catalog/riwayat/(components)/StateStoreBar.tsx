export default function StateStoreBar() {
  return (
    <div className="mx-auto mt-8 max-w-[1200px] px-6">
      <div className="flex flex-col items-center justify-between gap-3 rounded-2xl bg-slate-900 px-5 py-3.5 sm:flex-row">
        {/* Left */}
        <div className="flex flex-wrap items-center gap-3 text-[12px]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-slate-300">
              State Store:{' '}
              <span className="font-bold text-orange-400">
                kafka-streams-order-history
              </span>
            </span>
          </div>
          <span className="hidden text-slate-600 sm:block">|</span>
          <span className="text-slate-400">
            Partition Replica:{' '}
            <span className="font-semibold text-slate-200">
              3 (Quorum In-Sync)
            </span>
          </span>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-4 text-[12px] text-slate-400">
          <span>
            Offset Lag:{' '}
            <span className="font-semibold text-emerald-400">0 ms</span>
          </span>
          <span className="hidden text-slate-600 sm:block">|</span>
          <span>
            Last Synced:{' '}
            <span className="font-semibold text-slate-300">
              Just now (14:34:02 WIB)
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
