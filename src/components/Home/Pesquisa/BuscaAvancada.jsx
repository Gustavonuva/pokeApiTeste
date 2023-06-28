import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import React from "react";

const BuscaAvancada = () => {
  return (
    <>
      <FormControl sx={{ width: 400, marginBottom: 10 }}>
        {/* <InputLabel id="buscaAvancadaInput">Busca Avançada</InputLabel> */}
        <TextField select id="buscaAvancadaSelect" label="Busca Avançada">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Box sx={{ paddingTop: "20px" }}>
              <FormControl>
                <InputLabel id="tipoFraquezaInput">Tipo e Franqueza</InputLabel>
                <Select
                  sx={{ width: 200 }}
                  labelId="tipoFraquezaInput"
                  id="tipoFraquezaSelect"
                  label="Tipo e Franqueza"
                >
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                  <MenuItem>3</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ paddingTop: "20px" }}>
              <FormControl>
                <InputLabel id="habilidadesInput">Habilidades</InputLabel>
                <Select
                  sx={{ width: 200 }}
                  labelId="habilidadesInput"
                  id="habilidadesSelect"
                  label="habilidades"
                ></Select>
              </FormControl>
            </Box>
          </Box>
          <Grid
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box width="90%">
              <InputLabel sx={{ marginTop: "10px" }}>Altura</InputLabel>
              <Slider step={1} min={1} max={1000} valueLabelDisplay="auto" />
            </Box>
            <Box sx={{ width: "90%" }}>
              <InputLabel sx={{ marginTop: "10px" }}>Peso</InputLabel>

              <Slider step={1} min={1} max={1000} valueLabelDisplay="auto" />
            </Box>
          </Grid>
          <TextField
            sx={{ width: "40%", m: "5%" }}
            variant="outlined"
            label="Intervalo Numérico"
            placeholder="-"
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
          />
          <TextField
            sx={{ width: "40%", m: "5%" }}
            variant="outlined"
            placeholder="-"
            type="number"
          />
        </TextField>
      </FormControl>
    </>
  );
};

export default BuscaAvancada;
