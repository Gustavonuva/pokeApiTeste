import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";

const TiposEFraquezas = ({ dadosPokemon }) => {
  const tiposHandler = () => {
    return dadosPokemon?.types?.map((type) => (
      <Chip
        key={type.type.name}
        sx={{
          color: "#fff",
          background: "#616161E5",
          fontSize: 17,
          marginRight: 1,
        }}
        label={type.type.name}
      />
    ));
  };

  return (
    <Box m={"10%"}>
      <Box>
        <Box>
          <Typography variant="subtitle1">Tipo</Typography>
        </Box>
        <Box>
          <Stack
            flexDirection={"row"}
            sx={{
              "& .MuiChip-root": {
                borderRadius: "4px !important",
              },
            }}
          >
            {tiposHandler()}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TiposEFraquezas;
