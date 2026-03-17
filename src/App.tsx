import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { ScamData } from "./components/sections/ScamData";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <ScamData />
    </ThemeProvider>
  );
}

export default App;
