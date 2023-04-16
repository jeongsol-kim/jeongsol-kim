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
  // Be careful! localStorage.getItem return string, not boolean
  const isLocalDark = JSON.parse(window.localStorage.getItem('darkmode'))
  const [isDarkMode, setIsDarkMode] = useState(isLocalDark);

  const toggleDarkMode = () => {
    // Perhaps, this should be faster than setIsDarkMode. Later, check async
    window.localStorage.setItem('darkmode', !isDarkMode)
    setIsDarkMode((prev) => !prev)
    document.documentElement.style.setProperty(
      'background-color',
      !isDarkMode ? '#1E1E22' :'#F8F7F4'
    );

  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
