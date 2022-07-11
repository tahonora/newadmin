import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes";
import { LighTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LighTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>    
    </ThemeProvider>
  );
}
