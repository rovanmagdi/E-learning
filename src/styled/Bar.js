import styled from "@emotion/styled";
import { Grid, Link } from "@mui/material";
// 705

export const StyledNavbar = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  justifyItems: "center",
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "10px",
  width: "800px",
  margin: "auto",
  // zIndex:5,
}));
export const StyledNavbarResponsive = styled(Grid)(({ theme }) => ({
  width: "500px",
  border: `1px solid ${theme.palette.primary.dark}`,
  margin: "auto",
  borderRadius: "10px",
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: "#212832",
  paddingLeft: "1.5rem",
  wrapContent: "nowrap",
  lineHeight: "20px",
  textDecoration: "none",
  fontFamily: ["monospace", "cursive"],
  "&:hover": {
    cursor: "pointer",
    color: `${theme.palette.primary.main}`,
  },
}));
