import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextStore from "./components/Store/ContextStore";
import { lazy, Suspense } from "react";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import LoadingSpinner from "./components/lazyLoad/LoadingSpinner";
import SearchMovie from "./pages/SearchMovie";
const Home = lazy(() => import("@/pages/Home"));
const Details = lazy(() => import("@/pages/Details"));
const Popular = lazy(() => import("@/pages/Navbar/Popular"));
const Upcoming = lazy(() => import("@/pages/Navbar/Upcoming"));
const Wishlist = lazy(() => import("@/pages/Navbar/Wishlist"));

function App() {
  return (
    <ContextStore>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/Popular" element={<Popular />} />
                <Route path="/Upcoming" element={<Upcoming />} />
                <Route path="/Wishlist" element={<Wishlist />} />
                <Route path="/Details/:id" element={<Details />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/SearchMovie/:name" element={<SearchMovie />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </ContextStore>
  );
}

export default App;
