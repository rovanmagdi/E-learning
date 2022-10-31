import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import {  Grid } from "@mui/material";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";
import { StyledCardCourse } from "../styled/Card";
import axios from "axios";
import { useNavigate } from "react-router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";



const ITEM_HEIGHT = 48;

export default function MediaCard({
  id,
  imageBase,
  author,
  imageAuthor,
  title,
  rating,
  arr,
}) {
  const handleChange = async (event, id) => {
    console.log(event);

    const response = await axios
      .patch(`http://localhost:3200/courses/${id}`, { rating: event })
      .catch((error) => console.log("Error: ", error));
    if (response && response.data) {
      console.log(response.data);
    }
  };
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log("click :", id);
    navigate(`/${id}`);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // let obj = { id, imageBase, author, imageAuthor, title, rating };
  //  const abc= [...inputArr,[]];
  //  setInputArr(abc)


  

  const handleAddCollection = (id) => {
    let obj = { id, imageBase, author, imageAuthor, title, rating };
    !arr[obj.id] && arr.push(obj);
    console.log(arr);
   
      const response = axios
        .patch(
          `http://localhost:3200/users/${
            JSON.parse(localStorage.getItem("user")).id
          }`,
          { collection: arr }
        )
        .catch((error) => console.log("Error: ", error));
      if (response && response.data) {
        console.log(response.data);
      }
   
  };

  return (
    <StyledCardCourse>
      <CardHeader
        sx={{ position: "absolute", right: "0", margin: "20px" }}
        action={
          <IconButton
            sx={{ backgroundColor: "white" }}
            onClick={handleClickDropDown}
            // aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
          >
            <MoreVertIcon />
          </IconButton>
        }
      />
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
            backgroundColor: "rgba(48,146,85,0.9)",
            left: "",
          },
        }}
      >
        <MenuItem
          sx={{ color: "white" }}
          selected={"collection".bool}
          onClick={() => handleAddCollection(id)}
        >
          Collection
        </MenuItem>
      </Menu>

      <Box component="div" onClick={() => handleClick(id)}>
        <CardMedia
          sx={{
            height: "180px",
            width: "90%",
            margin: "20px 20px 5px 20px",
            borderRadius: "10px",
          }}
          component="img"
          image={imageBase}
          alt="Paella dish"
        />
        <CardContent>
          <Grid
            container
            item
            xs={12}
            sx={{ alignItems: "center", marginBottom: "15px" }}
          >
            <Grid item xs={3}>
              <Box
                component="img"
                src={imageAuthor}
                sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                {author}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            {/* <StarIcon sx={{ color: "#ffba00" }} />
             */}
            <Rating
              name="simple-controlled"
              value={Number(rating)}
              onChange={(event) => {
                handleChange(event.target.value, id);
              }}
            />
          </IconButton>
        </CardActions>
      </Box>
    </StyledCardCourse>
  );
}
