import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { StyledcourseInstructor } from "../styled/Box";

function CourseInstructor({ instructor }) {
  useEffect(() => {
    console.log(instructor);
  }, []);
  return (
    <>
    <Box sx={{marginTop:"20px"}} component="h2">Course Instructor:</Box>
      <Grid item container xs={12} spacing={3} sx={{marginTop:"20px"}}>

        <Grid item xs={0.7}></Grid>
        {instructor.map((instructor, key) => (
          <Grid item xs={2} key={key}>
            <StyledcourseInstructor
              component="img"
              src={instructor.image}
            />
            <Typography
              variant="body2"
              component="p"
              sx={{ marginLeft: "5px", fontSize: "1.2rem", fontWeight: "700" }}
            >
              {instructor.name}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginLeft: "10px", fontWeight: "light", fontSize: "18px" ,color:"#198754"}}
            >
              {instructor.job}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CourseInstructor;
