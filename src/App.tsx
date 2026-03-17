import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
