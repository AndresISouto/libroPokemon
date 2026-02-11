import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { Homepage } from "../pages/Homepage";
import { PokemonPage } from "@/pages/PokemonPage";
import { CharacterPage } from "@/pages/CharacterPage";
import { LorePage } from "@/pages/LorePage";
import { MapPage } from "@/pages/MapPage";
import { LibrosPage } from "@/pages/LibrosPage/LibrosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/pokemons",
        element: <PokemonPage></PokemonPage>,
      },
      {
        path: "/personajes",
        element: <CharacterPage></CharacterPage>,
      },
      {
        path: "/mapas",
        element: <MapPage></MapPage>,
      },
      {
        path: "/lore",
        element: <LorePage></LorePage>,
      },
      {
        path: "/libros",
        element: <LibrosPage></LibrosPage>,
      },
    ],
  },
]);
