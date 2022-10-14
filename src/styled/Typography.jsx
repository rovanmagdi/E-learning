import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "500",
  fontFamily: "Gordita",
  //   color:'#1d2733',
  color: `${theme.palette.secondary.main}`,
  //   fontFamily: ["monospace", "cursive"],
  textTransform: "capitalize",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2em",
  fontWeight: "500",
  fontFamily: "Gordita",
  //   color:'#1d2733',
  color: `${theme.palette.secondary.main}`,
  //   fontFamily: ["monospace", "cursive"],
  textTransform: "capitalize",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));

export const StyledBlackTxt = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.secondary.main}`,
  fontSize: "inherit",
  display: "inline-block",
}));

export const StyledGreenTxt = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.main}`,
  fontSize: "inherit",
  display: "inline-block",
}));

//Footer
export const StyledtitleFooter = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "22px",
  marginBottom: "25px",
}));
export const StyledtitleFooterResponsive = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "22px",
  paddingBottom: "55px",
}));

//Register
export const StyledError = styled(Typography)(({ theme }) => ({
  color: "red",
  textAlign:'left'
}));

//Not Found
export const StyledTypographyNotFound = styled(Typography)(({ theme }) => ({
 color:`${theme.palette.primary.main}`,
 fontSize:"22px",
 marginBottom:"20px"
}));

export const StyledTypographyNotFoundTitle = styled(Typography)(({ theme }) => ({
  fontWeight:"520",
  fontSize:"3rem",
  marginBottom:"20px"
 }));
