import * as React from "react";
import Box from "@mui/material/Box";

import { StyledNavbar, StyledNavbarResponsive } from "../styled/Grid";

import { StyledButton } from "../styled/Button";
import { Grid, Link, Container, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TemporaryDrawer from "./drawar";
import { StyledLink } from "../styled/Link";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const pages = ["Home", "All Courses", "Pages", "Blog", "Content"];

const Navbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("976"));
  const [navColor, setnavColor] = React.useState("transparent");
  const [navPosition, setnavPosition] = React.useState("absolute");
  const [navTop, setnavTop] = React.useState("40");
  const [navBorder, setnavBorder] = React.useState("rgba(48,146,85,0.25)");
  const [currentUserStorage, setCurrentUserStorage] = React.useState("");

  const navigate = useNavigate();
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setnavColor("#ffff") : setnavColor("transparent");
    window.scrollY > 80 ? setnavPosition("fixed") : setnavPosition("absolute");
    window.scrollY > 80 ? setnavTop("0") : setnavTop("40");
    window.scrollY > 80
      ? setnavBorder("transparent")
      : setnavBorder("rgba(48,146,85,0.25)");
  };
  function handleSignUp() {
    navigate("/signup");
  }
  function handleSignIn() {
    navigate("/login");
  }
  function handleLinks(page) {
    navigate(`/${page}`);
    console.log(page);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  React.useEffect(() => {
    setCurrentUserStorage(JSON.parse(localStorage.getItem("user")));
  }, [currentUserStorage]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
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
        top: `${navTop}`,
      }}
    >
      {matches ? (
        <>
          <Container>
            <StyledNavbar
              container
              item
              spacing={0}
              xs={12}
              sx={{ alignItems: "center", border: `1px solid ${navBorder} ` }}
            >
              <Grid item xs={3} md={3} sx={{ fontSize: "22px" }}>
                <Link
                  component="img"
                  src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                  sx={{ marginLeft: "20px" }}
                />
              </Grid>
              <Grid item xs={5} md={6}>
                <Box component="div" sx={{ fontSize: "22px" }}>
                  {pages.map((page) => (
                    <StyledLink key={page} onClick={() => handleLinks(page)}>
                      {page}
                    </StyledLink>
                  ))}
                </Box>
              </Grid>
              {currentUserStorage ? (
                <Grid item xs={4} md={3}>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <ShoppingCartIcon
                      sx={{ color: "#198754", cursor: "pointer" }}
                    />
                    <StyledLink sx={{ marginRight: "30px" }}>
                      {currentUserStorage.name}
                    </StyledLink>
                    <IconButton
                      sx={{ marginRight: "30px" }}
                      onClick={handleClickDropDown}
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          // maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                          backgroundColor: "rgba(48,146,85,0.9)",
                          left: "",
                        },
                      }}
                    >
                      <MenuItem
                        sx={{ color: "white" }}
                        selected="profile"
                        onClick={handleClose}
                      >
                        profile
                      </MenuItem>
                      <MenuItem
                        sx={{ color: "white" }}
                        selected="profile"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </MenuItem>
                    </Menu>
                  </Box>
                </Grid>
              ) : (
                <Grid item xs={4} md={3}>
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <StyledLink onClick={() => handleSignIn()}>
                      Sign In
                    </StyledLink>
                    <StyledButton onClick={() => handleSignUp()}>
                      Sign up
                    </StyledButton>
                  </Box>
                </Grid>
              )}
            </StyledNavbar>
          </Container>
        </>
      ) : (
        <StyledNavbarResponsive sx={{ border: `1px solid ${navBorder}` }}>
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
