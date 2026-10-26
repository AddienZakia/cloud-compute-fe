'use client';

import * as React from 'react';
import { toast } from 'sonner';
import QuickActionsCard from '../(component)/QuickActionsCard';
import StockWarningCard from '../(component)/StockWarningCard';
import TopSellingCard from '../(component)/TopSellingCard';
import {
  QuickActionItem,
  StockWarningItem,
  stockWarningItems,
} from '../_data/dashboard-right-column';

export default function MerchantRightColumn() {
  const [warnings] = React.useState<StockWarningItem[]>(stockWarningItems);

  const handleQuickAction = (key: QuickActionItem['key']) => {
    if (key === 'ADD_MENU') {
      toast.info('Buka form: + Tambah Menu Baru');
    } else if (key === 'STOCK_TOGGLE') {
      toast.info('Buka panel: Kelola Stok Cepat (Stock Toggle)');
    } else if (key === 'VIEW_STORE') {
      toast.info('Membuka: Tampilan Toko Konsumen');
    }
  };

  const handleStockAction = (item: StockWarningItem) => {
    toast.success(`${item.actionLabel} stok untuk ${item.name}`);
  };

  return (
    <div className="space-y-6">
      <QuickActionsCard onAction={handleQuickAction} />
      <TopSellingCard />
      <StockWarningCard items={warnings} onAction={handleStockAction} />
    </div>
  );
}
