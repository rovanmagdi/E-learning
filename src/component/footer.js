import { LocalPhoneOutlined } from "@mui/icons-material";
import { Stack, Grid, Link, Box, Typography, TextField } from "@mui/material";

import React from "react";
import { StyledFooter, StyledFooterImage } from "../styled/Footer";
import ComponentContactSmall from "./componentContactSmall";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import List from "@mui/material/List";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Container } from "@mui/system";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterImage
        component="img"
        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-21.png"
      />
      <Container>

      <Grid item container spacing={2} xs={12} sx={{  margin: "auto" }}>
        <Grid  xs={4}>
          <Link
            component="img"
            src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
            sx={{ width: "180px", height: "40px", marginBottom: "25px" }}
          />

          <Stack sx={{ marginBottom: "18px" }}>
            <Typography component={'span'} variant={'body2'}sx={{ fontSize: "22px", fontWeight: "bold" }} >
              Caribbean Ct
            </Typography>
            <Typography component={'span'} variant={'body2'} sx={{ fontSize: "15px" }}>
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
            <Typography
              sx={{
                display: "flex",
                aligns: "center",
                justifyContent: "space-between",
                width: "40%",
                marginTop:"12px"
              }}
            >
              <FacebookIcon sx={{ color: "#00000", height: "20px" }} />
              <TwitterIcon sx={{ color: "#00000", height: "20px" }} />
              <InstagramIcon sx={{ color: "#00000", height: "20px" }} />
            </Typography>
          </Stack>
        </Grid>
        <Grid  xs={3}>
          <Typography component={'span'} variant={'body2'}sx={{ paddingBottom: "25px" ,fontWeight:"bold"}}>Category</Typography>
          <Box sx={{ width: "100%", maxWidth: 360 }}>
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
                    sx={{ paddingTop: "14px", fontSize: "0.8rem" }}
                  >
                    {page}
                  </Stack>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid  xs={3}>
        <Typography  component={'span'} variant={'body2'} sx={{ paddingBottom: "25px" ,fontWeight:"bold"}}>Quick Links</Typography>
          <Box sx={{ width: "100%", maxWidth: 360 }}>
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
                    sx={{ paddingTop: "14px", fontSize: "0.8rem" }}
                  >
                    {page}
                  </Stack>
                );
              })}
            </List>
          </Box>
        </Grid>
        <Grid  xs={2}>
        <Typography  component={'p'} variant={'body2'}sx={{ paddingBottom: "25px" ,fontWeight:"bold"}}>Subscribe</Typography>
        <Typography  component={'p'} variant={'body2'}sx={{ paddingTop: "14px",fontSize: "0.8rem"}}>Lorem Ipsum has been them an industry printer took a galley make book.</Typography>
        <TextField id="outlined-basic" label="Outlined"  />
        </Grid>
      </Grid>
      </Container>
      <StyledFooterImage
      sx={{left:0}}
        component="img"
        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-22.png"
        
      />
    </StyledFooter>
  );
};

export default Footer;
