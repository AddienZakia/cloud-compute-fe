import Typography from '@/components/Typography';

export default function MerchantFooter() {
  return (
    <footer className="w-full border-t border-neutral-30 bg-neutral-10/40 px-6 py-3.5 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
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
        <div className="flex items-center gap-2 text-neutral-70 font-mono text-[11px] shrink-0">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="size-2 rounded-full bg-success-main shrink-0" />
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
