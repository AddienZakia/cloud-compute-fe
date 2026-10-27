export interface DriverItem {
  id: string;
  name: string;
  email: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DriverStats {
  activeDeliveriesCount: number;
  completedDeliveriesCount: number;
  totalEarnings: number;
  dailyEarnings: { day: string; total: number }[];
}
