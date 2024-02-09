import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const PassportHolder: FC = () => {
  const [reportType, setReportType] = useState("");

  const handleReportTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("handling radio button change");
    setReportType(event.target.value);
  };

  console.log(reportType);
  const report = {
    reportType: reportType,
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" color="text.primary" mt={5} mb={2}>
            Who is the passport holder?
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="adult"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="adult"
                control={
                  <Radio
                    checked={reportType === "adult"}
                    onChange={handleReportTypeChange}
                  />
                }
                label="You"
              />
              <FormControlLabel
                value="child"
                control={
                  <Radio
                    checked={reportType === "child"}
                    onChange={handleReportTypeChange}
                  />
                }
                label="A child under 16"
              />
              <FormControlLabel
                value="third-party"
                control={
                  <Radio
                    checked={reportType === "third-party"}
                    onChange={handleReportTypeChange}
                  />
                }
                label="Another adult"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            component={Link}
            to="/passport-details"
            state={report}
            variant="contained"
            color="success"
          >
            Continue
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PassportHolder;
