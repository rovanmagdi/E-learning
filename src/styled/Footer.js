import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

export const StyledFooter = styled(Stack)(({ theme }) => ({
  height: "300px",
  width: "100%",
  backgroundColor: `${theme.palette.primary.light}`,
  position: "absolute",
  bottom: "0",
}));
export const StyledFooterImage = styled(Box)(({ theme }) => ({
  width: "100px",
  left: "80px",
  top: "50px",

  position: "absolute",
  animation: "down 0.8s infinite alternate",
  "  @keyframes down": {
    "0%": {
      transform: "translateY(0)",
    },

    " 100% ": {
      transform: "translateY(-10px);",
    },
  },
}));
