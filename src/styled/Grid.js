import styled from "@emotion/styled";
import { Grid } from "@mui/material";
// 705
//Navbar
export const StyledNavbar = styled(Grid)(({ theme }) => ({
    alignItems: "center",
    marginTop:"20px",
    borderRadius: "10px",
   
  }));
  export const StyledNavbarResponsive = styled(Grid)(({ theme }) => ({
    width: "90%",
  
    margin: "auto",
    borderRadius: "10px",
    fontSize:"20px",
  }));