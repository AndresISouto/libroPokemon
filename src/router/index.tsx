import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { Homepage } from "../pages/Homepage";
import { GlosaryPage } from "@/pages/GlosaryPage";
import { PokemonPage } from "@/pages/PokemonPage";

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
        path: "/glosario/personajes",
        element: <GlosaryPage></GlosaryPage>,
      },
      {
        path: "/glosario/mapas",
        element: <GlosaryPage></GlosaryPage>,
      },
      {
        path: "/glosario/lore",
        element: <GlosaryPage></GlosaryPage>,
      },
    ],
  },
]);
