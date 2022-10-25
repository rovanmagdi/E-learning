import React from "react";
import { Container } from "@mui/system";
import { Box, Grid, Link } from "@mui/material";
import {
  StyledAppBox,
  StyledBtnGoogleBox,
  StyledBtnAppStoreBox,
  StyledGetAppCircularShape,
} from "../styled/Box";
import Arrow from "../assets/shape-14.webp";
import GoogleImg from "../assets/google-play.webp";
import AppStoreImg from "../assets/app-store.webp";
import {
  StyledWhiteTxt,
  StyledWhiteTitle,
} from "../styled/Typography";

export default function GetAppComponent() {
  return (
    <>
      <StyledAppBox sx={{position: "relative",overflow:'hidden' ,marginTop:"50px"}}>
      <StyledGetAppCircularShape
              sx={{ bottom: "40%", left: "5%" }}
            ></StyledGetAppCircularShape>
            <StyledGetAppCircularShape
              sx={{ top: "20%", right: "35%" }}
            ></StyledGetAppCircularShape>
            <StyledGetAppCircularShape
              sx={{bottom: "55%", right: "10%" }}
            ></StyledGetAppCircularShape>
            <StyledGetAppCircularShape
              sx={{  right: "-20%",top:'-10%' }}
            ></StyledGetAppCircularShape>
        <Container>
          <Grid container spacing={2} sx={{ p: 7, }}>
           
            <Grid
              item
              lg={6}
              md={12}
              sm={12}
              xs={12}
              alignItems="center"
              justifyContent="center"
              flex-direction="column"
            >
              <StyledWhiteTxt sx={{ mb: 2 }}>Ready to start?</StyledWhiteTxt>
              <StyledWhiteTitle>
                Download our mobile app. for easy to start your course.
              </StyledWhiteTitle>
            </Grid>
            <Grid
              item
              lg={6}
              md={12}
              sm={12}
              xs={12}
              sx={{ position: "relative" }}
            >
              <Box
                component="img"
                sx={{
                  width: "25%",

                  position: "absolute",
                  display:{lg:'inline-block',md:'none',sm :'none',xs:'none'},
                  // transform: 'rotate(10deg)',
                  bottom: "20%",
                  left: {lg:"10%",md:'0%'},
                  // marginLeft:'10%',
                  animation: "forward2 2s infinite alternate",
                  "  @keyframes forward2": {
                    "0%": {
                      left: "11%",
                    },

                    " 100% ": {
                      left: "18%",
                    },
                  },
                  
                }}
                src={Arrow}
              />
              <StyledBtnGoogleBox>
                <Link
                  target="_blank"
                  href="https://play.google.com/store/games?gl=FR&utm_source=emea_Med&utm_medium=hasem&utm_content=Oct2020&utm_campaign=Evergreen&pcampaignid=MKT-EDR-emea-fr-1001280-Med-hasem-py-Evergreen-Oct2020-Text_Search_BKWS%7CONSEM_kwid_43700008792247580&gclid=Cj0KCQjwy5maBhDdARIsAMxrkw01yiOOUb8N_Qj3X6s14P7kzwmb4qMgKOqQxRVk-O8nRGti1tGHowsaAvjyEALw_wcB&gclsrc=aw.ds"
                  underline="none"
                >
                  <Box component="img" src={GoogleImg} sx={{height:'100%'}}></Box>
                </Link>
              </StyledBtnGoogleBox>

              <StyledBtnAppStoreBox>
                <Link href="https://www.apple.com/app-store/" target="_blank">
                  <Box component="img" src={AppStoreImg} sx={{height:'100%'}}></Box>
                </Link>
              </StyledBtnAppStoreBox>
            </Grid>
          </Grid>
        </Container>
      </StyledAppBox>
    </>
  );
}
