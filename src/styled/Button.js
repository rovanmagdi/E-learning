import styled from "@emotion/styled";
import {  Button } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform:"capitalize",
  backgroundColor:` ${theme.palette.secondary.light}`,
  color:`${theme.palette.secondary.main}`,
  border:`1px solid ${theme.palette.primary.main}`,
  margin:"10px 10px 10px 30px",
  borderRadius:"10px",
  padding:"10px 20px 10px 20px",
  "&:hover":{
    backgroundColor:   ` ${theme.palette.primary.main}`,
    color:` ${theme.palette.secondary.light}`
  }

}));
