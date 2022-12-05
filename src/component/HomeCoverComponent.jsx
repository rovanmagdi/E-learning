import React from "react";
import { Box, Typography } from "@mui/material";
import {
  StyledHomeCover,
  StyledHomeCircularBox,
  HomeCoverTxtBox,
} from "../styled/Box";
import {
  StyledBlackTxt,
  StyledGreenTxt,
  StyledHomeTitle,
} from "../styled/Typography";
import { StyledGreenButton } from "../styled/Button";
import { Container } from "@mui/system";
import Author from "../assets/slider-1.webp";
import Arrow from "../assets/shape-5.webp";
import Line2 from "../assets/shape-9.webp";
import Book from "../assets/book.png";
import Play from "../assets/play.png";
import UnderLine from "../assets/shape-6.webp";
import DottedShape from "../assets/shape-8.webp";
import TxtUnderline from "../assets/shape-4.webp";
import Circle from "../assets/shape-10.webp";

export default function HomeCoverComponent() {
 
  return (
    <>
      <StyledHomeCover>
        <Box
          component="img"
          src={Author}
          sx={{
            // width: { lg: "11%", md: "12%", sm: "12%", xs: "12%" },
            height: { lg: "80%", md: "70%", sm: "60%", xs: "60%" },
            position: "absolute",
            bottom: "0px",
            right: { lg: "8%", md: "7%", sm: "0%", xs: "0%" },
            display: { lg: "block", md: "block", sm: "block", xs: "none" },
            zIndex: 1,
          }}
        ></Box>

        <Box
          component="img"
          sx={{
            width: "5%",
            display: { lg: "block", md: "block", sm: "none", xs: "none" },
            position: "absolute",
            bottom: { lg: "65%", md: "55%", sm: "37%", xs: "37%" },
            right: "28%",
            animation: "forward 2s infinite alternate",
            "  @keyframes forward": {
              "0%": {
                right: "29%",
              },

              " 100% ": {
                right: "32%",
              },
            },
          }}
          src={Arrow}
        />

        <StyledHomeCircularBox>
          <Box
            component="img"
            src={Book}
            sx={{
              width: "30%",
            }}
          ></Box>
          <Typography sx={{ color: "white", fontWeight: "900" }}>
            1,235
          </Typography>
          <Typography sx={{ color: "white" }}>Courses</Typography>
        </StyledHomeCircularBox>

        <Box
          component="img"
          sx={{
            position: "absolute",
            top: "54%",
            left: { lg: "53%", md: "50.5%" },
            width: "11%",
            display: { lg: "block", md: "block", sm: "none", xs: "none" },
          }}
          src={UnderLine}
        />
        <Box
          component="img"
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            height: { lg: "60%", md: "22%", sm: "17%", xs: "10%" },
          }}
          src={Line2}
        />
        <Box
          component="img"
          sx={{
            position: "absolute",
            bottom: "17%",
            display: { lg: "block", md: "block", sm: "none", xs: "none" },
            left: "7%",
          }}
          src={Circle}
        />
        <Box
          component="img"
          sx={{
            position: "absolute",
            bottom: "23%",
            left: "10.5%",
            display: { lg: "block", md: "block", sm: "none", xs: "none" },
          }}
          src={Play}
        />

        <Box
          component="img"
          sx={{
            width: "8%",
            position: "absolute",
            top: "20%",
            left: "10%",
            animation: "rotate 5s  infinite",
            "  @keyframes rotate": {
              "50%": { transform: "rotate(180deg)" },
            },
          }}
          src={DottedShape}
        />
        <Container>
          <HomeCoverTxtBox>
            <Box sx={{ position: "relative" }}>
              <StyledGreenTxt>Start your favourite course</StyledGreenTxt>
              <StyledHomeTitle>
                <StyledBlackTxt>
                  Now learning from anywhere, and build your{" "}
                  {/* <StyledGreenTxt>bright career.</StyledGreenTxt> */}
                  <Typography
                    sx={{ display: "inline-block", position: "relative" }}
                  >
                    <StyledHomeTitle>
                      <StyledGreenTxt>bright career.</StyledGreenTxt>
                    </StyledHomeTitle>
                    <Box
                      component="img"
                      src={TxtUnderline}
                      sx={{
                        position: "absolute",
                        bottom: "-16px",
                        right: "0",
                        width: "100%",
                      }}
                    ></Box>
                  </Typography>
                </StyledBlackTxt>{" "}
              </StyledHomeTitle>

              <StyledBlackTxt sx={{ mt: 2 }}>
                It has survived not only five centuries but also the leap into
                electronic typesetting.
              </StyledBlackTxt>
              <StyledGreenButton>Start a course</StyledGreenButton>
            </Box>
          </HomeCoverTxtBox>
        </Container>
      </StyledHomeCover>
    </>
  );
}
