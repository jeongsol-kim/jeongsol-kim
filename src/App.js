import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/GlobalStyle";
import { lightTheme, darkTheme } from "./theme/theme";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Publication from "./components/publication";
import Sidework from "./components/sidework";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <BrowserRouter>
    <ThemeProvider theme={isDarkMode ? darkTheme: lightTheme}>
    <GlobalStyle />
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
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
