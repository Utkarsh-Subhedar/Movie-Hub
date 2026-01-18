import { ThemeProvider } from "./components/ThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextStore from "./components/Store/ContextStore";
import { lazy, Suspense } from "react";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import LoadingSpinner from "./components/lazyLoad/LoadingSpinner";
import SearchMovie from "./pages/SearchMovie";
import SignUp from "./pages/login-signup/SignUp";
import RatedMovies from "./pages/Navbar/RatedMovies";
import Login from "./pages/login-signup/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import NavbarLayout from "./pages/NavbarLayout";
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
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<SignUp />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/RatedMovies" element={<RatedMovies />} />
                  <Route path="/Upcoming" element={<Upcoming />} />
                  <Route path="/Wishlist" element={<Wishlist />} />
                  <Route path="/Details/:id" element={<Details />} />
                  <Route path="*" element={<NoPage />} />
                  <Route path="/SearchMovie/:name" element={<SearchMovie />} />
                </Route>
                <Route element={<NavbarLayout />}>
                  <Route path="/Popular" element={<Popular />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </ContextStore>
  );
}

export default App;
