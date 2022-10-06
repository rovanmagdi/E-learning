import styled from "@emotion/styled";
import { Grid, Link } from "@mui/material";
// 705
export const StyledNavbar = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  marginTop:"20px",
  borderRadius: "10px",
 
}));
export const StyledNavbarResponsive = styled(Grid)(({ theme }) => ({
  width: "500px",
  border: `1px solid ${theme.palette.primary.dark}`,
  margin: "auto",
  borderRadius: "10px",
  fontSize:"20px",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: "#212832",
  paddingLeft: "2.5rem",
  wrapContent: "nowrap",
  lineHeight: "20px",
  textDecoration: "none",
  fontSize:"20px",
  fontFamily: ["monospace", "cursive"],
  "&:hover": {
    cursor: "pointer",
    color: `${theme.palette.primary.main}`,
  },
}));
