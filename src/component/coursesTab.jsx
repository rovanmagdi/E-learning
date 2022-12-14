import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CoursesComponent from "./coursesComponent";
import { Container } from "@mui/system";
import {
  CircularProgress,
  FormControl,
  Grid,
  OutlinedInput,
  useMediaQuery,
} from "@mui/material";
import { StyledNavCourses } from "../styled/Grid";

import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { StyledBoxSearch } from "../styled/Box";
import { useTheme } from "@emotion/react";
import { AppContext } from "../context";
import MediaCard from "./cardComponent";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index } = props;

  return <>{value === index && <>{children}</>}</>;
}

const CoursesTab = () => {
  

  const [currentCourses, setCurrentCourses] = React.useState([]);

  const [activeButton, setActiveButton] = React.useState("All Courses");

  const [value, setValue] = React.useState(0);

  const [valueSearch, setValueSearch] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const clickedButtonHandler = (name) => {
    setActiveButton(name);
  };
  const [values, setValues] = React.useState({
    word: "",
  });
  const handleChangeTxt = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const search = (word) => {
    setValueSearch(currentCourses.filter((item) => item.title.includes(word)));

    console.log(valueSearch);
    console.log(values.word);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("1199"));

  const BASE_URL = "http://localhost:3200/users";
  const storageId = JSON.parse(localStorage.getItem("user"))?.id;

  const [collection, setCollection] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/${storageId}`).then((response) => {
      setCollection(response.data);
    });
  }, [storageId]);

  return (
    <>
      <AppContext.Provider value={{ currentCourses, setCurrentCourses }}>
        <Container>
          {matches ? (
            <>
              {" "}
              <StyledNavCourses container item xs={12}>
                <Grid item xs={8}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    TabIndicatorProps={{
                      style: { height: "0px" },
                      sx: { display: "none" },
                    }}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{ flexWrap: "wrap" }}
                  >
                    {["All Courses", "Collections", "Wishlist", "Archived"].map(
                      (label, index) => {
                        return (
                          <Tab
                            key={index}
                            label={
                              <Box
                                component="span"
                                style={{
                                  color: `${
                                    activeButton === label ? "#ffff" : "#198754"
                                  }`,
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  fontSize: "1.1rem",
                                  padding: "8px 18px 8px 18px",
                                }}
                              >
                                {label}
                              </Box>
                            }
                            onClick={() => clickedButtonHandler(label)}
                            sx={{
                              backgroundColor: `${
                                activeButton === label ? "#198754" : "#ffff"
                              } `,
                              borderRadius: "15px",
                              marginLeft: "10px",
                            }}
                          />
                        );
                      }
                    )}
                  </Tabs>
                </Grid>
                <Grid item xs={4}>
                  <FormControl
                    sx={{ m: 1, width: "40ch", backgroundColor: "white" }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={values.word}
                      onChange={handleChangeTxt("word")}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          onClick={() => search(values.word)}
                          sx={{ cursor: "pointer" }}
                        >
                          <StyledBoxSearch>
                            <SearchOutlinedIcon />
                          </StyledBoxSearch>
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                      placeholder="Search here"
                    />
                  </FormControl>
                </Grid>
              </StyledNavCourses>{" "}
              <TabPanel value={value} index={0}>
                {!valueSearch ? (
                  currentCourses ? (
                    <CoursesComponent />
                  ) : (
                    <CircularProgress />
                  )
                ) : (
                  <>
                    <Grid item container>
                      {valueSearch.map((course, index) => {
                        return (
                          <Grid
                            item
                            xs={4}
                            key={index}
                            sx={{ margin: "50px 0px 50px 0px" }}
                            // onClick={() => handleCourse(course.id)}
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
                  </>
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid item container>
                  {collection?.collection?(collection?.collection?.map((item, index) => {
                    return (
                      <Grid
                        item
                        xs={4}
                        key={index}
                        sx={{ margin: "50px 0px 50px 0px" }}
                        // onClick={() => handleCourse(course.id)}
                      >
                        <MediaCard
                          imageBase={item.imageBase}
                          author={item.author}
                          imageAuthor={item.imageAuthor}
                          title={item.title}
                          id={item.id}
                          rating={item.rating}
                          // arr={arr}
                        />
                      </Grid>
                    );
                  })):(<><CircularProgress/></>)}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
            </>
          ) : (
            <>
              <StyledNavCourses container item>
                <Grid item xs={12}>
                  <FormControl
                    sx={{ m: 1, width: "90%", backgroundColor: "white" }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={values.weight}
                      onChange={handleChangeTxt("weight")}
                      endAdornment={
                        <InputAdornment position="end">
                          <StyledBoxSearch>
                            <SearchOutlinedIcon />
                          </StyledBoxSearch>
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                      placeholder="Search here"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sx={{ margin: "10px" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{
                      style: { height: "0px" },
                    }}
                  >
                    {["All Courses", "Collections", "Wishlist", "Archived"].map(
                      (label, index) => {
                        return (
                          <Tab
                            key={index}
                            label={
                              <Box
                                component="span"
                                style={{
                                  color: `${
                                    activeButton === label ? "#ffff" : "#198754"
                                  }`,
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  fontSize: "1.1rem",
                                  padding: "8px 18px 8px 18px",
                                }}
                              >
                                {label}
                              </Box>
                            }
                            onClick={() => clickedButtonHandler(label)}
                            sx={{
                              backgroundColor: `${
                                activeButton === label ? "#198754" : "#ffff"
                              } `,
                              borderRadius: "15px",
                              marginLeft: "10px",
                            }}
                          />
                        );
                      }
                    )}
                  </Tabs>
                </Grid>
              </StyledNavCourses>{" "}
              <TabPanel value={value} index={0}>
                {!valueSearch ? (
                  currentCourses ? (
                    <CoursesComponent />
                  ) : (
                    <CircularProgress />
                  )
                ) : (
                  <>
                    <Grid item container>
                      {valueSearch.map((course, index) => {
                        return (
                          <Grid
                            item
                            xs={4}
                            key={index}
                            sx={{ margin: "50px 0px 50px 0px" }}
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
                  </>
                )}
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
            </>
          )}
        </Container>
      </AppContext.Provider>
      :<></>
    </>
  );
};

export default CoursesTab;
