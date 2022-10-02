import { LocalPhoneOutlined } from "@mui/icons-material";
import { Stack, Grid, Link, Box,Typography } from "@mui/material";

import React from "react";
import { StyledFooter, StyledFooterImage } from "../styled/Footer";
import ComponentContactSmall from "./componentContactSmall";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterImage
        component="img"
        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-21.png"
      />
      <Grid container spacing={2} sx={{ width: "800px", margin: "auto" }}>
        <Grid item xs={4}>

          <Link
            component="img"
            src="https://htmldemo.net/edule/eduLe/assets/images/logo.png"
            sx={{ width: "180px", height: "40px", marginBottom: "25px" }}
          />

          <Stack sx={{ marginBottom: "18px" }}>
            <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
              Caribbean Ct
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>
              Haymarket, Virginia (VA).{" "}
            </Typography>
          </Stack>

          <Stack>
            <ComponentContactSmall
              contact={"(970) 262-1413"}
              icon={<LocalPhoneOutlined />}
            />
            <ComponentContactSmall
              contact={"  address@gmail.com"}
              icon={<EmailOutlinedIcon />}
            />
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{paddingBottom:"25px"}}>Category</Typography>
          <Box sx={{ width: '100%', maxWidth: 360 }}>
    
      
        <List>
           {["Creative Writing","Film & Video"].map((page,index)=>
           {
            return (<ListItem disablePadding key={index}>
            <ListItemButton sx={{fontSize:"15px"}}>
              <ListItemText primary={page}  />
            </ListItemButton>
          </ListItem>)

           })}
          
          
        </List>
    
    </Box>
        </Grid>
        <Grid item xs={3}>
          1
        </Grid>
        <Grid item xs={3}>
          1
        </Grid>
      </Grid>
      {/* <StyledFooterImage
        component="img"
        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-22.png"
        sx={{ left: "100px" }}
      /> */}
    </StyledFooter>
  );
};

export default Footer;
