import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { StyledButtonNotFound } from "../styled/Button";
import { StyledGridNotFound } from "../styled/Grid";
import { StyledTypographyNotFound,StyledTypographyNotFoundTitle } from "../styled/Typography";

const NotFoundComponent = () => {
    return (
        <Container>
            <Grid container item xs={12} sx={{ margin: "50px 0px 50px 0px " }}>
                <Grid item xs={6} >
                    <Box component="img" src="https://htmldemo.net/edule/eduLe/assets/images/error.png" />
                </Grid>
                <StyledGridNotFound item xs={6} >
                    <StyledTypographyNotFound component="p" variant="body1"> This Page is Not Found.</StyledTypographyNotFound>
                    <StyledTypographyNotFoundTitle component="div" variant="body1"> We are very sorry for error. We
                    <Box component="span" sx={{color:"#198754"}}> can’t find this </Box>page.
                    <Box component="img" src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-4.png" sx={{position:"absolute",marginLeft:"80px"}}/></StyledTypographyNotFoundTitle>
                    <Typography component="div" variant="body1" sx={{color:"#52565B",fontSize:"20px"}}>It has survived not only five centuries but also the leap into electronic typesetting.</Typography>
                    <StyledButtonNotFound sx={{fontWeight:"100"}}>Back to Home</StyledButtonNotFound>

                </StyledGridNotFound>
            </Grid>
        </Container>
    );
};

export default NotFoundComponent;
