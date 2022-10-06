import styled from "@emotion/styled";
import {  Stack } from "@mui/material";

export const StyledFooter = styled(Stack)(({ theme }) => ({
  height: "280px",
  width: "100%",
  backgroundColor: `${theme.palette.primary.light}`,
  position: "relative",
  bottom: "0",
  paddingTop:"50px"
}));

