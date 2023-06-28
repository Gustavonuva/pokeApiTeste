import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "static",
        bottom: 0,
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: "50px",
        textAlign: "center",
      }}
    >
      <Image
        src="/Group1.svg"
        width={170}
        height={50}
        alt="logo Jaime Camara"
      />

      <Typography
        variant="body1"
        color="textSecondary"
        sx={{ marginTop: "24px" }}
      >
        &copy; 2023. Todos os direitos são reservados - Grupo Jaime Camara
      </Typography>
      <Box sx={{ marginTop: "20px" }}>
        <Facebook sx={{ cursor: "pointer", marginRight: "8px" }} />
        <Twitter sx={{ cursor: "pointer", marginRight: "8px" }} />
        <Instagram sx={{ cursor: "pointer" }} />
      </Box>
    </Box>
  );
};

export default Footer;
