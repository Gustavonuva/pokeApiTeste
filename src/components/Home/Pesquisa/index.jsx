import { SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  Select,
  Slider,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import BuscaAvancada from "./BuscaAvancada";
import Ordenacao from "./Ordenacao";

const BarraDePesquisa = () => {
  return (
    <Container maxWidth="lg">
      <Box component="form" sx={{ mt: "50px" }}>
        <Grid
          sx={{
            // flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <TextField
              sx={{ width: 400 }}
              label="Search"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid>
            <Button
              sx={{
                background: "blue",
                color: "white",
              }}
            >
              Buscar
            </Button>
          </Grid>
          <Grid>
            <BuscaAvancada />
          </Grid>
          <Grid>
            <Ordenacao />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BarraDePesquisa;
