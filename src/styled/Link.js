import styled from "@emotion/styled";
import { Link } from "@mui/material";
//navbar
export const StyledLink = styled(Link)(({ theme }) => ({
    color: "#212832",
    paddingLeft: "2.5rem",
    wrapContent: "nowrap",
    lineHeight: "20px",
    textDecoration: "none",
    fontSize:"20px",
    fontFamily: ["monospace", "cursive"],
    "&:hover": {
      cursor: "pointer",
      color: `${theme.palette.primary.main}`,
    },
  }));