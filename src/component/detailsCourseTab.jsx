import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CoursesContext } from "./coursesComponent";
import { Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { StyledNavDetailsCourses } from "../styled/Grid";
import TabPanelDetails from "./tabPanelDetails";

function TabPanel(props) {
  const { children, value, index } = props;

  return <>{value === index && <>{children}</>}</>;
}
function DetailsCourseTab(props) {
  const [activeButton, setActiveButton] = React.useState("Description");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const clickedButtonHandler = (name) => {
    setActiveButton(name);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("1199"));

  const state = React.useContext(CoursesContext);

  React.useEffect(() => {
    // console.log(state);
  });
  return (
    <>
      {matches ? (
        <>
          <StyledNavDetailsCourses container item xs={7}>
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
              sx={{ flexWrap: "wrap", maxWidth: "100%", margin: "auto" }}
            >
              {["Description", "Instructors", "Reviews"].map((label, index) => {
                return (
                  <Tab
                    key={index}
                    label={
                      <Box
                        component="span"
                        style={{
                          color: `${activeButton === label ? "#ffff" : "#198754"
                            }`,
                          textTransform: "capitalize",
                          fontWeight: "400",
                          fontSize: "1.1rem",
                          padding: "3px 8px 3px 8px",
                        }}
                      >
                        {label}
                      </Box>
                    }
                    onClick={() => clickedButtonHandler(label)}
                    sx={{
                      backgroundColor: `${activeButton === label ? "#198754" : "#ffff"
                        } `,
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  />
                );
              })}
            </Tabs>
          </StyledNavDetailsCourses>{" "}
          <TabPanel value={value} index={0}>
            <TabPanelDetails
              title="Description: "
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularsed in the 1960 with release containing Lorem Ipsum
                passages desktop publishing software."
            />
            <TabPanelDetails
              title="Curriculum:"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. "
            />{" "}
            <TabPanelDetails
              title="Certification:"
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. "
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </>
      ) : (
        <Container>
          <StyledNavDetailsCourses container item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto"
              TabIndicatorProps={{
                style: { height: "0px" },
              }}
              sx={{ flexWrap: "wrap", maxWidth: "100%", margin: "auto" }}
            >
              {["Description", "Instructors", "Reviews"].map((label, index) => {
                return (
                  <Tab
                    key={index}
                    label={
                      <Box
                        component="span"
                        style={{
                          color: `${activeButton === label ? "#ffff" : "#198754"
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
                      backgroundColor: `${activeButton === label ? "#198754" : "#ffff"
                        } `,
                      borderRadius: "15px",
                      marginLeft: "10px",
                    }}
                  />
                );
              })}
            </Tabs>
          </StyledNavDetailsCourses>{" "}
          <TabPanel value={value} index={0}>
            <TabPanelDetails
              title="Description: "
              description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularsed in the 1960 with release containing Lorem Ipsum
                passages desktop publishing software."
            />
          </TabPanel>
          <TabPanelDetails
            title="Curriculum:"
            description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. "
          />{" "}
          <TabPanelDetails
            title="Certification:"
            description=" Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. "
          />
          <TabPanel value={value} index={1}></TabPanel>
          <TabPanel value={value} index={2}></TabPanel>
        </Container>
      )}
    </>
  );
}

export default DetailsCourseTab;
