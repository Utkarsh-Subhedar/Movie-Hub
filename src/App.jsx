import { ThemeProvider } from "./components/ThemeProvider";
import {
  DetailsContext,
  DetailsProvider,
} from "./components/Store/DetailsContext";
import Layout from "./pages/Layout";
import Details from "./pages/Details";
import Popular from "./pages/Navbar/Popular";
import Upcoming from "./pages/Navbar/Upcoming";
import Wishlist from "./pages/Navbar/Wishlist";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <DetailsProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/Popular" element={<Popular />} />
              <Route path="/Upcoming" element={<Upcoming />} />
              <Route path="/Wishlist" element={<Wishlist />} />
              <Route path="/Details/:id" element={<Details />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </DetailsProvider>
  );
}

export default App;
