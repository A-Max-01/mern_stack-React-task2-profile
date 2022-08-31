import MainNavigation from "./shared/components/Navigation/MainNavigation";
import { Container, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Projects from "./projects/container/projects";
import Skills from "./Skills/container/Skills";
import Contact from "./Contact/components/Contact";
import ScrollTop from "./SecrollTop/ScrollTop";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const ColorSchemeHandler = (colorSchemeh) => {
    setColorScheme(colorSchemeh);
  };
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={ColorSchemeHandler}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            dark: ["#22293E"],
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Container>
          <MainNavigation colorHandeler={ColorSchemeHandler} />
          <Home/>
          <Projects/>
          <Skills/>
          <Contact/>
        </Container>
        <ScrollTop/>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
