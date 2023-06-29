import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useRouter } from "next/router";

const HeaderToolbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const router = useRouter();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-menu";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid sx={{ cursor: "pointer" }} onClick={() => router.push("/")}>
            <Image
              src="/pokeapi_256.3fa72200.png"
              width={100}
              height={45}
              alt="pokeApi"
            />
          </Grid>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => router.push("/")}>Pokemons</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sobre</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderToolbar;
