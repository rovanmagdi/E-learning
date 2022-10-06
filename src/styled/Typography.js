import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  fontSize:'4rem',
  fontWeight:'500',
  fontFamily: "Gordita",
//   color:'#1d2733',
color:`${theme.palette.secondary.main}`,
//   fontFamily: ["monospace", "cursive"],
textTransform: "capitalize",
[theme.breakpoints.down('md')]: {
  fontSize:'2rem',
},[theme.breakpoints.down('sm')]: {
  fontSize:'1rem',
},

}));

export const StyledBlackTxt = styled(Typography)(({ theme }) => ({
   
  color:`${theme.palette.secondary.main}`,
  fontSize:'inherit',
  display: "inline-block",
   
  }));

  export const StyledGreenTxt = styled(Typography)(({ theme }) => ({
  
  color:`${theme.palette.primary.main}`,
  fontSize:'inherit',
  display: "inline-block",

  }));

  //Footer
  export const StyledtitleFooter = styled(Typography)(({ theme }) => ({
  
    fontWeight: "bold",fontSize: "22px",
    marginBottom: "25px" 
    }));