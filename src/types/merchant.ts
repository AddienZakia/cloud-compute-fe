import { CatalogItem } from './catalog';

export interface MerchantItem {
  id: string;
  title: string;
  email: string;
  address: string;
  rating: number;
  status: boolean;
  imageUrl?: string | null;
  createdAt: string;
  updatedAt: string;
  catalogs?: CatalogItem[];
}

export interface CreateMerchantPayload {
  title: string;
  email: string;
  password: string;
  address: string;
  rating?: number;
  status?: boolean;
  imageUrl?: string;
}

export interface UpdateMerchantPayload {
  title?: string;
  email?: string;
  password?: string;
  address?: string;
  rating?: number;
  status?: boolean;
  imageUrl?: string;
}

export interface MerchantStats {
  ordersToday: number;
  waitingConfirmation: number;
  preparing: number;
  completed: number;
  grossRevenue: number;
  hourlySales: {
    hour: string;
    todayVolume: number;
    averageVolume: number;
  }[];
}
