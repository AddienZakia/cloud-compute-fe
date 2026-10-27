import { AxiosError } from 'axios';

export type Metadata = {
  take: number;
  page: number;
  total_data: number;
  total_page: number;
  sort?: string;
  sort_by?: string;
  filter?: string;
  filter_by?: string;
};

export interface MemberFilters {
  search?: string;
  domicile?: string;
  gender?: string;
  startDate?: string;
  endDate?: string;
}

export interface PaginatedResult<T> {
  data: T[];
  meta?: Metadata;
  metadata?: Metadata;
}

export type ApiResponse<T = unknown> = {
  code: number;
  status: boolean;
  message: string;
  data: T;
};

export type PaginatedApiResponse<T> = ApiResponse<PaginatedResult<T>>;

export type MetadataRequest = {
  page?: number;
  take?: number;
  sort?: 'asc' | 'desc';
  sort_by?: string;
  filter?: string;
  filter_by?: string;
  [key: string]: unknown;
};

export type UninterceptedApiError = {
  code: number;
  status: boolean;
  message: string | Record<string, string[]>;
};

export type ApiErrorResponse = {
  code: number;
  status: boolean;
  message: string;
};

export type APIResponseError = AxiosError<ApiErrorResponse>;
