import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const CourseComponent = () => {
  return (
    <Container>
      <Grid container item xs={12} sx={{ margin: "50px" }}>
        <Grid item xs={7} sx={{ marginRight: "30px" }}>
          <Box
            component="img"
            src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-details.jpg"
            width="100%"
            height="80vh"
            sx={{ borderRadius: "20px" }}
          />
          <Typography
            component="h1"
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "1.5rem" ,marginTop:"20px"}}
          >
            Finance & Investment Series: Learn to Budget and Calculate Your Net
            Worth.
          </Typography>
          <Grid
            container
            item
            xs={12}
            sx={{ alignItems: "center", margin: "20px 0px 20px 0px" }}
          >
            <Grid item xs={7} sx={{alignItems: "center"}}>
              <Box
                component="img"
                src="https://htmldemo.net/edule/eduLe/assets/images/courses/courses-details.jpg"
                sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              <Typography
                variant="body2"
                component="span"
                sx={{ fontSize: "1rem" }}
              >
                Pamela Foster 

              </Typography>
            </Grid>
            <Grid item xs={3}>
              2
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} sx={{ backgroundColor: "red" }}>
          1
        </Grid>
      </Grid>
    </Container>
  );
};

export default CourseComponent;
