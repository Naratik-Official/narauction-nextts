import axios from "axios";
import AdminLayout from "components/AdminLayout";
import Create, { Fields, InputField, SubmitMessage } from "components/Create";
import { ChoiceItems } from "components/inputs/RadioInput";
import { useEffect, useState } from "react";
import { Event } from "utils/types";
import withAdminAuth from "utils/withAdminAuth";
import { adminRequestConfig } from "..";

const barangField: InputField[] = [
  {
    type: "text",
    name: "namaBarang",
    validator: (v) => (v.length === 0 || v === "" ? "Wajib Diisi" : undefined),
  },
  {
    type: "text",
    name: "lot",
    validator: (v) => (v.length === 0 || v === "" ? "Wajib Diisi" : undefined),
  },
  {
    type: "array",
    name: "foto",
    label: "URL Foto",
    min: 1,
    max: 5,
    validator: (v) => {
      let isError = false;
      v.forEach((value) => {
        if (isError) return;

        isError = value.length === 0 || value === "";
      });
      return isError ? "Ada yang kosong" : undefined;
    },
  },
  {
    type: "text",
    name: "tahunPembuatan",
    label: "Tahun Pembuatan",
    validator: (v) =>
      v ? (isNaN(Number(v)) ? "Masukkan Angka" : undefined) : "Wajib Diisi",
  },
  {
    type: "text",
    name: "namaPembuat",
    label: "Nama Pembuat",
  },
  {
    type: "text",
    name: "descId",
    label: "Deskripsi (Indonesia)",
    multiline: true,
    validator: (v) => (v.length === 0 || v === "" ? "Wajib Diisi" : undefined),
  },
  {
    type: "text",
    name: "descEn",
    label: "Deskripsi (English)",
    multiline: true,
    validator: (v) => (v.length === 0 || v === "" ? "Wajib Diisi" : undefined),
  },
  {
    type: "array",
    name: "priceRange",
    label: "Price Range",
    min: 2,
    max: 2,
    hideButtons: true,
    direction: "row",
    labels: ["Minimum Price (IDR)", "Maximum Price (IDR)"],
    validator: (v) => {
      if (!v) return "Wajib Diisi";

      let isNotNumber = false;
      v.forEach((value) => {
        if (isNotNumber) return;
        isNotNumber = isNaN(Number(value));
      });
      if (isNotNumber) return "Masukkan Angka";

      return Number(v[1]) <= Number(v[0])
        ? "Harga maximum harus lebih dari minimum"
        : undefined;
    },
  },
  {
    type: "array",
    name: "size",
    label: "Size",
    min: 2,
    max: 2,
    hideButtons: true,
    direction: "row",
    labels: ["Panjang (cm)", "Lebar (cm)"],
    validator: (v) => {
      if (!v) return "Wajib Diisi";

      let isNotNumber = false;
      v.forEach((value) => {
        if (isNotNumber) return;
        isNotNumber = isNaN(Number(value));
      });
      return isNotNumber ? "Masukkan Angka" : undefined;
    },
  },
  {
    type: "text",
    name: "tipe",
    validator: (v) => (v ? undefined : "Wajib Diisi"),
  },
];

const AdminBarangCreate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventIds, setEventIds] = useState<ChoiceItems[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const { data } = await axios.get<Event[]>(
        "https://narauction.et.r.appspot.com/event"
      );
      setEventIds([
        ...data.map((d) => ({
          name: `${d.id} - ${d.name}`,
          value: d.id,
        })),
      ]);
      setIsLoading(false);
    };

    fetch();
  }, []);

  const handleSubmit = async (fields: Fields) => {
    if (fields.namaPembuat === "") delete fields.namaPembuat;

    try {
      await axios.post(
        "https://narauction.et.r.appspot.com/barang",
        {
          ...fields,
          tahunPembuatan: Number(fields.tahunPembuatan),
          priceRange: (fields.priceRange! as string[]).map((p) => Number(p)),
          size: (fields.size! as string[]).map((p) => Number(p)),
        },
        adminRequestConfig()
      );
      return {
        message: "Barang berhasil ditambah",
        type: "success",
      } as SubmitMessage;
    } catch (e: any) {
      return { message: e.message, type: "error" } as SubmitMessage;
    }
  };

  return (
    <AdminLayout>
      {isLoading ? (
        <p>Please Wait</p>
      ) : (
        <Create
          fields={[
            ...barangField,
            {
              type: "select",
              name: "idEvent",
              label: "ID Event",
              items: eventIds,
              validator: (v) =>
                v.length === 0 || v === "" ? "Wajib Dipilih" : undefined,
            },
          ]}
          onSubmit={handleSubmit}
        >
          <h1>Create Barang</h1>
        </Create>
      )}
    </AdminLayout>
  );
};

export default withAdminAuth(AdminBarangCreate);
