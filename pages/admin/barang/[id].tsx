import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import AdminLayout from "components/AdminLayout";
import Create, { Fields, InputField, SubmitMessage } from "components/Create";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AdminBarangEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [barangField, setBarangField] = useState<InputField[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      console.log(id);

      const { data: events } = await axios.get(
        "https://narauction.et.r.appspot.com/event"
      );
      const eventIds = events.map((d) => ({
        name: `${d.id} - ${d.description}`,
        value: d.id,
      }));

      try {
        const { data: barang } = await axios.get(
          `https://narauction.et.r.appspot.com/barang/${id}`
        );
        setBarangField([
          {
            type: "text",
            name: "namaBarang",
            initialValue: barang.namaBarang,
            validator: (v) =>
              v.length === 0 || v === "" ? "Wajib Diisi" : undefined,
          },
          {
            type: "array",
            name: "foto",
            label: "URL Foto",
            initialValue: barang.foto,
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
            initialValue: barang.tahunPembuatan,
            validator: (v) =>
              v
                ? isNaN(Number(v))
                  ? "Masukkan Angka"
                  : undefined
                : "Wajib Diisi",
          },
          {
            type: "text",
            name: "namaPembuat",
            label: "Nama Pembuat",
            initialValue: barang.namaPembuat,
          },
          {
            type: "text",
            name: "description",
            multiline: true,
            initialValue: barang.description,
            validator: (v) =>
              v.length === 0 || v === "" ? "Wajib Diisi" : undefined,
          },
          {
            type: "array",
            name: "priceRange",
            label: "Price Range",
            initialValue: barang.priceRange,
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

              return v[1] <= v[0]
                ? "Harga maximum harus lebih dari minimum"
                : undefined;
            },
          },
          {
            type: "array",
            name: "size",
            label: "Size",
            initialValue: barang.size,
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
            initialValue: barang.tipe,
            validator: (v) => (v ? undefined : "Wajib Diisi"),
          },
          {
            type: "select",
            name: "idEvent",
            label: "ID Event",
            items: eventIds,
            initialValue: barang.idEvent,
            validator: (v) =>
              v.length === 0 || v === "" ? "Wajib Dipilih" : undefined,
          },
        ]);
        setIsLoading(false);
      } catch {
        router.push("/admin/barang");
      }
    };

    if (id) fetch();
  }, [id]);

  const handleSubmit = async (fields: Fields) => {
    if (fields.namaPembuat === "") delete fields.namaPembuat;

    try {
      await axios.put(`https://narauction.et.r.appspot.com/barang/${id}`, {
        ...fields,
        id,
        tahunPembuatan: Number(fields.tahunPembuatan),
        priceRange: (fields.priceRange! as string[]).map((p) => Number(p)),
        size: (fields.size! as string[]).map((p) => Number(p)),
      });
      return {
        message: "Barang berhasil diupdate",
        type: "success",
      } as SubmitMessage;
    } catch (e: any) {
      return { message: e.message, type: "error" } as SubmitMessage;
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    await axios.delete(`https://narauction.et.r.appspot.com/barang/${id}`);
    router.push("/admin/barang");
  };

  return (
    <AdminLayout>
      {isLoading ? (
        <p>Please Wait</p>
      ) : (
        <Create
          fields={barangField}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>Edit Barang</h1>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Create>
      )}
    </AdminLayout>
  );
};

export default AdminBarangEdit;
