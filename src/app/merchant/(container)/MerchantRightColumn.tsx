'use client';

import { useGetAllCatalogs } from '@/hooks/catalog';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { toast } from 'sonner';
import QuickActionsCard from '../(component)/QuickActionsCard';
import StockWarningCard from '../(component)/StockWarningCard';
import TopSellingCard from '../(component)/TopSellingCard';
import {
  QuickActionItem,
  StockWarningItem,
} from '../_data/dashboard-right-column';

export default function MerchantRightColumn() {
  const router = useRouter();
  const { catalogs } = useGetAllCatalogs({ take: 20 });

  // Filter menu yang habis (status === false)
  const warnings: StockWarningItem[] = React.useMemo(() => {
    const outOfStock = (catalogs || []).filter((c) => !c.status);
    if (outOfStock.length > 0) {
      return outOfStock.slice(0, 3).map((item) => ({
        id: item.id,
        name: item.title,
        statusText: 'Stok: Kosong (Habis)',
        severity: 'danger' as const,
        actionLabel: 'Buka Stok',
        actionKey: 'UPDATE_STOCK' as const,
      }));
    }
    return [];
  }, [catalogs]);

  const handleQuickAction = (key: QuickActionItem['key']) => {
    if (key === 'ADD_MENU') {
      router.push('/merchant/create');
    } else if (key === 'STOCK_TOGGLE') {
      router.push('/merchant/katalog');
    } else if (key === 'VIEW_STORE') {
      router.push('/');
    }
  };

  const handleStockAction = (item: StockWarningItem) => {
    router.push('/merchant/katalog');
    toast.info(`Buka halaman katalog untuk mengaktifkan stok ${item.name}`);
  };

  return (
    <div className="space-y-6">
      <QuickActionsCard onAction={handleQuickAction} />
      <TopSellingCard />
      {warnings.length > 0 && (
        <StockWarningCard items={warnings} onAction={handleStockAction} />
      )}
    </div>
  );
}
