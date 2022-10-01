import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ComponentContactSmall({ contact, icon }) {
  return (
    <Typography
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography sx={{ color: "#198754", paddingTop: "5px" }}>
        {icon}
      </Typography>
      <Box
        component="span"
        sx={{
          marginLeft: "10px",
          fontSize: "0.8rem",
          "&:hover": {
            color: "#198754",
          },
        }}
      >
        {contact}
      </Box>
    </Typography>
  );
}

export default ComponentContactSmall;
