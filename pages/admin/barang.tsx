import Create, { Fields, InputField } from "components/Create";
import { useState } from "react";

const barangField: InputField[] = [
  {
    type: "array",
    name: "foto",
    min: 1,
    max: 5,
  },
  {
    type: "text",
    name: "tahun_pembuatan",
    label: "Tahun Pembuatan",
    validator: (value) => (isNaN(Number(value)) ? "Masukkan Angka" : undefined),
  },
  {
    type: "text",
    name: "nama_pembuat",
    label: "Nama Pembuat",
  },
  {
    type: "text",
    name: "description",
    multiline: true,
  },
  {
    type: "array",
    name: "price_range",
    label: "Price Range",
    min: 2,
    max: 2,
    labels: ["Minimum Price", "Maximum Price"],
    validator: (values) => {
      let isNotNumber = false;
      values.forEach((value) => {
        if (isNotNumber) return;
        isNotNumber = isNaN(Number(value));
      });
      if (isNotNumber) return "Masukkan Angka";

      return values[1] <= values[0]
        ? "Harga maximum harus lebih dari minimum"
        : undefined;
    },
  },
  {
    type: "text",
    name: "size",
  },
  {
    type: "text",
    name: "tipe",
  },
];

const AdminBarang = () => {
  const handleSubmit = async (fields: Fields) => {
    console.log(fields);
  };

  return (
    <Create fields={barangField} onSubmit={handleSubmit}>
      <h1>Buat Barang</h1>
    </Create>
  );
};

export default AdminBarang;
