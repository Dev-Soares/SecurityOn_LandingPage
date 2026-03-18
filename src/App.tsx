import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { ScamData } from "./components/sections/ScamData";
import { Features } from "./components/sections/Features";
import { ScamImpact } from "./components/sections/ScamImpact";
import { CallToAction } from "./components/sections/CallToAction";
import { Footer } from "./components/sections/Footer";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <ScamData />
      <Features />
      <ScamImpact />
      <CallToAction />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
