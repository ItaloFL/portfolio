import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layout/defaultLayout";
import { NotFound } from "./screens/404";
import { Home } from "./screens/home";
import { About } from "./screens/about";
import { Projects } from "./screens/projects";
import { Contact } from "./screens/contact";
import { Sucess } from "./screens/sucess";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/sucess",
    element: <Sucess />,
  },
]);
