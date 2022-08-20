import React from "react";
import ImageCollage from "../components/ImageCollage";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
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
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sequi commodi veniam labore
          qui ipsam voluptate sapiente! Quidem rem reiciendis, consequatur voluptates nulla numquam
          temporibus exercitationem excepturi! Ipsam explicabo perferendis veritatis veniam magni,
          praesentium, culpa beatae optio modi suscipit necessitatibus.
        </Typography>
      </Box>
    </Container>
  );
}

export default Tour;
