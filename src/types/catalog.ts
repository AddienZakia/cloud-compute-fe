import { MetadataRequest } from './api';

export interface CatalogItem {
  id: string;
  merchantId: string;
  title: string;
  price: number;
  category: string;
  status: boolean;
  imageUrl?: string | null;
  createdAt: string;
  updatedAt: string;
  merchant?: {
    id: string;
    title: string;
    address: string;
    imageUrl?: string | null;
  };
}

export interface CreateCatalogPayload {
  merchantId?: string;
  title: string;
  price: number;
  category: string;
  status?: boolean;
  imageUrl?: string;
}

export interface UpdateCatalogPayload {
  merchantId?: string;
  title?: string;
  price?: number;
  category?: string;
  status?: boolean;
  imageUrl?: string;
}

export type CatalogFilterParams = MetadataRequest & {
  merchantId?: string;
};
