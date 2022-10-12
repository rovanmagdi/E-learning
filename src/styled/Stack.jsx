import styled from "@emotion/styled";
import {  Stack } from "@mui/material";
//Footer
export const StyledFooter = styled(Stack)(({ theme }) => ({
  height: "340px",
  width: "100%",
  backgroundColor: `${theme.palette.primary.light}`,
  position: "relative",
  bottom: "0",
  paddingTop:"50px"
}));
export const StyledFooterResponsive = styled(Stack)(({ theme }) => ({
  height: "600px",
  width: "100%",
  backgroundColor: `${theme.palette.primary.light}`,
  position: "relative",
  bottom: "0",
  paddingTop:"50px"
}));


export const StyledFooterResponsiveMobile = styled(Stack)(({ theme }) => ({
  height: "1080px",
  width: "100%",
  backgroundColor: `${theme.palette.primary.light}`,
  position: "relative",
  bottom: "0",
  paddingTop:"50px"
}));
