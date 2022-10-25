import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import {   useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

function TabPanelDetails({title,description}) {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("976"));

    return (
        <>
        {matches?<Grid container item xs={7}>
              <Typography
                variant="body2"
                component="h1"
                sx={{
                  fontSize: "1.7rem",
                  fontWeight: "600",
                  margin: "20px 0px 20px 0px",
                }}
              >
                {title}
              </Typography>
              <Box sx={{ fontWeight: 'light',fontSize:"18px"}}>
               {description}
              </Box>
            </Grid>:
            <Container><Grid container item xs={12}>
              <Typography
                variant="body2"
                component="h1"
                sx={{
                  fontSize: "1.7rem",
                  fontWeight: "600",
                  margin: "20px 0px 20px 0px",
                }}
              >
                {title}
              </Typography>
              <Box sx={{ fontWeight: 'light',fontSize:"18px"}}>
               {description}
              </Box>
            </Grid>
              </Container>
              }
        
        </>
    );
}

export default TabPanelDetails;