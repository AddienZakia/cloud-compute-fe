'use client';

import { Button } from '@/components/ui/button';
import { useGetAllOrders, useUpdateOrderStatus } from '@/hooks/order';
import {
  Bike,
  CheckCircle2,
  Clock,
  MapPin,
  Navigation,
  PackageCheck,
  Store,
} from 'lucide-react';
import { toast } from 'sonner';

export default function DriverPesananAktifPage() {
  const { orders, isLoading, refetch } = useGetAllOrders({
    take: 20,
    sort: 'desc',
    sort_by: 'createdAt',
  });
  const { mutate: updateStatus, isPending } = useUpdateOrderStatus();

  // Filter pesanan yang sedang aktif (waiting atau picked)
  const activeOrders = (orders || []).filter(
    (order) => order.status === 'waiting' || order.status === 'picked',
  );

  const handleUpdateStatus = (
    orderId: string,
    nextStatus: 'picked' | 'delivered',
  ) => {
    updateStatus(
      { id: orderId, status: nextStatus },
      {
        onSuccess: () => {
          toast.success(
            nextStatus === 'picked'
              ? 'Pesanan berhasil diambil dari resto (Picked)'
              : 'Pesanan berhasil diserahkan ke pelanggan (Delivered)',
          );
          refetch();
        },
      },
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-driver-border pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Bike className="h-6 w-6 text-driver-primary" />
            <h1 className="text-xl font-bold text-neutral-100">
              Daftar Pesanan Aktif Driver
            </h1>
          </div>
          <p className="mt-1 text-xs text-neutral-70">
            Daftar tugas pengantaran makanan aktif yang perlu diambil di resto
            dan diantar ke konsumen.
          </p>
        </div>

        <button
          onClick={() => refetch()}
          className="inline-flex items-center gap-2 self-start rounded-lg border border-driver-border bg-driver-card px-3.5 py-2 text-xs font-semibold text-neutral-80 hover:bg-neutral-20"
        >
          Muat Ulang Pesanan
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <Clock className="h-6 w-6 animate-spin text-driver-primary" />
          <span className="ml-2 text-sm text-neutral-70">
            Memuat pesanan aktif...
          </span>
        </div>
      ) : activeOrders.length === 0 ? (
        <div className="rounded-xl border border-dashed border-driver-border bg-driver-card py-16 text-center">
          <PackageCheck className="mx-auto h-12 w-12 text-neutral-50" />
          <h3 className="mt-3 text-sm font-bold text-neutral-90">
            Tidak ada pesanan aktif saat ini
          </h3>
          <p className="mt-1 text-xs text-neutral-60">
            Semua pesanan telah selesai diantar atau Anda sedang menunggu
            alokasi order baru.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {activeOrders.map((order) => {
            const isPicked = order.status === 'picked';
            const total = (order.orderItems || []).reduce(
              (acc, it) => acc + it.quantity * it.priceSnapshot,
              0,
            );

            return (
              <div
                key={order.id}
                className="rounded-2xl border border-driver-border bg-driver-card p-5 shadow-xs"
              >
                {/* Header card */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-driver-border pb-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-neutral-100">
                      #ORD-{order.id.slice(0, 8).toUpperCase()}
                    </span>
                    <span
                      className={`ml-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                        isPicked
                          ? 'border-blue-200 bg-blue-50 text-blue-700'
                          : 'border-amber-200 bg-amber-50 text-amber-700'
                      }`}
                    >
                      {isPicked
                        ? 'Sedang Diantar'
                        : 'Menunggu Pengambilan di Resto'}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-driver-primary">
                    Total Order: Rp {total.toLocaleString('id-ID')}
                  </p>
                </div>

                {/* Pickup & Dropoff Grid */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-driver-border bg-driver-surface p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-100">
                      <Store className="h-4 w-4 text-driver-primary" />
                      Titik Jemput (Restoran)
                    </div>
                    <p className="mt-1 text-xs font-semibold text-neutral-90">
                      {order.merchant?.title || 'Restoran Mitra'}
                    </p>
                    <p className="text-[11px] text-neutral-60 mt-0.5">
                      {order.merchant?.address || 'Alamat restoran'}
                    </p>
                  </div>

                  <div className="rounded-xl border border-driver-border bg-driver-surface p-3.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-100">
                      <MapPin className="h-4 w-4 text-driver-primary" />
                      Titik Antar (Konsumen)
                    </div>
                    <p className="mt-1 text-xs font-semibold text-neutral-90">
                      {order.user?.name || 'Pelanggan'}
                    </p>
                    <p className="text-[11px] text-neutral-60 mt-0.5">
                      {order.deliveryAddress || 'Alamat pengantaran'}
                    </p>
                  </div>
                </div>

                {/* Menu items list */}
                <div className="mt-4 rounded-xl border border-driver-border bg-driver-surface-muted p-3 text-xs">
                  <p className="font-semibold text-neutral-80 mb-2">
                    Item Menu:
                  </p>
                  <ul className="space-y-1">
                    {(order.orderItems || []).map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between text-neutral-70"
                      >
                        <span>
                          {item.quantity}x {item.catalog?.title || 'Menu'}
                        </span>
                        <span className="font-mono">
                          Rp{' '}
                          {(item.quantity * item.priceSnapshot).toLocaleString(
                            'id-ID',
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action button */}
                <div className="mt-4 flex justify-end">
                  {!isPicked ? (
                    <Button
                      type="button"
                      disabled={isPending}
                      onClick={() => handleUpdateStatus(order.id, 'picked')}
                      className="bg-driver-primary font-semibold text-neutral-10 hover:bg-driver-primary-hover"
                    >
                      <Navigation className="mr-1.5 h-4 w-4" />
                      Ambil Pesanan dari Resto (Picked)
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      disabled={isPending}
                      onClick={() => handleUpdateStatus(order.id, 'delivered')}
                      className="bg-emerald-600 font-semibold text-white hover:bg-emerald-700"
                    >
                      <CheckCircle2 className="mr-1.5 h-4 w-4" />
                      Selesaikan Pengantaran (Delivered)
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
