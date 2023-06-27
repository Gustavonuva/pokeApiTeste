import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Toolbar from "@/components/Toolbar";
import BarraDePesquisa from "@/components/Home/Pesquisa";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeDex</title>
        <meta name="description" content="Create Pokedex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Toolbar />
        <BarraDePesquisa />
        <Footer />
      </main>
    </>
  );
}
