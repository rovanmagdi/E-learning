import Header from "../component/header";
import Navbar from "../component/navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Footer from "../component/footer";
import NavbarTop from "../component/navbarTop";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SignUpPage from "../pages/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const themeResponsive = useTheme();
  const matches = useMediaQuery(themeResponsive.breakpoints.up("976"));
  return (
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
        <Route path="/" element={<SignUpPage />} />

        <Route path="/signup" element={<SignUpPage />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
