import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const Ordenacao = ({ onSortChange }) => {
  const [orderBy, setOrderBy] = useState("");

  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    setOrderBy(selectedOrder);
    onSortChange(selectedOrder);
  };

  return (
    <Grid container>
      <Box>
        <FormControl>
          <InputLabel id="ordenarPorLabel">Ordenar Por:</InputLabel>
          <Select
            sx={{ width: 200 }}
            labelId="ordenarPorLabel"
            label="Ordenar Por:"
            value={orderBy}
            onChange={handleOrderChange}
          >
            <MenuItem value="az">A-Z</MenuItem>
            <MenuItem value="za">Z-A</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default Ordenacao;
