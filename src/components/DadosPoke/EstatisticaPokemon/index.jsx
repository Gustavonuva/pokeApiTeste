import { Box, LinearProgress, Typography } from "@mui/material";

const EstatisticasPokemons = ({ dadosPokemon }) => {
  console.log(dadosPokemon);
  const data = [
    { label: "HP", value: dadosPokemon?.stats?.[0]?.base_stat },
    { label: "Ataque", value: dadosPokemon?.stats?.[1]?.base_stat },
    { label: "Defesa", value: dadosPokemon?.stats?.[2]?.base_stat },
    { label: "Ataque especial", value: dadosPokemon?.stats?.[3]?.base_stat },
    { label: "Defesa especial", value: dadosPokemon?.stats?.[4]?.base_stat },
    { label: "Velocidade", value: dadosPokemon?.stats?.[5]?.base_stat },
  ];

  const MAX_VALUE = 130;

  return (
    <Box width="40%" mt={10} mb={5}>
      <Typography mb={2} variant="subtitle1">
        Estatisticas
      </Typography>
      {data.map((item) => (
        <Box
          key={item.label}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ borderBottom: "1px solid #AEAEAE", mb: "10px" }}
        >
          <Box>
            <Typography
              sx={{
                width: "120px",
                textAlign: "right",
              }}
              variant="body1"
            >
              {item.label}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={(item.value / MAX_VALUE) * 100}
            sx={{
              height: 10,
              flex: 1,
              marginLeft: 5,
              padding: "15px",
              mb: "5px",
              backgroundColor: "#fdfbfb",

              "& .MuiLinearProgress-bar": {
                backgroundColor: "#AEAEAE",
              },
            }}
          />
          <Typography>{item.value}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default EstatisticasPokemons;
