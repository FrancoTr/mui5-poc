import { Container } from "@mui/material/Container";
import { Typography } from "@mui/material";
import React from "react";

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World
      </Typography>
    </Container>
  );
}

export default Tour;
