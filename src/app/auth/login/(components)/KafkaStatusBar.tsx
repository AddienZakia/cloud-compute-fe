export default function KafkaStatusBar() {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-slate-900 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
        </span>
        <span className="text-[11px] font-mono text-slate-300">
          KAFKA CLUSTER :{' '}
          <span className="font-bold text-orange-400">ONLINE</span>{' '}
          [broker-01.bungkusin.id:9092]
        </span>
      </div>
      <div className="hidden items-center gap-1 sm:flex">
        <span className="text-[11px] font-mono text-slate-400">
          TOPIC: <span className="font-bold text-amber-400">auth.events</span>
          {' • '}PARTITION: <span className="font-bold text-white">P-03</span>
          {' • '}OFFSET: <span className="font-bold text-white">#481,290</span>
        </span>
      </div>
    </div>
  );
}
