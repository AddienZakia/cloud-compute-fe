import { OptionGroupData } from '../(container)/data';
import RadioOptionCard from './RadioOptionCard';
import ToppingCheckbox from './ToppingCheckbox';

interface Props {
  group: OptionGroupData;
  radioValue?: string;
  checkedIds?: string[];
  onRadioChange?: (groupId: string, optionId: string) => void;
  onCheckboxChange?: (
    groupId: string,
    optionId: string,
    checked: boolean,
  ) => void;
}

export default function OptionGroup({
  group,
  radioValue,
  checkedIds = [],
  onRadioChange,
  onCheckboxChange,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900">
            {group.title}
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">{group.subtitle}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${
            group.required
              ? 'bg-red-50 text-[#D91E18]'
              : 'bg-slate-100 text-slate-500'
          }`}
        >
          {group.required ? 'Wajib' : 'Opsional'}
        </span>
      </div>

      {group.type === 'radio' && (
        <div className="flex flex-col gap-2">
          {group.options.map((opt) => (
            <RadioOptionCard
              key={opt.id}
              id={opt.id}
              label={opt.label}
              desc={opt.desc}
              selected={radioValue === opt.id}
              onSelect={(id) => onRadioChange?.(group.id, id)}
            />
          ))}
        </div>
      )}

      {group.type === 'checkbox' && (
        <div className="rounded-xl bg-[#FFF1EE] divide-y divide-red-100">
          {group.options.map((opt) => (
            <ToppingCheckbox
              key={opt.id}
              id={opt.id}
              label={opt.label}
              desc={opt.desc}
              extraPrice={opt.extraPrice ?? 0}
              checked={checkedIds.includes(opt.id)}
              onChange={(id, checked) =>
                onCheckboxChange?.(group.id, id, checked)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
