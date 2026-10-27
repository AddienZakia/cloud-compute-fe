'use client';

import { ROUTES } from '@/lib/routes';
import {
  AlertCircle,
  Download,
  HelpCircle,
  MessageSquare,
  RefreshCw,
  Store,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { HistoryOrder } from '../(container)/data';
import StatusBadge from './StatusBadge';

const fmt = (n: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(n);

type OrderHistoryItemProps = {
  order: HistoryOrder;
  onReorder: () => void;
};

export default function OrderHistoryItem({
  order,
  onReorder,
}: OrderHistoryItemProps) {
  const isCancelled = order.status === 'CANCELLED';

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-start">
        {/* Thumbnail */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={order.imageUrl}
            alt={order.merchantName}
            fill
            className={`object-cover ${isCancelled ? 'saturate-50' : ''}`}
            unoptimized
          />
        </div>

        {/* Middle: details */}
        <div className="min-w-0 flex-1 space-y-2">
          {/* Status + ID + date */}
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={order.status} />
            <span className="text-[11px] font-mono text-slate-400">
              {order.id} • {order.orderedAt}
            </span>
          </div>

          {/* Merchant name */}
          <h3 className="font-bold text-slate-900">{order.merchantName}</h3>

          {/* Item summary or cancel reason */}
          {isCancelled && order.cancelReason ? (
            <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              <p className="text-xs text-red-700">
                <span className="font-bold">Alasan: </span>
                {order.cancelReason}
              </p>
            </div>
          ) : (
            <p className="text-xs leading-relaxed text-slate-400">
              {order.itemSummary}
            </p>
          )}

          {/* Total + payment */}
          <div className="flex flex-wrap items-center gap-3">
            {isCancelled ? (
              <>
                <span className="text-sm font-semibold text-slate-400 line-through">
                  {fmt(order.totalAmount)}
                </span>
                {order.isRefunded && (
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                    Telah Di-refund 100%
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="text-sm font-bold text-slate-900">
                  Total: {fmt(order.totalAmount)}
                </span>
                <span className="text-xs text-slate-400">
                  Pembayaran: {order.paymentMethod}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Right: action buttons */}
        <div className="flex flex-row flex-wrap gap-2 sm:flex-col sm:items-end sm:justify-start">
          {isCancelled ? (
            <>
              <Link
                href={ROUTES.merchantDetail}
                className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 active:scale-95"
              >
                <Store className="h-3.5 w-3.5" />
                Kunjungi Merchant
              </Link>
              <button className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 active:scale-95">
                <HelpCircle className="h-3.5 w-3.5" />
                Bantuan
              </button>
            </>
          ) : (
            <>
              <button className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 active:scale-95">
                <Download className="h-3.5 w-3.5" />
                Unduh Invoice
              </button>
              {order.id === '#BKS-20251020-4102' && (
                <button className="flex items-center gap-1.5 rounded-xl bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-700 transition hover:bg-orange-100 active:scale-95">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Beri Ulasan Resto
                </button>
              )}
              <button
                onClick={onReorder}
                className="flex items-center gap-1.5 rounded-xl bg-[#D91E18] px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Pesan Lagi (Reorder)
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
