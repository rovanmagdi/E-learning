import React from "react";
import { Container } from "@mui/system";
import { Box, Avatar, Typography, Grid, Item } from "@mui/material";
import RegesterPhotoComponent from "../component/RegesterPhotoComponent";
import RegisterForm from "../component/RegisterForm";

export default function SignupContentComponent() {
  return (
    <>
      <Container
        sx={{
          border: "1px solid rgba(48,146,85,0.2)",
          borderRadius: "10px",
          my: 8,
         
        }}
      >
        <Grid container spacing={2} sx={{ p: 7,}}>
          <Grid
            item
            lg={6}
            md={12}
            sm={12}
            xs={12}
            alignItems="center"
            justifyContent="center"
            flex-direction="column"
          >
            <RegesterPhotoComponent></RegesterPhotoComponent>
           
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12}>
           <RegisterForm></RegisterForm>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
