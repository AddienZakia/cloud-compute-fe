import { ShieldCheck } from 'lucide-react';

export default function PageFooterSection() {
  return (
    <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
      <p className="text-[11px] text-slate-400">
        © 2025 Bungkusin Food Delivery.
      </p>
      <div className="flex items-center gap-2 text-[11px] text-slate-400">
        <ShieldCheck size={12} className="text-slate-400" />
        <span>SHA-256 Auth</span>
        <span className="text-slate-300">•</span>
        <span>Partition Hash Idempotency</span>
        <span className="text-slate-300">•</span>
        <span className="font-bold text-[#D91E18]">v2.4.0-SNAPSHOT</span>
      </div>
    </div>
  );
}
