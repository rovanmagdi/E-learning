
import Header from "../component/header";
import Navbar from "../component/navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Footer from "../component/footer";
import NavbarTop from "../component/navbarTop";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SignUpPage from "../pages/SignUpPage";

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
      <SignUpPage />
      {/* <Header /> */}
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p> <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p> <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p> <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <p>,jbhb</p>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
