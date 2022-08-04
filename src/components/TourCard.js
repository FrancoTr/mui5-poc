import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://cdn.pixabay.com/photo/2016/08/13/07/20/niagara-1590345_960_720.jpg"
          alt="niagara falls"
          className="img"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into the Falls
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
