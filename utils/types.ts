export interface Event {
  id: string;
  date: string;
  description: string;
  openingMessage: string;
  foto: string[];
}

export interface Barang {
  id: string;
  namaBarang: string;
  foto: string[];
  tahunPembuatan: number;
  namaPembuat: string;
  description: string;
  priceRange: [number, number];
  size: [number, number];
  tipe: string;
  idEvent: string;
}

export interface BarangEvent {
  [key: string]: {
    date: string;
    description: string;
    openingMessage: string;
    foto: string[];
    barang: Barang[];
  };
}
