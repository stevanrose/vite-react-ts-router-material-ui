import { Grid, Typography } from "@mui/material";
import { FC } from "react";

const Error: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" color="text.primary" mt={5} mb={2}>
          Something went wrong!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Error;
