import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledPageTitle = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: "500",
  // fontFamily: "Gordita",
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
  // fontFamily: "Gordita",
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

//regester
export const StyledError = styled(Typography)(({ theme }) => ({
  color: "red",
  textAlign:'left'
}));

export const StyledWhiteTxt = styled(Typography)(({ theme }) => ({
  color: `#FFFFFF`,
  fontSize: "1.2em",
  display: "inline-block",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: ".8rem",
  },
}));

export const StyledWhiteTitle = styled(Typography)(({ theme }) => ({
  color: `#FFFFFF`,
  fontSize: "2.1em",
  display: "inline-block",
  fontWeight: "bold",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));