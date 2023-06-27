import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { pokeapi } from "@/utils/br";

const HeaderToolbar = () => {
  const [menuIn, setMenuIn] = useState(null);
  const open = Boolean(menuIn);
  const handleOpen = (event) => {
    setMenuIn(event.currentTarget);
  };

  const handleClose = () => {
    setMenuIn(null);
  };

  return (
    <Box>
      <AppBar position="static" color="default">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid sx={{ cursor: "pointer" }}>
            <Image
              src="/pokeapi_256.3fa72200.png"
              width={100}
              height={45}
              alt="pokeApi"
            />
          </Grid>
          <Grid>
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleOpen}
            >
              <MenuIcon />
            </Button>
            <Menu
              id="basic-menu"
              menuIn={menuIn}
              open={open}
              onClose={handleClose}
              sx={{ alignSelf: "end" }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>Login</MenuItem>
              <MenuItem onClick={handleClose}>PokeDex</MenuItem>
              <MenuItem onClick={handleClose}>Sobre</MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderToolbar;
