import { Search, SearchOutlined } from "@mui/icons-material";
import { Box, Button, Container, Grid, InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import BuscaAvancada from "./BuscaAvancada";
import Ordenacao from "../Ordenacao/Ordenacao";
import CardPrincipal from "../Card";
import axios from "axios";
import { Skeletons } from "@/components/Skeletons";

const BarraDePesquisa = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filterPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filterPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filterPokemons);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: "5%" }}>
      <Box component="form" sx={{ mt: "50px" }}>
        <Grid display="flex" justifyContent="space-between">
          <Grid>
            <TextField
              onChange={(e) => pokemonFilter(e.target.value)}
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
      <Grid container>
        {pokemons.length === 0 ? (
          <Skeletons />
        ) : (
          pokemons.map((pokemon, key) => (
            <Grid
              item
              xs={8}
              sm={4}
              md={4}
              lg={4}
              sx={{ flexWrap: "wrap" }}
              key={key}
            >
              {/* <Box onClick={() => pokemonPickHandler(pokemon.data)}> */}
              <CardPrincipal
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
                id={pokemon.data.id}
              />
              {/* </Box> */}
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default BarraDePesquisa;
