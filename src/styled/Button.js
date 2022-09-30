import styled from "@emotion/styled";
import {  Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform:"capitalize",
  backgroundColor:"#ffff",
  color:`${theme.palette.secondary.main}`,
  border:`1px solid ${theme.palette.primary.main}`,
  margin:"10px 10px 10px 30px",
  borderRadius:"10px",
  padding:"10px 20px 10px 20px",

}));
