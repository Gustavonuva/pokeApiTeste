/* eslint-disable react/no-unescaped-entities */
import { converterParaLibras, converterParaMetros } from "@/utils/br";
import { Box, Card, CardContent, Typography } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import React from "react";

const DadosPoke = ({ dadosPokemon, descricaoPokemon }) => {
  return (
    <Card sx={{ background: "#D9D9D9" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              Altura
            </Typography>
            <Typography gutterBottom>
              {converterParaMetros(dadosPokemon?.height)}
            </Typography>
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              Peso
            </Typography>
            <Typography gutterBottom>
              {converterParaLibras(dadosPokemon?.weight)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                Gênero
              </Typography>
              <Box>
                <MaleIcon />
                <FemaleIcon />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Categoria
            </Typography>
            {descricaoPokemon?.genera
              ?.filter((item) => item.language.name === "en")
              .map((item, index) => (
                <Typography key={index} gutterBottom>
                  {item.genus}
                </Typography>
              ))}
            <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
              Habilidades
            </Typography>
            {dadosPokemon?.abilities?.map((habilidade, index) => (
              <Typography key={index} gutterBottom>
                {habilidade.ability.name}
              </Typography>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DadosPoke;
