import styled from "@emotion/styled";
import { Button } from "@mui/material";
//Navbar
export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  backgroundColor: ` ${theme.palette.secondary.light}`,
  color: `${theme.palette.secondary.main}`,
  border: `1px solid ${theme.palette.primary.main}`,
  margin: "10px 10px 10px 30px",
  borderRadius: "10px",
  padding: "10px 20px 10px 20px",
  "&:hover": {
    backgroundColor: ` ${theme.palette.primary.main}`,
    color: ` ${theme.palette.secondary.light}`,
  },
}));
//NavbarDrawer
export const StyledButtonDrawar = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  border: `1px solid ${theme.palette.primary.main}`,
  height: "40px",
  margin: "10px",

  "&:hover": {
    backgroundColor: ` ${theme.palette.primary.main}`,
    color: ` ${theme.palette.secondary.light}`,
  },
}));
//Footer
export const StyledButtonFooter = styled(Button)(({ theme }) => ({
  backgroundColor: ` ${theme.palette.primary.main}`,
  padding: "16px 20px 16px 20px",
  textTransform: "capitalize",
  fontWeight: "bold",
  marginTop: "20px",
  color: ` ${theme.palette.secondary.light}`,
  borderRadius: "15px",
  "&:hover": {
    backgroundColor: ` ${theme.palette.secondary.main}`,
  },
}));
