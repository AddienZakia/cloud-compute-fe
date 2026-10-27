import { ROLES, RoleId } from '../(container)/data';

interface Props {
  onSimulate: (roleId: RoleId) => void;
}

const dotColors: Record<RoleId, string> = {
  konsumen: 'bg-red-500',
  merchant: 'bg-orange-500',
  driver: 'bg-lime-600',
};

const simLabels: Record<RoleId, string> = {
  konsumen: 'User Fast',
  merchant: 'Resto Fast',
  driver: 'Driver Fast',
};

export default function QuickSimButtons({ onSimulate }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {ROLES.map((role) => (
        <button
          key={role.id}
          type="button"
          onClick={() => onSimulate(role.id)}
          className="flex items-center gap-1.5 rounded-full bg-[#FFF1EE] px-3 py-1.5 text-[11px] font-bold text-slate-700 transition hover:bg-red-100 active:scale-95"
        >
          <span className={`h-2 w-2 rounded-full ${dotColors[role.id]}`} />
          {simLabels[role.id]}
        </button>
      ))}
    </div>
  );
}
