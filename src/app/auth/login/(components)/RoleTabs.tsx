import { ShieldCheck, ShoppingBag, Store, Truck } from 'lucide-react';
import { ROLES, RoleId } from '../(container)/data';

interface Props {
  activeRole: RoleId;
  onSelect: (role: RoleId) => void;
}

const icons: Record<RoleId, React.ReactNode> = {
  konsumen: <ShoppingBag size={18} />,
  merchant: <Store size={18} />,
  driver: <Truck size={18} />,
  admin: <ShieldCheck size={18} />,
};

export default function RoleTabs({ activeRole, onSelect }: Props) {
  return (
    <div className="grid grid-cols-4 gap-1 rounded-2xl bg-[#FFF1EE] p-1">
      {ROLES.map((role) => {
        const active = role.id === activeRole;
        return (
          <button
            key={role.id}
            type="button"
            onClick={() => onSelect(role.id)}
            className={`flex flex-col items-center gap-1 rounded-xl px-1 py-2.5 transition ${
              active
                ? 'bg-white shadow-sm text-[#D91E18]'
                : 'text-slate-600 hover:bg-white/60'
            }`}
          >
            <span className={active ? 'text-[#D91E18]' : 'text-slate-400'}>
              {icons[role.id]}
            </span>
            <span
              className={`text-[11px] font-extrabold leading-tight ${active ? 'text-[#D91E18]' : 'text-slate-700'}`}
            >
              {role.label}
            </span>
            <span className="text-[9px] text-slate-400 leading-none">
              {role.sublabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}
