import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { Homepage } from "../pages/Homepage";
import { GlosaryPage } from "@/pages/GlosaryPage";

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
        path: "/glosario/pokemons",
        element: <GlosaryPage></GlosaryPage>,
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
