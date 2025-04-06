import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { ThemeProvider } from "./context/themeProvider";

export function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
