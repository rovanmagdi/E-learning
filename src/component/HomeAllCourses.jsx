import React, { useEffect, useState } from "react";
import { Box ,Typography} from "@mui/material";
import { Container } from "@mui/system";
import TxtUnderline from "../assets/shape-6.webp";
import CoursesTab from './coursesTab'
import {
    StyledBlackTxt,
    StyledGreenTxt,
    StyledHomeTitle,
  } from "../styled/Typography";
import {StyledLightGreenButton} from '../styled/Button'
import { useNavigate } from "react-router-dom";



export default function HomeAllCourses() {
    const navigate = useNavigate();

    const navigateAllCourses=()=>{
        navigate("/All Courses");
    }
  return (
   <>
   <Box component='section' sx={{mt:10, textAlign:'center'}}>
   <Container>
   <StyledHomeTitle ><StyledBlackTxt>All <Typography sx={{display:'inline-block',position:'relative'}}>
    <StyledHomeTitle><StyledGreenTxt>Courses</StyledGreenTxt></StyledHomeTitle>
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
   </Typography> of Edule</StyledBlackTxt></StyledHomeTitle>
 
   </Container>
   <Box sx={{textAlign:'left'}}>
   <CoursesTab />
   </Box>
  

    <StyledLightGreenButton onClick={navigateAllCourses}>other courses</StyledLightGreenButton>
    </Box>
   
   </>
  )
}
