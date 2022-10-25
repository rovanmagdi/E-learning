// import Header from "../component/header";

import React, {  useEffect, useState } from 'react';
import Navbar from "../component/navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Footer from "../component/footer";
import NavbarTop from "../component/navbarTop";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SignUpPage from "../pages/SignUpPage";
import CoursesPage from "../pages/CoursesPage";
import LoginPage from '../pages/LoginPage'

import {  Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";
import DetailsCourse from "../pages/DetailsCourses";
import { AppContext } from '../context';

function App() {
  const themeResponsive = useTheme();
  const matches = useMediaQuery(themeResponsive.breakpoints.up("976"));
  // const { courseContext, setCourseContext } = useState({});
   const [ currentUser, setCurrentUser ] = useState({});

 
  useEffect(() =>{
    // console.log(currentUser);
    // console.log(courseContext);

  })
  return (
    <AppContext.Provider value={{ currentUser,setCurrentUser }}>
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
        <Route path="/:id" element={<DetailsCourse />} />
        <Route path="/home" element={<SignUpPage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/All Courses" element={<CoursesPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
    </ThemeProvider>
     </AppContext.Provider>
  );
}

export default App;
