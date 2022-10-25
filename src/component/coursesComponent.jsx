import { Grid } from "@mui/material";
import {} from "@mui/system";
import {  useContext, useEffect, useState } from "react";
import MediaCard from "./cardComponent";
import axios from "axios";
import { AppContext } from "../context";

const BASE_URL = "http://localhost:4200/courses";

const CoursesComponent = () => {
  const [course, setCourse] = useState([]);

  const { setCurrentCourses } = useContext(AppContext);

  useEffect(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setCourse(response.data);
      setCurrentCourses(response.data);
    });
  }, [setCurrentCourses]);

  const handleCourse = () => {
    // axios.post(`${BASE_URL}`,{rating:data}).then((response) => {
    //   console.log(data);
    // });
  };

  return (
    <Grid item container>
      {course.map((course, index) => {
        return (
          <Grid
            item
            xs={4}
            key={index}
            sx={{ margin: "50px 0px 50px 0px" }}
            onClick={() => handleCourse(course.id)}
          >
            <MediaCard
              imageBase={course.imageBase}
              author={course.author}
              imageAuthor={course.imageAuthor}
              title={course.title}
              id={course.id}
              rating={course.rating}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CoursesComponent;
