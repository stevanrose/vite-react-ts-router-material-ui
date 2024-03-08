import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LostStolen: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" color="text.primary" mt={5} mb={2}>
            Report a Lost or Stolen Passport?
          </Typography>
          <Divider />
          <Box sx={{ my: 4 }} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                onClick={() => navigate("passport-holder")}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
          <Box sx={{ my: 4 }} />
        </Grid>
      </Grid>
    </>
  );
};

export default LostStolen;
