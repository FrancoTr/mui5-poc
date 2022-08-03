import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          src="https://cdn.pixabay.com/photo/2016/08/13/07/20/niagara-1590345_960_720.jpg"
          alt="niagara falls"
        />
      </Paper>
    </Grid>
  );
};

export default TourCard;
