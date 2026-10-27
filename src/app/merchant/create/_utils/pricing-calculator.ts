export const KOMISI_BUNGKUSIN_RATE = 0.12;

export function calculateNetIncome(hargaJual: number): number {
  if (!hargaJual || hargaJual <= 0) return 0;
  return Math.round(hargaJual * (1 - KOMISI_BUNGKUSIN_RATE));
}

export function calculateSavingPercentage(
  hargaJual: number,
  hargaCoret?: number,
): number | null {
  if (!hargaCoret || hargaCoret <= hargaJual) {
    return null;
  }
  return Math.floor(((hargaCoret - hargaJual) / hargaCoret) * 100);
}

export function formatRupiah(value: number): string {
  return new Intl.NumberFormat('id-ID').format(value);
}

export function parsePriceNumber(raw: string): number {
  const digitsOnly = raw.replace(/\D/g, '');
  return digitsOnly ? parseInt(digitsOnly, 10) : 0;
}
