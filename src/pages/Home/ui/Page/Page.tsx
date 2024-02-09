import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Home: FC = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" color="text.primary" mt={5} mb={2}>
            Cancel a lost or stolen passport
          </Typography>
          <Typography variant="subtitle1" color="text.primary" mb={5}>
            You must report a lost or stolen passport as soon as possible so
            that it can be cancelled. This will reduce the risk of anyone else
            using your passport or your identity.
          </Typography>
          <Typography variant="h5" color="text.primary" mt={5} mb={2}>
            Reporting on behalf of someone else
          </Typography>
          <Typography variant="subtitle1" color="text.primary" mb={5}>
            You can report a lost or stolen passport on behalf of someone else
            if they can’t do it themselves.
          </Typography>
          <Button
            component={Link}
            to="/passport-holder"
            variant="contained"
            color="success"
            endIcon={<ArrowForwardIosRoundedIcon />}
          >
            Start now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
