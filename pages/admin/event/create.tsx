import axios from "axios";
import AdminLayout from "components/AdminLayout";
import Create, { Fields, InputField, SubmitMessage } from "components/Create";

const eventField: InputField[] = [
  {
    type: "datetime",
    name: "date",
    variant: "date",
    validator: (v) => (v ? undefined : "Wajib Diisi"),
  },
  {
    type: "text",
    name: "description",
    validator: (v) => (v ? undefined : "Wajib Diisi"),
  },
  {
    type: "text",
    name: "openingMessage",
    validator: (v) => (v ? undefined : "Wajib Diisi"),
  },
];

const AdminEvent = () => {
  const handleSubmit = async (fields: Fields) => {
    try {
      await axios.post("https://narauction.et.r.appspot.com/event", fields);
      return {
        message: "Event berhasil ditambah",
        type: "success",
      } as SubmitMessage;
    } catch (e: any) {
      return { message: e.message, type: "error" } as SubmitMessage;
    }
  };

  return (
    <AdminLayout>
      <Create fields={eventField} onSubmit={handleSubmit}>
        <h1>Buat Event</h1>
      </Create>
    </AdminLayout>
  );
};

export default AdminEvent;
