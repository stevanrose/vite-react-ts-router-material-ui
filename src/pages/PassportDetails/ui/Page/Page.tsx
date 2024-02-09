import { FC } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers";

import ReportProperties from "../../../../types/ReportProperties";

const PassportDetails: FC<ReportProperties> = ({ report }) => {
  console.log("Report: ", report);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" color="text.primary" mt={5} mb={2}>
            Lost and stolen passport details
          </Typography>
          <Stack spacing={2}>
            <FormControl>
              <Typography variant="h5" mb={2}>
                Passport number
              </Typography>
              <TextField
                id="passportNumber"
                name="passportNumber"
                inputProps={{ maxLength: 9 }}
              ></TextField>
            </FormControl>
            <FormControl>
              <Typography variant="h5" my={2}>
                First names
              </Typography>
              <TextField
                id="firstNames"
                name="firstNames"
                inputProps={{ maxLength: 30 }}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h5" my={2}>
                Middle names
              </Typography>
              <TextField
                id="middleNames"
                name="middleNames"
                inputProps={{ maxLength: 30 }}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h5" my={2}>
                Last names
              </Typography>
              <TextField
                id="lastNames"
                name="lasrNames"
                inputProps={{ maxLength: 30 }}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h5" my={2}>
                Date of birth
              </Typography>
              <DatePicker name="dateOfBirth" />
            </FormControl>
            <FormControl>
              <Typography variant="h5" my={2}>
                Town of birth
              </Typography>
              <TextField
                id="townOfBirth"
                name="townOfBirth"
                inputProps={{ maxLength: 30 }}
              />
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            component={Link}
            to="/what-happened"
            variant="contained"
            color="success"
          >
            Continue
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }} />
    </div>
  );
};

export default PassportDetails;
