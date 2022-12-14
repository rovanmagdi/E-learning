import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const StyledCardCourse = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    position: "relative",
    border: "1px solid transparent",
    borderRadius:"18px",
    transition: 'border 0.7s',

    "&:hover": {
      cursor: "pointer",
      border: `1px solid ${theme.palette.primary.main}`,
     
    },
}));
