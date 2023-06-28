import Head from "next/head";
import Toolbar from "@/components/Toolbar";
import BarraDePesquisa from "@/components/Home/Pesquisa";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="Create Pokedex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toolbar />
      <main>
        <BarraDePesquisa />
      </main>
      <Box>
        <Footer />
      </Box>
    </>
  );
}
