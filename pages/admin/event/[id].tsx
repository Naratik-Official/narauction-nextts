import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import AdminLayout from "components/AdminLayout";
import Create, { Fields, InputField, SubmitMessage } from "components/Create";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// const eventField: InputField[] = [
//   {
//     type: "datetime",
//     name: "date",
//     variant: "date",
//     validator: (v) => (v ? undefined : "Wajib Diisi"),
//   },
//   {
//     type: "text",
//     name: "description",
//     validator: (v) => (v ? undefined : "Wajib Diisi"),
//   },
//   {
//     type: "text",
//     name: "openingMessage",
//     validator: (v) => (v ? undefined : "Wajib Diisi"),
//   },
// ];

const AdminEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [eventField, setBarangField] = useState<InputField[]>([]);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      console.log(id);
      try {
        const { data: event } = await axios.get(
          `https://narauction.et.r.appspot.com/event/${id}`
        );
        setBarangField([
          {
            type: "datetime",
            name: "date",
            variant: "date",
            initialValue: moment(event.date),
            validator: (v) => (v ? undefined : "Wajib Diisi"),
          },
          {
            type: "text",
            name: "description",
            initialValue: event.description,
            validator: (v) => (v ? undefined : "Wajib Diisi"),
          },
          {
            type: "text",
            name: "openingMessage",
            initialValue: event.openingMessage,
            validator: (v) => (v ? undefined : "Wajib Diisi"),
          },
        ]);
        setIsLoading(false);
      } catch {
        router.push("/admin/event");
      }
    };

    if (id) fetch();
  }, [id]);

  const handleSubmit = async (fields: Fields) => {
    try {
      await axios.put(`https://narauction.et.r.appspot.com/event/${id}`, fields);
      return {
        message: "Event berhasil diupdate",
        type: "success",
      } as SubmitMessage;
    } catch (e: any) {
      return { message: e.message, type: "error" } as SubmitMessage;
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    await axios.delete(`https://narauction.et.r.appspot.com/event/${id}`);
    router.push("/admin/event");
  };

  return (
    <AdminLayout>
      {isLoading ? (
        <p>Please Wait</p>
      ) : (
        <Create
          fields={eventField}
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
            <h1>Edit Event</h1>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Create>
      )}
    </AdminLayout>
  );
};

export default AdminEvent;
