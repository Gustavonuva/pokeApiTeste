import DadosPoke from "@/components/DadosPoke";
import Footer from "@/components/Footer";
import HeaderToolbar from "@/components/Toolbar";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Skeletons } from "@/components/Skeletons";
import EstatisticasPokemons from "@/components/DadosPoke/EstatisticaPokemon";
import TiposEFraquezas from "@/components/DadosPoke/TipoeFraquezas";

const DadosPokemon = () => {
  const router = useRouter();
  const { query } = router;
  const { name, id } = query;

  const [descricaoPokemon, setDescricaoPokemon] = useState(null);
  const [dadosPokemon, setDadosPokemon] = useState([]);

  console.log(descricaoPokemon);
  useEffect(() => {
    if (id) {
      getTextPokemon();
      getDescricaoPokemons();
    }
  }, [id]);

  const getTextPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );

      const speciesData = response.data;
      const spritesResponse = await axios.get(
        speciesData.varieties[0].pokemon.url
      );
      const spriteData = spritesResponse.data;

      setDescricaoPokemon({ ...speciesData, sprites: spriteData.sprites });
    } catch (error) {
      console.error("Error fetching Pokemon species:", error);
    }
  };

  const getDescricaoPokemons = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setDadosPokemon(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTextEnglish = (entries) => {
    const englishEntry = entries?.find((entry) => entry.language.name === "en");
    if (englishEntry) {
      return englishEntry.flavor_text.replace(/\f/g, "\n");
    }
    return "";
  };

  console.log(dadosPokemon);
  return (
    <>
      <HeaderToolbar />

      {descricaoPokemon === null ? (
        <Skeletons />
      ) : (
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "5%",
              mb: "5%",
            }}
          >
            <Typography variant="h3">{name}</Typography>
            <Typography
              sx={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "#1976D2",
                ":hover": { color: "red" },
              }}
              variant="subtitle1"
            >
              Próximo {">"}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ boxShadow: "2px 2px 10px 1px rgba(0, 0, 0, 0.2)" }}>
              {descricaoPokemon && (
                <Image
                  alt="foto pokemon"
                  src={descricaoPokemon.sprites.front_default}
                  width={368}
                  height={330}
                />
              )}
            </Box>
            <Box sx={{ ml: "5%", mr: "10%", width: "40%" }}>
              <Box>
                <Typography variant="body1">
                  {getTextEnglish(descricaoPokemon?.flavor_text_entries)}
                </Typography>
              </Box>
              <Box sx={{ mt: "5%" }}>
                <DadosPoke
                  dadosPokemon={dadosPokemon}
                  descricaoPokemon={descricaoPokemon}
                />
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row">
            <EstatisticasPokemons dadosPokemon={dadosPokemon} />

            <TiposEFraquezas dadosPokemon={dadosPokemon} />
          </Box>
        </Container>
      )}

      <Footer />
    </>
  );
};

export default DadosPokemon;
