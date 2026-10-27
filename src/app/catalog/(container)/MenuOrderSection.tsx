'use client';

import { useCallback, useState } from 'react';
import AddToCartBar from '../(components)/AddToCartBar';
import MenuTitleBlock from '../(components)/MenuTitleBlock';
import MerchantRow from '../(components)/MerchantRow';
import OptionGroup from '../(components)/OptionGroup';
import Toast from '../(components)/Toast';
import { MenuDetail } from './data';

interface Props {
  menu: MenuDetail;
}

function buildInitialRadio(menu: MenuDetail): Record<string, string> {
  const init: Record<string, string> = {};
  for (const group of menu.optionGroups) {
    if (group.type === 'radio') {
      const def = group.options.find((o) => o.default);
      if (def) init[group.id] = def.id;
    }
  }
  return init;
}

export default function MenuOrderSection({ menu }: Props) {
  const [radioValues, setRadioValues] = useState<Record<string, string>>(() =>
    buildInitialRadio(menu),
  );
  const [checkedIds, setCheckedIds] = useState<Record<string, string[]>>({});
  const [note, setNote] = useState('');
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState(false);

  const showToast = useCallback(() => {
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  }, []);

  const handleRadioChange = (groupId: string, optionId: string) => {
    setRadioValues((prev) => ({ ...prev, [groupId]: optionId }));
  };

  const handleCheckboxChange = (
    groupId: string,
    optionId: string,
    checked: boolean,
  ) => {
    setCheckedIds((prev) => {
      const curr = prev[groupId] ?? [];
      return {
        ...prev,
        [groupId]: checked
          ? [...curr, optionId]
          : curr.filter((id) => id !== optionId),
      };
    });
  };

  const extraPrice = menu.optionGroups
    .filter((g) => g.type === 'checkbox')
    .flatMap((g) => {
      const ids = checkedIds[g.id] ?? [];
      return g.options
        .filter((o) => ids.includes(o.id))
        .map((o) => o.extraPrice ?? 0);
    })
    .reduce((a, b) => a + b, 0);

  const totalPrice = (menu.price + extraPrice) * qty;

  return (
    <div className="flex flex-col gap-4">
      <MerchantRow />
      <MenuTitleBlock menu={menu} />

      {menu.optionGroups.map((group) => (
        <OptionGroup
          key={group.id}
          group={group}
          radioValue={radioValues[group.id]}
          checkedIds={checkedIds[group.id] ?? []}
          onRadioChange={handleRadioChange}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}

      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-bold text-slate-800">
            📝 Catatan Khusus untuk Dapur
          </span>
        </div>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="Contoh: Tolong kremesan dipisah di plastik agar tetap garing, sambal dibungkus rapat"
          className="w-full resize-none rounded-xl bg-[#FFF1EE] p-3 text-[13px] text-slate-700 placeholder-slate-400 outline-none focus:ring-2 focus:ring-[#D91E18]/30"
        />
      </div>

      <AddToCartBar
        qty={qty}
        totalPrice={totalPrice}
        soldOut={menu.soldOut}
        onQtyChange={setQty}
        onAddToCart={showToast}
      />

      <Toast visible={toast} message="Ditambahkan ke keranjang" />
    </div>
  );
}
