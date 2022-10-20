import React from "react";
import { Box} from "@mui/material";
import girlPhoto from "../assets/register-login.webp";
import Arrow from "../assets/shape-26.webp";

import {
  StyledRegesterPhotoBox,
  StyledRegesterCircularBox,
  
} from "../styled/Box";

export default function RegesterPhotoComponent() {
  return (
    <>
      <StyledRegesterPhotoBox>
       
        
        <Box component="img" src={girlPhoto} sx={{ zIndex: '1',position:'relative',width:'90%' }}></Box>
        <StyledRegesterCircularBox >
        <Box component="img" src={Arrow} sx={{transform: 'rotate(10deg)',height:'90%'}}></Box>
        </StyledRegesterCircularBox>
        
      </StyledRegesterPhotoBox>
    </>
  );
}
