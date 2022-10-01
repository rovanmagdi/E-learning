import * as React from "react";
import Box from "@mui/material/Box";

import {
  StyledLink,
  StyledNavbar,
  StyledNavbarResponsive,
} from "../styled/Bar";
import { StyledButton } from "../styled/Button";
import { Grid, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TemporaryDrawer from "../component/drawar";

const pages = ["Home", "All Course", "Pages", "Blog", "Content"];

const Navbar = () => {
  // const [spacing, setSpacing] = React.useState(2);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("760"));

  return (
    <Grid
      container
      sx={{ position: "absolute", zIndex: "1", marginTop: "20px" }}
    >
      {matches ? (
        <Grid item xs={12}>
          <StyledNavbar container >
            <Link
              component="img"
              src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
              sx={{ width: "160px", height: "40px", marginTop: "13px" }}
            />

            <Box component="div">
              {pages.map((page) => (
                <StyledLink key={page}>{page}</StyledLink>
              ))}
              <StyledLink sx={{ marginLeft: "30px" }}>Sign In</StyledLink>
              <StyledButton>Sign up</StyledButton>
            </Box>
          </StyledNavbar>
        </Grid>
      ) : (
        <StyledNavbarResponsive>
          <Grid container spacing={2} sx={{ margin: "5px 0px 5px 0px " }}>
            <Grid item xs={8}>
              <Link
                component="img"
                src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                sx={{ width: "160px", height: "40px" }}
              />
            </Grid>
            <Grid item xs={1}>
              <TemporaryDrawer anchor="left" />
            </Grid>
          </Grid>
        </StyledNavbarResponsive>
      )}
    </Grid>
  );
};
export default Navbar;
