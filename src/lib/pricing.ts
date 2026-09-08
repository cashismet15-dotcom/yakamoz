export type CarpetPrice = { type: string; pricePerM2: number };
export type PerdePrice = { type: string; pricePerMetre: number };

export type CityPricing = {
  carpets: CarpetPrice[];
  perde: PerdePrice[];
  yorganBattaniyePerAdet: number;
  overlokPerMetre?: number;
};

// Isletme sahibinden alinan guncel fiyat listeleri (TL). Sehre gore degisir.
const ankaraPricing: CityPricing = {
  carpets: [
    { type: "Makine Halısı", pricePerM2: 80 },
    { type: "Jel Halı", pricePerM2: 80 },
    { type: "Akrilik Halı", pricePerM2: 100 },
    { type: "Shaggy Halı", pricePerM2: 135 },
    { type: "Isparta Halı", pricePerM2: 300 },
    { type: "Nepal Halı", pricePerM2: 300 },
    { type: "Viskoz Halı", pricePerM2: 300 },
    { type: "Bambu Halı", pricePerM2: 300 },
    { type: "El Dokuma Halı", pricePerM2: 350 },
    { type: "Afgan Halı", pricePerM2: 350 },
  ],
  perde: [
    { type: "Stor Perde", pricePerMetre: 150 },
    { type: "Zebra Perde", pricePerMetre: 150 },
  ],
  yorganBattaniyePerAdet: 600,
  overlokPerMetre: 125,
};

export const cityPricing: Record<string, CityPricing> = {
  İstanbul: {
    carpets: [
      { type: "Makina Halısı", pricePerM2: 100 },
      { type: "Bambu Halı", pricePerM2: 200 },
      { type: "Akrilik Halı", pricePerM2: 150 },
      { type: "El Dokuma Halı", pricePerM2: 250 },
      { type: "Makina Yün Halı", pricePerM2: 120 },
      { type: "Yün Halı", pricePerM2: 150 },
    ],
    perde: [{ type: "Stor Perde", pricePerMetre: 150 }],
    yorganBattaniyePerAdet: 600,
  },
  Ankara: ankaraPricing,
  Osmaniye: ankaraPricing,
};

export const pricingCities = Object.keys(cityPricing);

export function getCityPricing(city: string): CityPricing {
  return cityPricing[city] ?? cityPricing.İstanbul;
}
