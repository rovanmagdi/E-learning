import { Box } from "@mui/system";
// import Header from "../component/header";
import Navbar from "../component/navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Footer from "../component/footer";

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <Header /> */}
        <Footer/>
      </ThemeProvider>
    </Box>
  );
}

export default App;
