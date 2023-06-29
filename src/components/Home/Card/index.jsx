import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const CardPrincipal = ({ name, image, types, id }) => {
  const [descricaoPokemon, setDescricaoPokemon] = useState([]);

  const router = useRouter();

  useEffect(() => {
    getDescricaoPokemon();
  }, []);

  const getDescricaoPokemon = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );
      setDescricaoPokemon(response.data);
    } catch (error) {
      console.error("Error fetching Pokemon species:", error);
    }
  };

  const getTextEnglish = (entries) => {
    const englishEntry = entries?.find((entry) => entry.language.name === "en");
    if (englishEntry) {
      return englishEntry.flavor_text.replace(/\f/g, "\n");
    }
    return "";
  };

  const typeHandler = () => {
    return types.map((type) => (
      <Chip
        key={type.type.name}
        sx={{ color: "#3F51B5", background: "#E8EAF6", fontSize: 17 }}
        label={type.type.name}
      />
    ));
  };

  const handleCardClick = () => {
    router.push({
      pathname: "/dadospokemon",
      query: { name, id },
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 368,
        marginBottom: 5,
        boxShadow: "2px 2px 30px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Link href={`/dadospokemon?name=${name}&id=${id}`} passHref>
        <CardActionArea component="a" onClick={handleCardClick}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "70%" }}
            image={image}
            title={name}
          />
          <CardContent sx={{ background: "#3a343450" }}>
            <Typography
              gutterBottom
              color="white"
              variant="subtitle1"
              component="div"
              fontSize={20}
            >
              {name}
            </Typography>
            <Typography variant="caption" color="black">
              {getTextEnglish(descricaoPokemon.flavor_text_entries)}
            </Typography>

            <Stack direction="row" sx={{ marginTop: "20px" }} spacing={2}>
              {typeHandler()}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CardPrincipal;
