import { Grid } from "@mui/material";
import {  } from "@mui/system";
import React from "react";
import MediaCard from '../component/cardComponent'

const CoursesComponent = () => {
  return <>
    <Grid item container sx={{marginTop:"50px",marginBottom:"50px"}}>
      <Grid item xs={4}>
      <MediaCard imageBase=""author=""imageAuthor=""description=""complete=""/>
      </Grid>
     

    </Grid>
  </>;
};

export default CoursesComponent;
