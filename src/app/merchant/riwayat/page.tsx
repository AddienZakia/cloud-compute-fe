'use client';

import Typography from '@/components/Typography';
import { useGetAllOrders } from '@/hooks/order';
import { Clock, History, Package } from 'lucide-react';
import { useState } from 'react';

const statusBadgeStyles: Record<string, string> = {
  waiting: 'bg-amber-50 text-amber-700 border-amber-200',
  picked: 'bg-blue-50 text-blue-700 border-blue-200',
  delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  cancelled: 'bg-red-50 text-red-700 border-red-200',
};

const statusLabels: Record<string, string> = {
  waiting: 'Menunggu Konfirmasi',
  picked: 'Diproses / Siap Antar',
  delivered: 'Selesai Terkirim',
  cancelled: 'Dibatalkan',
};

export default function MerchantOrderHistoryPage() {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const { orders, isLoading, refetch } = useGetAllOrders({
    take: 50,
    sort: 'desc',
    sort_by: 'createdAt',
  });

  const filteredOrders = (orders || []).filter((order) => {
    if (filterStatus === 'all') return true;
    return order.status === filterStatus;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-neutral-30 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <History className="h-6 w-6 text-merchant-primary" />
            <Typography
              as="h1"
              variant="xl"
              weight="bold"
              className="text-neutral-90"
            >
              Riwayat Pesanan Restoran
            </Typography>
          </div>
          <Typography as="p" variant="s" className="text-neutral-60 mt-1">
            Daftar seluruh riwayat transaksi dan status pengiriman pesanan toko
            Anda.
          </Typography>
        </div>

        <button
          onClick={() => refetch()}
          className="inline-flex items-center gap-2 self-start rounded-lg border border-neutral-30 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-80 hover:bg-neutral-20"
        >
          Muat Ulang Data
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'all', label: 'Semua Status' },
          { key: 'waiting', label: 'Menunggu' },
          { key: 'picked', label: 'Diproses' },
          { key: 'delivered', label: 'Selesai' },
          { key: 'cancelled', label: 'Dibatalkan' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilterStatus(tab.key)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              filterStatus === tab.key
                ? 'bg-merchant-primary text-white shadow-xs'
                : 'border border-neutral-30 bg-white text-neutral-70 hover:bg-neutral-20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Order List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Clock className="h-6 w-6 animate-spin text-merchant-primary" />
          <span className="ml-2 text-sm text-neutral-60">
            Memuat riwayat pesanan...
          </span>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="rounded-xl border border-dashed border-neutral-30 bg-neutral-10 py-16 text-center">
          <Package className="mx-auto h-12 w-12 text-neutral-40" />
          <Typography
            as="h3"
            variant="m"
            weight="bold"
            className="mt-3 text-neutral-80"
          >
            Tidak ada data pesanan
          </Typography>
          <Typography as="p" variant="s" className="text-neutral-50 mt-1">
            Belum ada riwayat pesanan dengan filter status yang dipilih.
          </Typography>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const total = (order.orderItems || []).reduce(
              (acc, item) => acc + item.quantity * item.priceSnapshot,
              0,
            );
            const dateStr = new Date(order.createdAt).toLocaleString('id-ID', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });

            return (
              <div
                key={order.id}
                className="rounded-xl border border-neutral-30 bg-white p-5 shadow-xs transition hover:border-neutral-40"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-neutral-20 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-neutral-90">
                        #ORD-{order.id.slice(0, 8).toUpperCase()}
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                          statusBadgeStyles[order.status] ||
                          'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {statusLabels[order.status] || order.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-50 mt-0.5">
                      {dateStr}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-neutral-50">Total Pesanan</p>
                    <p className="text-sm font-bold text-merchant-primary">
                      Rp {total.toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="font-semibold text-neutral-80">
                      Detail Pelanggan
                    </p>
                    <p className="text-neutral-60 mt-0.5">
                      {order.user?.name || 'Pelanggan Bungkusin'}
                    </p>
                    <p className="text-[11px] text-neutral-50 truncate mt-0.5">
                      Alamat: {order.deliveryAddress || '-'}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-neutral-80">
                      Kurir Pengantar
                    </p>
                    <p className="text-neutral-60 mt-0.5">
                      {order.driver?.name
                        ? `Driver: ${order.driver.name}`
                        : 'Belum ada kurir'}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-neutral-80">
                      Menu Dipesan
                    </p>
                    <ul className="mt-1 space-y-1">
                      {(order.orderItems || []).map((item) => (
                        <li
                          key={item.id}
                          className="flex justify-between text-neutral-60"
                        >
                          <span>
                            {item.quantity}x {item.catalog?.title || 'Menu'}
                          </span>
                          <span className="font-mono">
                            Rp{' '}
                            {(
                              item.quantity * item.priceSnapshot
                            ).toLocaleString('id-ID')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
