import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import { lightTheme, darkTheme } from "./theme/theme";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Publication from "./components/publication";
import Sidework from "./components/sidework";

function App() {
  const isDarkmode = true;

  return (
    <BrowserRouter>
    <ThemeProvider theme={isDarkmode ? darkTheme: lightTheme}>
    <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/publication" element={<Publication />}/>
        <Route path="/sidework" element={<Sidework />}/>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
