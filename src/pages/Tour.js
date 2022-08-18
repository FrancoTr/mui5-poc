import React from "react";
import ImageCollage from "../components/ImageCollage";
import Box from "@mui/material/Box";
import { Container } from "@mui/material/Container";
import { Typography } from "@mui/material";

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jps"
          alt="las vegas"
          height={325}
        />
        <ImageCollage />
      </Box>
    </Container>
  );
}

export default Tour;
