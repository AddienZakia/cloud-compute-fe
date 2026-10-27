interface OrderIdCellProps {
  id: string;
  time: string;
}

export function OrderIdCell({ id, time }: OrderIdCellProps) {
  return (
    <td className="px-4 py-3.5 align-middle">
      <p className="text-xs font-bold text-neutral-100">{id}</p>
      <p className="text-[11px] text-neutral-60">{time}</p>
    </td>
  );
}
