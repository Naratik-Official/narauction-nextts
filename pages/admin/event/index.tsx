import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { DataGrid, GridColumns, GridSelectionModel } from "@mui/x-data-grid";
import Link from "next/link";
import axios from "axios";
import AdminLayout from "components/AdminLayout";
import { useRouter } from "next/router";
import moment from "moment";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const columns: GridColumns = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 200,
    renderCell: (params) => (
      <Link href={`/admin/event/${params.row.id}`}>{params.row.id}</Link>
    ),
  },
  {
    field: "date",
    headerName: "date",
    minWidth: 200,
    valueGetter: (params) => moment(params.row.date).format("DD/MM/yyyy"),
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 200,
  },
  {
    field: "openingMessage",
    headerName: "Message",
    minWidth: 200,
  },
];

export default function AdminEventList() {
  const router = useRouter();
  const [selected, setSelected] = useState<GridSelectionModel>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState<string | undefined>();

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const event = await axios.get(
        "https://narauction.et.r.appspot.com/event"
      );
      setRows([...event.data]);
      console.log([...event.data]);

      setIsLoading(false);
    };

    fetch();
  }, []);

  const handleDelete = async () => {
    try {
      await Promise.all(
        selected.map((id) =>
          axios.delete(`https://narauction.et.r.appspot.com/event/${id}`)
        )
      );
      router.reload();
    } catch {
      setAlertMessage("Delete failed");
    }
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertMessage(undefined);
  };

  return (
    <AdminLayout>
      <Snackbar
        open={alertMessage !== undefined}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <Box sx={{ width: "100%", padding: "0 64px" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "16px",
          }}
        >
          <Box>
            <h1>Event</h1>
            <p>Event list</p>
          </Box>
          <Link passHref href="/admin/event/create">
            <Button variant="contained">Create</Button>
          </Link>
        </Box>
        {selected.length > 0 && (
          <Button
            variant="outlined"
            color="error"
            style={{ marginBottom: "16px" }}
            onClick={handleDelete}
          >
            Delete {selected.length} Data
          </Button>
        )}
        <DataGrid
          autoPageSize
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          onSelectionModelChange={(e) => setSelected(e)}
          onRowClick={(e) => console.log(e.id)}
          loading={isLoading}
        />
      </Box>
    </AdminLayout>
  );
}
