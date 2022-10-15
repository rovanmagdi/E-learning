import { Grid } from "@mui/material";
import {} from "@mui/system";
import { createContext, useEffect, useState } from "react";
import MediaCard from "./cardComponent";
import axios from "axios";

const BASE_URL = "http://localhost:4000/courses";

export const CoursesContext = createContext([]);

const CoursesComponent = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios.get(`${BASE_URL}`).then((response) => {
      setCourse(response.data);
    
    });
  }, []);
  const handleCourse = () => {
    // axios.post(`${BASE_URL}`,{rating:data}).then((response) => {
    //   console.log(data);
    console.log("ghghgh");
  
    // });
  };
  
  
  return (
    <CoursesContext.Provider value={{name:"rovan"}}>

      <Grid item container>
        {course.map((course, index) => {
          return (
            <Grid
              item
              xs={4}
              key={index}
              sx={{ marginTop: "50px"  }}
              onClick={() => handleCourse(course.id)}
            
            >
              <MediaCard
                imageBase={course.imageBase}
                author={course.author}
                imageAuthor={course.imageAuthor}
                description={course.description}
              
                id={course.id}
                rating={course.rating}

              />
            </Grid>
          );
        })}
      </Grid>

   </CoursesContext.Provider> 
  );
};

export default CoursesComponent;
