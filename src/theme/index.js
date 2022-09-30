import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

let theme  = createTheme({

  palette: {
    primary: {
      main: "#198754",
      light:"#eefbf3",
      dark: colors.orange[800],
    },
    secondary: {
      main: "#198754",
      light:'#585D65',
      dark:"#373B40"

    },
    

  },typography: {
    caption:{

      textSize:"12px",
      fontWeight:"900"
    }
      
    
    }
})
export {theme};
