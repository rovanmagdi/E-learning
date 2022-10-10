import { Grid } from "@mui/material";
import {} from "@mui/system";
import React, { useEffect, useState } from "react";
import MediaCard from "../component/cardComponent";
import axios from "axios";

const BASE_URL = "http://localhost:4000/courses";

const CoursesComponent = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setCourse(response.data);
      console.log(response.data);
    });
  }, []);
  const handleCourse = (data) => {
    axios.post(`${BASE_URL}`,{rating:data}).then((response) => {
      console.log(data);
  
    });
  };
  return (
    <>
      <Grid item container>
        {course.map((course, index) => {
          return (
            <Grid
              item
              xs={4}
              key={index}
              sx={{ marginTop: "50px",
                }}
              onClick={() => handleCourse(course.id)}
            
            >
              <MediaCard
                imageBase={course.imageBase}
                author={course.author}
                imageAuthor={course.imageAuthor}
                description={course.description}
                complete={course.complete}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default CoursesComponent;
