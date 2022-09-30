import styled from "@emotion/styled";
import { AppBar, Link } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  right: "auto",
  left: "20%",
  width: "60%",
  marginTop: "20px",
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: "10px",
  position: "absolute",
  boxShadow: "none",
  fontFamily: ["Gorditas", "cursive"].join(","),
}));
export const StyledLink = styled(Link)(({ theme }) => ({
  my: 2,
  color: "#212832",
  margin: "15px",
  textDecoration: "none",
  "&:hover":{
    cursor:"pointer",
    color:`${theme.palette.primary.main}`,
  }
}));
