import type { DeliveryHistoryItem } from '../_schema/history-schema';
import { historyFigmaRows } from './history-figma-data';
import { generateDeterministicHistory } from './history-generator';

export const deliveryHistoryData: DeliveryHistoryItem[] = [
  ...historyFigmaRows,
  ...generateDeterministicHistory(),
];

export const availableMonths = [
  { value: '2025-10', label: 'Bulan Ini (Oktober 2025)' },
];
