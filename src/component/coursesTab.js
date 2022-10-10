import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CoursesComponent from "./coursesComponent";
import { Container } from "@mui/system";
import { FormControl, Grid, OutlinedInput, useMediaQuery } from "@mui/material";
import { StyledNavCourses } from "../styled/Grid";

import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { StyledBoxSearch } from "../styled/Box";
import { useTheme } from "@emotion/react";
function TabPanel(props) {
  const { children, value, index } = props;

  return <>{value === index && <>{children}</>}</>;
}

const CoursesTab = () => {
  const [activeButton, setActiveButton] = React.useState("All Courses");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeTxt = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const clickedButtonHandler = (name) => {
    setActiveButton(name);
  };

  const [values, setValues] = React.useState({

    weight: "",
  
  });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("1199"));

  return (
    <Container>
      {matches?(<> <StyledNavCourses container item xs={12}>
        <Grid item xs={8}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { height: "0px" }, sx: { display: 'none' } 
            }}
            variant="scrollable"
          scrollButtons="auto"
            sx={{ flexWrap: 'wrap',}}
           
          
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
                      marginLeft:"10px"
                    }}
                  />
                );
              }
            )}
          </Tabs>
        </Grid>
        <Grid item xs={4}>
          <FormControl sx={{ m: 1, width: "40ch" ,backgroundColor:"white"}} variant="outlined">
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
      </StyledNavCourses>{" "}
      <TabPanel value={value} index={0}>
        <CoursesComponent />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel></>):(<>
        <StyledNavCourses container item ><Grid item xs={12}>
          <FormControl sx={{ m: 1, width: "90%" ,backgroundColor:"white"}} variant="outlined">
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
        <Grid item xs={12} sx={{margin:"10px"}}>
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
                        activeButton === label ?"#198754" : "#ffff"
                      } `,
                      borderRadius: "15px",marginLeft:"10px"
                    }}
                  />
                );
              }
            )}
          </Tabs>
        </Grid>
        
      </StyledNavCourses>{" "}
      <TabPanel value={value} index={0}>
        <CoursesComponent />
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
      </>)}
     
    </Container>
  );
};

export default CoursesTab;
