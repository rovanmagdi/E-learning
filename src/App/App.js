import { Box } from "@mui/system";
// import Header from "../component/header";
import Navbar from "../component/navbar";
import { theme } from "../theme/index";
import { ThemeProvider } from "@mui/system";
import Footer from "../component/footer";
import SignUpPage from '../pages/SignUpPage'

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Navbar />
        {/* <Header /> */}
        <SignUpPage/>
        {/* <Footer/> */}
      </ThemeProvider>
    </Box>
  );
}

export default App;
