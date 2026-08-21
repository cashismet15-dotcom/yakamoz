export type CarpetPricingItem = {
  type: string;
  pricePerM2?: number;
  pricePerM2Min?: number;
  pricePerM2Max?: number;
};

// m2 basi fiyatlar (TL). Isletme sahibinden alinan guncel fiyat listesi.
export const carpetPricing: CarpetPricingItem[] = [
  { type: "Makina Halısı", pricePerM2: 100 },
  { type: "Bambu Halı", pricePerM2: 200 },
  { type: "Akrilik Halı", pricePerM2: 150 },
  { type: "El Dokuma Halı", pricePerM2: 250 },
  { type: "Makina Yün Halı", pricePerM2: 120 },
  { type: "Yün Halı", pricePerM2: 150 },
];

export const storPerdePricePerMetre = 150;
export const yorganBattaniyePricePerAdet = 600;
