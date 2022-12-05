import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import TxtUnderline from "../assets/shape-4.webp";
import {
  StyledBlackTxt,
  StyledGreenTxt,
  StyledHomeTitle,
} from "../styled/Typography";
import { StyledLightGreenButton } from "../styled/Button";
import { Box, Typography, Grid } from "@mui/material";
import Arrow from "../assets/shape-13.svg";
import {StyledGreenButton} from '../styled/Button'
import {StyledBecomInstructorBtn} from '../styled/Box'
import DottedShape from "../assets/shape-8.webp";

export default function BecomeAnInstructor() {
  return (
    <>
      <Container
        sx={{
          mt: 10,
          backgroundColor: "#E7F8EE",
          borderRadius: "15px",
        //   minHeight: "270px",
          fontSize: "1.1em",
          textAlign: "center",
          position: "relative",
        }}
      >
       <Box
          component="img"
          sx={{
            width: "5%",
            position: "absolute",
            bottom: "10%",
            left: "2%",
            animation: "rotate 5s  infinite",
            "  @keyframes rotate": {
              "50%": { transform: "rotate(180deg)" },
            },
          }}
          src={DottedShape}
        />
        <Box
          component="img"
          sx={{
            width: "5%",
            position: "absolute",
           top: "10%",
            right: "2%",
            animation: "rotate 5s  infinite",
            "  @keyframes rotate": {
              "50%": { transform: "rotate(180deg)" },
            },
          }}
          src={DottedShape}
        />
        <Container>
        <Grid container spacing={2} sx={{ p: 7 }}>
          <Grid
            item
            lg={5}
            md={12}
            sm={12}
            xs={12}
            alignItems="center"
            justifyContent="center"
            flex-direction="column"
          >
            <StyledGreenTxt>Become An Instructor</StyledGreenTxt>
        <StyledHomeTitle>
          <StyledBlackTxt>
            You can join with Edule as{" "}
            {/* <StyledGreenTxt>bright career.</StyledGreenTxt> */}
            <Typography sx={{ display: "inline-block", position: "relative" }}>
              <StyledHomeTitle>
                <StyledGreenTxt>an instructor?</StyledGreenTxt>
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
                width: "30%",

                position: "absolute",
                display: {
                  lg: "inline-block",
                  md: "none",
                  sm: "none",
                  xs: "none",
                },
                // transform: 'rotate(10deg)',
                bottom: "20%",
                left: { lg: "10%", md: "0%" },
                // marginLeft:'10%',
               
              }}
              src={Arrow}
            />
            
            <StyledBecomInstructorBtn><StyledGreenButton >drop information</StyledGreenButton></StyledBecomInstructorBtn>
          </Grid>
        </Grid>
        </Container>
       
      </Container>
    </>
  );
}
