import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { StyledAppBar, StyledLink } from "../styled/Bar";
import {  Link } from "@mui/material";
import { StyledButton } from "../styled/Button";

const pages = ["Home", "All Course", "Pages", "Blog", "Content"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar>
      <Container >
        <Toolbar disableGutters>
          <Box
            component="img"
            src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
            sx={{ width: "160px", height: "40px" }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              maxWidth: "50%",
              margin: "auto",

            }}
          >
            {pages.map((page) => (
              <StyledLink
                key={page}
              >
                {page}
              </StyledLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, color: "red" }}>
            <Link

              sx={{ my: 2, color: "#212832", textDecoration: "none" }}
            >
              Sign In
            </Link>
            <StyledButton>
              Sign up
            </StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
export default Navbar;
