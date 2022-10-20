import { Box,  Grid, Rating, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { StyledGridDetails } from "../styled/Grid";
import { StyledTypographyDetails } from "../styled/Typography";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";
import ListDetailsCourses from "./listDetailsCourses";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TheatersIcon from "@mui/icons-material/Theaters";
import ListIcon from "@mui/icons-material/List";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DetailsCourseTab from "./detailsCourseTab";
import {StyledButtonDetails} from '../styled/Button';
import {   useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { useParams } from "react-router";
const CourseComponent = () => {
  const [course, setCourse] = useState({});
  const [rating, setrating] = useState("");

  const { id } = useParams();
  const BASE_URL = "http://localhost:4200/courses";
  useEffect(() => {
    axios.get(`${BASE_URL}/${id}`).then((response) => {
      setCourse(response.data);
      console.log();
      setrating(response.data.rating);
    });
  }, [id]);
  const handleChange = async (event, id) => {
    // console.log(event);

    const response = await axios
      .patch(`http://localhost:4200/courses/${id}`, { rating: event })
      .catch((error) => console.log("Error: ", error));
    if (response && response.data) {
      console.log(response.data);
    }
    setrating(event);
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("976"));

  return (
    <>
      <Container>
        {matches? <>
          <Grid container item xs={12} sx={{ marginTop: "50px" }}>
          <Grid item xs={7} sx={{ marginRight: "30px" }}>
            <Box
              component="img"
              src={`${course.imageBase}`}
              width="100%"
              height="420px"
              sx={{ borderRadius: "20px" }}
            />
            <Typography
              component="h1"
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: "1.9rem", marginTop: "20px" }}
            >
              {course.title}
            </Typography>
            <Grid
              container
              item
              xs={12}
              sx={{ alignItems: "center", margin: "20px 0px 20px 0px" }}
            >
              <Grid item xs={8}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    component="img"
                    src={`${course.imageAuthor}`}
                    sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                  >
                    {course.author}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    {/* <StarIcon sx={{ color: "#ffba00" }} />
                     */}
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event) => {
                        handleChange(event.target.value, id);
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Grid>
            </Grid>
          </Grid>
          <StyledGridDetails item xs={4}>
            <StyledTypographyDetails variant="body2" component="h1">
              $ {course.price}
            </StyledTypographyDetails>

            <Box sx={{ width: "80%", maxWidth: 360, margin: "auto" }}>
              <Divider />
              <ListDetailsCourses
                icon={<PersonIcon />}
                nickName="Instructor"
                name={course.author}
              />
              <ListDetailsCourses
                icon={<AccessTimeIcon />}
                nickName="Duration"
                name={`${course.durationH} hr ${course.durationM} mins`}
              />
              <ListDetailsCourses
                icon={<TheatersIcon />}
                nickName="Lectures"
                name={course.lecture}
              />
              <ListDetailsCourses
                icon={<ListIcon />}
                nickName="Level"
                name={course.level}
              />
              <ListDetailsCourses
                icon={<LibraryBooksIcon />}
                nickName="Language"
                name="English"
              />
              <ListDetailsCourses
                icon={<TheatersIcon />}
                nickName="Certificate"
                name="Yes"
              />
              <Box textAlign="center">
                <StyledButtonDetails
                  variant="contained"
                  sx={{
                   
                    
                  }}
                >
                  Enroll Now
                </StyledButtonDetails>
              </Box>
            </Box>
          </StyledGridDetails>
        </Grid>
        </>:<Container><Grid container item xs={12} sx={{ marginTop: "50px" }}>
          <Grid item xs={12} sx={{ marginRight: "30px" }}>
            <Box
              component="img"
              src={`${course.imageBase}`}
              width="100%"
              height="420px"
              sx={{ borderRadius: "20px" }}
            />
            <Typography
              component="h1"
              variant="body1"
              sx={{ fontWeight: "bold", fontSize: "1.9rem", marginTop: "20px" }}
            >
              {course.title}
            </Typography>
            <Grid
              container
              item
              xs={12}
              sx={{ alignItems: "center", margin: "20px 0px 20px 0px" }}
            >
              <Grid item xs={8}>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Box
                    component="img"
                    src={`${course.imageAuthor}`}
                    sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                  >
                    {course.author}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <CardActions disableSpacing>
                  <IconButton aria-label="share">
                    {/* <StarIcon sx={{ color: "#ffba00" }} />
                     */}
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      onChange={(event) => {
                        handleChange(event.target.value, id);
                      }}
                    />
                  </IconButton>
                </CardActions>
              </Grid>
            </Grid>
          </Grid>
          </Grid></Container>}
        
        <DetailsCourseTab />
      </Container>
    </>
  );
};

export default CourseComponent;
