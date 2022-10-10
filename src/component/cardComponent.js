import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";

export default function MediaCard({imageBase,author,imageAuthor,description,complete}) {
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardHeader
        sx={{ position: "absolute", right: "0", margin: "20px" }}
        action={
          <IconButton aria-label="settings" sx={{ backgroundColor: "white" }}>
            <MoreVertIcon />
          </IconButton>
        }
      />
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
          {description}
        </Typography>
        <Typography variant="body2" sx={{ margin: "10px 0px 0px 0px" }}>
          {complete} Complete
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <StarIcon sx={{ color: "#ffba00" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
