import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ComponentContactSmall from './componentContactSmall';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const NavbarTop = () => {

    return (
        <Box component="div" sx={{ height: "40px", width: "100%", backgroundColor: "#212832", color: "white",marginTop:"0" }}>
          <Container>
            <Grid   container spacing={0} xs={12} sx={{ alignItems:"center" }} >
                <Grid   xs={3} md={3}sx={{ fontSize: "0.8rem" }}>
                    All course 28% off for<Typography variant='span' sx={{color:"#198754"}}>Liberian people’s.</Typography> 
                </Grid>
                <Grid  xs={1} md={1}>
                    <Box component="img" src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-1.png" height="10px"></Box>
                </Grid>
                <Grid  xs={3} md={3}>
                    <ComponentContactSmall contact={"(970) 262-1413"} icon={<LocalPhoneOutlinedIcon />} />

                </Grid>
                <Grid  xs={2} md={3}>
                    <ComponentContactSmall contact={"  address@gmail.com"} icon={<EmailOutlinedIcon />} />

                </Grid>
                <Grid   xs={1} md={1}>
                    <Box component="img" src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-2.png" height="10px"></Box>
                </Grid>

                <Grid  xs={1} md={1} >
                    <Typography
                        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <FacebookIcon
                            sx={{ color: "#ffff", height: "20px", padding: "6px" }}
                        />
                        <TwitterIcon sx={{ color: "#ffff", height: "20px" }} />
                        <InstagramIcon
                            sx={{ color: "#ffff", height: "20px", padding: "6px" }}
                        />
                    </Typography>
                </Grid>
            </Grid>
            </Container>
        </Box>
    );

}

export default NavbarTop;