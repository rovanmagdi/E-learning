import { Divider, Grid, List, Typography } from '@mui/material';
import React from 'react';
import { StyledListDetailsCourse } from '../styled/Box';

function ListDetailsCourses({icon,nickName,name}) {
    return (
        <>
        <List
              component="h4"
              aria-label="main mailbox folders"
              sx={{ padding: "20px 0px 20px 0px" }}
            >
              <Grid container item xs={12}>
                <Grid item xs={1} sx={{paddingRight:"5px"}}>
                    <StyledListDetailsCourse component="span" >
                        {icon}
               
                    </StyledListDetailsCourse>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" component="span">
                    {nickName}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" component="span">
                   {name}
                  </Typography>
                </Grid>
              </Grid>
            </List>
            <Divider />
        </>
    );
}

export default ListDetailsCourses;