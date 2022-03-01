export interface Event {
  id: string;
  date: string;
  // description: string;
  // openingMessage: string;
  descId: string;
  descEn: string;
  name: string;
  openingId: string;
  openingEn: string;
  foto: string[];
}

export interface UpcomingEvent {
  id: string;
  date: string;
  // description: string;
  // openingMessage: string;
  descId: string;
  descEn: string;
  name: string;
  openingId: string;
  openingEn: string;
  foto: string[];
  itemCount: number;
  fotoItem: string[];
}

export interface Barang {
  id: string;
  lot: string;
  namaBarang: string;
  foto: string[];
  tahunPembuatan: number;
  asal_daerah: string;
  // description: string;
  descId: string;
  descEn: string;
  priceRange: [number, number];
  size: [number, number];
  tipe: string;
  idEvent: string;
}

export interface BarangEvent {
  [key: string]: {
    date: string;
    // description: string;
    // openingMessage: string;
    descId: string;
    descEn: string;
    name: string;
    openingId: string;
    openingEn: string;
    foto: string[];
    barang: Barang[];
  };
}
