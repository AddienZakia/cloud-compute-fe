export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  role: 'ADMIN' | 'USER' | 'DRIVER' | 'MERCHANT';
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phoneNumber?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'USER' | 'DRIVER' | 'MERCHANT';
  phoneNumber?: string | null;
  address?: string;
  rating?: number;
  status?: boolean;
  imageUrl?: string | null;
  isAvailable?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProfilePayload {
  name?: string;
  email?: string;
  phone_number?: string;
  password?: string;
}
