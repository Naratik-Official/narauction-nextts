import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import React from "react";

import Barang from "@mui/icons-material/Filter";
import Event from "@mui/icons-material/Book";

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>Narauction Admin</Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box
          sx={{
            borderRight: "1px solid #00000016",
            minWidth: "160px",
          }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <Barang />
              </ListItemIcon>
              Barang
            </ListItem>
            <Link passHref href="/admin/barang">
              <ListItemButton>List Barang</ListItemButton>
            </Link>
            <Link passHref href="/admin/barang/create">
              <ListItemButton>Create Barang</ListItemButton>
            </Link>
            <ListItem></ListItem>
            <ListItem>
              <ListItemIcon>
                <Event />
              </ListItemIcon>
              Event
            </ListItem>
            <Link passHref href="/admin/event">
              <ListItemButton>List Event</ListItemButton>
            </Link>
            <Link passHref href="/admin/event/create">
              <ListItemButton>Create Event</ListItemButton>
            </Link>
          </List>
        </Box>
        {children}
      </Box>
    </div>
  );
};

export default AdminLayout;
