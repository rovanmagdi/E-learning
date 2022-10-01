import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { StyledButtonDrawar } from "../styled/Button";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function TemporaryDrawer({ anchor }) {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "15px" }}
            >
                <LocalPhoneOutlinedIcon sx={{ color: "#198754", height: "20px" }} />

                <Box component="span" sx={{ marginLeft: "10px", fontSize: "0.8rem" }}>
                    (970) 262-1413
                </Box>
            </Typography>

            <Typography
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <EmailOutlinedIcon sx={{ color: "#198754", height: "20px" }} />
                <Box component="span" sx={{ marginLeft: "10px", fontSize: "0.8rem" }}>
                    address@gmail.com
                </Box>
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>

                <StyledButtonDrawar >Sign in </StyledButtonDrawar>
                <StyledButtonDrawar >Sign out </StyledButtonDrawar>



            </Box>
            <List>
                <Divider />
            </List>
            <List >
                {["Home", "All Courses", "Pages", "Blog", "Contact"].map(
                    (text, index) => (
                        <Box>
                            <ListItem key={text} disablePadding>
                                <ListItemButton sx={{ height: "23px" }}>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                            <List>
                                <Divider />
                            </List>
                        </Box>
                    )
                )}
            </List>
            <Typography
                sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                <FacebookIcon sx={{ color: "#262626", height: "20px",padding:"15px" }} />
                <TwitterIcon sx={{ color: "#262626", height: "20px"}} />
                <InstagramIcon sx={{ color: "#262626", height: "20px",padding:"15px" }} />
             

                
            </Typography>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                    <MenuIcon sx={{ width: "100px", height: "40px" }} />
                </Button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
