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
  const [navColor, setnavColor] = React.useState("red");
  const listenScrollEvent = () => {
    window.scrollX > 50 ? setnavColor("red") : setnavColor("green");
  };
  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Grid container item xs={12} spacing={0} sx={{position:"sticky",top:"0",backgroundColor:{ navColor}}}>
      {matches ? (
        <>
          <Container >
            <StyledNavbar   container spacing={3}>
              <Grid  xs={2}>
                <Link
                  component="img"
                  src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                  sx={{ width: "160px", height: "40px" ,marginLeft:"20px"}}
                />
              </Grid>
              <Grid   xs={7}>
                <Box component="div" sx={{fontSize:"18px"}}>
                  {pages.map((page) => (
                    <StyledLink key={page}>{page}</StyledLink>
                  ))}
                </Box>
              </Grid>
              <Grid  xs={3} >
               
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
