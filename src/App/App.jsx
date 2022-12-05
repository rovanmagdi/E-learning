// import Header from "../component/header";

import React, {  useState } from "react";
import Navbar from "../component/navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Footer from "../component/footer";
import NavbarTop from "../component/navbarTop";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SignUpPage from "../pages/SignUpPage";
import CoursesPage from "../pages/CoursesPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";
import DetailsCourse from "../pages/DetailsCourses";
import { AppContext } from "../context";
import { CartProvider } from 'react-use-cart';

import CartPage from "../pages/CartPage";

function App() {
  const themeResponsive = useTheme();
  const matches = useMediaQuery(themeResponsive.breakpoints.up("976"));
  // const { courseContext, setCourseContext } = useState({});
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CartProvider>

    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      <ThemeProvider theme={theme}>
        {matches ? (
          <>
            <NavbarTop />
            <Navbar />
          </>
        ) : (
          <>
            {" "}
            <Navbar />
          </>
        )}

        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/:id" element={<DetailsCourse />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/All Courses" element={<CoursesPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </ThemeProvider>
    </AppContext.Provider>
    </CartProvider>

  );
}

export default App;
