import { LocalPhoneOutlined } from "@mui/icons-material";
import { Stack, Grid, Link, Typography, TextField } from "@mui/material";

import React from "react";
import { StyledFooter,StyledFooterResponsive ,StyledFooterResponsiveMobile} from "../styled/Stack";

import ComponentContactSmall from "./componentContactSmall";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import List from "@mui/material/List";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container } from "@mui/system";
import { StyledFooterImage, StyledFooterSocailMedai } from "../styled/Box";
import { StyledtitleFooter,StyledtitleFooterResponsive, } from "../styled/Typography";
import { StyledButtonFooter } from "../styled/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("976"));
  const mobile = useMediaQuery(theme.breakpoints.up("558"));

  return (
    <>
      {matches ? (
        <>
          <StyledFooter>
            <StyledFooterImage
              component="img"
              src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-21.png"
            />
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Link
                    component="img"
                    src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                    sx={{
                      width: "180px",
                      height: "40px",
                      marginBottom: "25px",
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <StyledtitleFooter component={"span"} variant={"body2"}>
                    Category
                  </StyledtitleFooter>
                </Grid>
                <Grid item xs={3}>
                  <StyledtitleFooter component={"span"} variant={"body2"}>
                    Quick Links
                  </StyledtitleFooter>
                </Grid>
                <Grid item xs={3}>
                  <StyledtitleFooter component={"span"} variant={"body2"}>
                    Subscribe
                  </StyledtitleFooter>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Stack sx={{ marginBottom: "14px" }}>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        paddingTop: "6px",
                      }}
                    >
                      Caribbean Ct
                    </Typography>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      sx={{ fontSize: "15px" }}
                    >
                      Haymarket, Virginia (VA).{" "}
                    </Typography>
                  </Stack>
                  <Stack>
                    <ComponentContactSmall
                      contact={"(970) 262-1413"}
                      icon={<LocalPhoneOutlined />}
                    />
                    <ComponentContactSmall
                      contact={"  address@gmail.com"}
                      icon={<EmailOutlinedIcon />}
                    />
                  </Stack>
                  <Stack>
                    <StyledFooterSocailMedai>
                      <FacebookIcon sx={{ color: "#00000", height: "20px" }} />
                      <TwitterIcon sx={{ color: "#00000", height: "20px" }} />
                      <InstagramIcon sx={{ color: "#00000", height: "20px" }} />
                    </StyledFooterSocailMedai>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  <List>
                    {[
                      "Creative Writing",
                      "Film & Video",
                      "Graphic Design",
                      "UI/UX Design",
                      "Business Analytics",
                      "Marketing",
                    ].map((page, index) => {
                      return (
                        <Stack
                          key={index}
                          sx={{ paddingBottom: "14px", fontSize: "0.8rem" }}
                        >
                          {page}
                        </Stack>
                      );
                    })}
                  </List>
                </Grid>
                <Grid item xs={3}>
                  <List>
                    {[
                      "Privacy Policy",
                      "Discussion",
                      "Graphic Design",
                      "UI/UX Design",
                      "Business Analytics",
                      "Marketing",
                    ].map((page, index) => {
                      return (
                        <Stack
                          key={index}
                          sx={{ paddingBottom: "14px", fontSize: "0.8rem" }}
                        >
                          {page}
                        </Stack>
                      );
                    })}
                  </List>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    component={"div"}
                    variant={"body2"}
                    sx={{ fontSize: "0.8rem" }}
                  >
                    Lorem Ipsum has been them an industry printer took a galley
                    make book.
                  </Typography>
                  <TextField
                    sx={{ backgroundColor: "white", marginTop: "20px" }}
                    placeholder="Enter email"
                  />
                  <StyledButtonFooter> Subscribe Now</StyledButtonFooter>
                </Grid>
              </Grid>

              <StyledFooterImage
                sx={{ right: 0 }}
                component="img"
                src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-22.png"
              />
            </Container>
          </StyledFooter>
        </>
      ) : (
        mobile?(<>
          <StyledFooterResponsive>
            <StyledFooterImage
              component="img"
              src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-21.png"
            />
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link
                    component="img"
                    src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                    sx={{
                      width: "180px",
                      height: "40px",
                      marginBottom: "25px",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <StyledtitleFooter component={"span"} variant={"body2"}>
                  Subscribe
                  </StyledtitleFooter>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Stack sx={{ marginBottom: "14px" }}>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        paddingTop: "6px",
                      }}
                    >
                      Caribbean Ct
                    </Typography>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      sx={{ fontSize: "15px" }}
                    >
                      Haymarket, Virginia (VA).{" "}
                    </Typography>
                  </Stack>
                  <Stack>
                    <ComponentContactSmall
                      contact={"(970) 262-1413"}
                      icon={<LocalPhoneOutlined />}
                    />
                    <ComponentContactSmall
                      contact={"  address@gmail.com"}
                      icon={<EmailOutlinedIcon />}
                    />
                  </Stack>
                  <Stack>
                    <StyledFooterSocailMedai>
                      <FacebookIcon sx={{ color: "#00000", height: "20px" }} />
                      <TwitterIcon sx={{ color: "#00000", height: "20px" }} />
                      <InstagramIcon sx={{ color: "#00000", height: "20px" }} />
                    </StyledFooterSocailMedai>
                  </Stack>
                </Grid>
                <Grid item xs={3}>
                  

                  <Typography
                    component={"div"}
                    variant={"body2"}
                    sx={{ fontSize: "0.8rem" }}
                  >
                    Lorem Ipsum has been them an industry printer took a galley
                    make book.
                  </Typography>
                  <TextField
                    sx={{ backgroundColor: "white", marginTop: "20px" }}
                    placeholder="Enter email"
                  />
                  <StyledButtonFooter> Subscribe Now</StyledButtonFooter>
                </Grid>
                <Grid item xs={6}>
                  <StyledtitleFooterResponsive component={"span"} variant={"body2"} >
                    Quick Links
                  </StyledtitleFooterResponsive>

                  <List sx={{paddingTop:"40px"}}>
                    {[
                      "Privacy Policy",
                      "Discussion",
                      "Graphic Design",
                      "UI/UX Design",
                      "Business Analytics",
                      "Marketing",
                    ].map((page, index) => {
                      return (
                        <Stack
                          key={index}
                          sx={{ paddingBottom: "14px", fontSize: "0.8rem" }}
                        >
                          {page}
                        </Stack>
                      );
                    })}
                  </List>
                </Grid>
                <Grid item xs={3}>
                  <StyledtitleFooterResponsive component={"span"} variant={"body2"}>
                    Category
                  </StyledtitleFooterResponsive>

                  <List sx={{paddingTop:"40px"}}>
                    {[
                      "Privacy Policy",
                      "Discussion",
                      "Graphic Design",
                      "UI/UX Design",
                      "Business Analytics",
                      "Marketing",
                    ].map((page, index) => {
                      return (
                        <Stack
                          key={index}
                          sx={{ paddingBottom: "14px", fontSize: "0.8rem" }}
                        >
                          {page}
                        </Stack>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>

              <StyledFooterImage
                sx={{ right: 0 }}
                component="img"
                src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-22.png"
              />
            </Container>
          </StyledFooterResponsive>
        </>):(<>
          <StyledFooterResponsiveMobile >
            <StyledFooterImage
              component="img"
              src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-21.png"
            />
            <Container>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Link
                    component="img"
                    src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
                    sx={{
                      width: "180px",
                      height: "40px",
                      marginBottom: "25px",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledtitleFooter component={"span"} variant={"body2"}>
                  Subscribe
                  </StyledtitleFooter>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Stack sx={{ marginBottom: "14px" }}>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      sx={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        paddingTop: "6px",
                      }}
                    >
                      Caribbean Ct
                    </Typography>
                    <Typography
                      component={"span"}
                      variant={"body2"}
                      sx={{ fontSize: "15px" }}
                    >
                      Haymarket, Virginia (VA).{" "}
                    </Typography>
                  </Stack>
                  <Stack>
                    <ComponentContactSmall
                      contact={"(970) 262-1413"}
                      icon={<LocalPhoneOutlined />}
                    />
                    <ComponentContactSmall
                      contact={"  address@gmail.com"}
                      icon={<EmailOutlinedIcon />}
                    />
                  </Stack>
                  <Stack>
                    <StyledFooterSocailMedai>
                      <FacebookIcon sx={{ color: "#00000", height: "20px" }} />
                      <TwitterIcon sx={{ color: "#00000", height: "20px" }} />
                      <InstagramIcon sx={{ color: "#00000", height: "20px" }} />
                    </StyledFooterSocailMedai>
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  

                  <Typography
                    component={"div"}
                    variant={"body2"}
                    sx={{ fontSize: "0.8rem" }}
                  >
                    Lorem Ipsum has been them an industry printer took a galley
                    make book.
                  </Typography>
                  <TextField
                    sx={{ backgroundColor: "white", marginTop: "20px" }}
                    placeholder="Enter email"
                  />
                  <StyledButtonFooter> Subscribe Now</StyledButtonFooter>
                </Grid>
                <Grid item xs={12}>
                  <StyledtitleFooterResponsive component={"span"} variant={"body2"} >
                    Quick Links
                  </StyledtitleFooterResponsive>

                  <List sx={{paddingTop:"40px"}}>
                    {[
                      "Privacy Policy",
                      "Discussion",
                      "Graphic Design",
                      "UI/UX Design",
                      "Business Analytics",
                      "Marketing",
                    ].map((page, index) => {
                      return (
                        <Stack
                          key={index}
                          sx={{ paddingBottom: "14px", fontSize: "0.8rem" }}
                        >
                          {page}
                        </Stack>
                      );
                    })}
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <StyledtitleFooterResponsive component={"span"} variant={"body2"}>
                    Category
                  </StyledtitleFooterResponsive>

                  <List sx={{paddingTop:"40px"}}>
                    {[
                      "Privacy Policy",
                      "Discussion",
                      "Graphic Design",
                      "UI/UX Design",
                      "Business Analytics",
                      "Marketing",
                    ].map((page, index) => {
                      return (
                        <Stack
                          key={index}
                          sx={{ paddingBottom: "14px", fontSize: "0.8rem" }}
                        >
                          {page}
                        </Stack>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>

              <StyledFooterImage
                sx={{ right: 0 }}
                component="img"
                src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-22.png"
              />
            </Container>
          </StyledFooterResponsiveMobile></>)
       
      )}
      {}
    
    </>
  );
};

export default Footer;
