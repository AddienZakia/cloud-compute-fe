import Typography from '@/components/Typography';

export default function MerchantFooter() {
  return (
    <footer className="border-neutral-30 bg-neutral-10/40 mt-auto w-full border-t px-6 py-3.5">
      <div className="flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
        {/* Sisi Kiri: Hak Cipta & Ekosistem */}
        <Typography
          as="span"
          variant="xs"
          className="text-neutral-60 text-center sm:text-left"
        >
          © 2025 Bungkusin Logistics Ecosystem · Real-time Event-Driven Culinary
          Dispatch
        </Typography>

        {/* Sisi Kanan: Status Klaster & Partisi Kafka */}
        <div className="text-neutral-70 flex shrink-0 items-center gap-2 font-mono text-[11px]">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="bg-success-main size-2 shrink-0 rounded-full" />
            Broker cluster-jkt-1
          </span>
          <span className="text-neutral-40">•</span>
          <span>Kafka Partition 04</span>
          <span className="text-neutral-40">•</span>
          <span>Latency 12ms WIB</span>
        </div>
      </div>
    </footer>
  );
}
