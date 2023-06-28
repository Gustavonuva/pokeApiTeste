import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const Ordenacao = () => {
  return (
    <Grid container>
      <Box>
        <FormControl>
          <InputLabel id="ordernarPor">Ordenar Por:</InputLabel>
          <Select
            sx={{ width: 200 }}
            labelId="ordernarPor"
            label="Ordenar Por:"
          />
        </FormControl>
      </Box>
    </Grid>
  );
};

export default Ordenacao;
