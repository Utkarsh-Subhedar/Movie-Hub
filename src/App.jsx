import Navbar from "./pages/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import Hero from "./pages/Hero";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <Hero />
      <div>
        testinggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
      </div>
    </ThemeProvider>
  );
}

export default App;
