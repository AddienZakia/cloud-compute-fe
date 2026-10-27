import Typography from '@/components/Typography';
import { CheckCircle } from 'lucide-react';
import { sidebarText } from '../_data/sidebar-data';

export default function QualityNote() {
  return (
    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-success-surface border border-success-border">
      <CheckCircle className="size-4 text-success-main shrink-0 mt-0.5" />
      <Typography
        as="p"
        variant="xs"
        className="text-success-main leading-relaxed"
      >
        <span className="font-bold">Kualitas Terverifikasi: </span>
        {sidebarText.qualityNote.replace('Kualitas Terverifikasi: ', '')}
      </Typography>
    </div>
  );
}
