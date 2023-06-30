import { Search, SearchOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  Pagination,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import BuscaAvancada from "./BuscaAvancada";
import Ordenacao from "../Ordenacao/Ordenacao";
import CardPrincipal from "../Card";
import axios from "axios";
import { Skeletons } from "@/components/Skeletons";

const BarraDePesquisa = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(21);

  const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => {
        const { results } = res.data;
        const pokemonPromises = results.map((pokemon) =>
          axios.get(pokemon.url)
        );
        return axios.all(pokemonPromises);
      })
      .then((res) => {
        setPokemons(res);
        setFilteredPokemons(res);
      });
  };

  const pokemonFilter = (name) => {
    if (name === "") {
      setFilteredPokemons(pokemons);
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.data.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredPokemons(filteredPokemons);
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const paginatedPokemons = paginate(filteredPokemons, perPage, currentPage);
  const totalPages = Math.ceil(filteredPokemons.length / perPage);

  const handleSortChange = (orderBy) => {
    let sortedPokemons = [];
    if (orderBy === "az") {
      sortedPokemons = [...filteredPokemons].sort((a, b) => {
        if (a.data.name && b.data.name) {
          return a.data.name.localeCompare(b.data.name);
        }
        return 0;
      });
    } else if (orderBy === "za") {
      sortedPokemons = [...filteredPokemons].sort((a, b) => {
        if (a.data.name && b.data.name) {
          return b.data.name.localeCompare(a.data.name);
        }
        return 0;
      });
    }
    setFilteredPokemons(sortedPokemons);
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
            <Ordenacao onSortChange={handleSortChange} />
          </Grid>
        </Grid>
      </Box>
      <Grid container>
        {filteredPokemons.length === 0 ? (
          <Skeletons />
        ) : (
          paginatedPokemons.map((pokemon, key) => (
            <Grid
              item
              xs={8}
              sm={4}
              md={4}
              lg={4}
              sx={{ flexWrap: "wrap" }}
              key={key}
            >
              <CardPrincipal
                name={pokemon.data.name}
                image={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
                id={pokemon.data.id}
              />
            </Grid>
          ))
        )}
      </Grid>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Container>
  );
};

export default BarraDePesquisa;
