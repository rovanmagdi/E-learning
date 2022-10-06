import { Box } from "@mui/system";
import Header from "../component/header";
import Navbar from "../component/navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Footer from "../component/footer";
<<<<<<< HEAD
import NavbarTop from "../component/navbar-top";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
=======
import SignUpPage from '../pages/SignUpPage'
>>>>>>> 21f7c34fb761261d1a1905dc801b53b7c70a97d2

function App() {
  const themeResponsive = useTheme();
  const matches = useMediaQuery(themeResponsive.breakpoints.up("976"));
  return (
<<<<<<< HEAD
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

      <Header />
     <p>,jbhb</p> 
     <p>,jbhb</p> 
     <p>,jbhb</p> 
     <p>,jbhb</p> 
     <p>,jbhb</p> 
     <p>,jbhb</p> 
     <p>,jbhb</p> 


     
      <Footer />
    </ThemeProvider>
=======
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <Header /> */}
        <SignUpPage/>
        {/* <Footer/> */}
      </ThemeProvider>
    </Box>
>>>>>>> 21f7c34fb761261d1a1905dc801b53b7c70a97d2
  );
}

export default App;
