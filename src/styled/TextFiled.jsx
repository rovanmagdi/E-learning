import { TextField } from "@mui/material";
import styled from "@emotion/styled";

//Footer
export const StyledFooter = styled(TextField)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.light}`,
}));

//regester page
export const StyledFormInput = styled(TextField)(({ theme }) => ({
   marginTop:'20px',
   marginBottom:'5px',
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: "rgba(48,146,85,0.2)",borderRadius:'10px' },
    },
}));
