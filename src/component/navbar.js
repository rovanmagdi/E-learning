import * as React from "react";
import Box from "@mui/material/Box";

import {
  StyledLink,
  StyledNavbar,
  StyledNavbarResponsive,
} from "../styled/Bar";
import { StyledButton } from "../styled/Button";
import { Grid, Link, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TemporaryDrawer from "../component/drawar";

const pages = ["Home", "All Course", "Pages", "Blog", "Content"];

const Navbar = () => {
  // const [spacing, setSpacing] = React.useState(2);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("976"));
  const [navColor, setnavColor] = React.useState("transparent");
  const [navPosition, setnavPosition] = React.useState("absolute");
  const [navTop, setnavTop] = React.useState("40");
  const [navTransition, setnavTransition] = React.useState("1");

  const [navBorder, setnavBorder] = React.useState("rgba(48,146,85,0.25)");

  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColor("#ffff") : setnavColor("transparent");
    window.scrollY > 80 ? setnavPosition("fixed") : setnavPosition("absolute");
    window.scrollY > 80 ? setnavTop("0") : setnavTop("40");
    window.scrollY > 80 ? setnavBorder("transparent") : setnavBorder("rgba(48,146,85,0.25)");
    window.scrollY > 80 ? setnavTransition("1") : setnavTransition("2");

  };
  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Grid
      container
      item
      xs={12}
      spacing={0}
      sx={{
        zIndex: "3",
        backgroundColor: `${navColor}`,
        position: `${navPosition}`,
        top: `${navTop}` ,
        transition: `${navPosition} 1s`
      }}
    >
      {matches ? (
        <>
          <Container>
            <StyledNavbar
              container
              spacing={3}
              sx={{ border: `1px solid ${navBorder}` }}
            >
              <Grid xs={2}>
                <Link
                  component="img"
                  src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                  sx={{ width: "160px", height: "40px", marginLeft: "20px" }}
                />
              </Grid>
              <Grid xs={7}>
                <Box component="div" sx={{ fontSize: "18px" }}>
                  {pages.map((page) => (
                    <StyledLink key={page}>{page}</StyledLink>
                  ))}
                </Box>
              </Grid>
              <Grid xs={3}>
                <StyledLink>Sign In</StyledLink>
                <StyledButton>Sign up</StyledButton>
              </Grid>
            </StyledNavbar>
          </Container>
        </>
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
