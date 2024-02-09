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
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const WhatHappened: FC = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Handling change of radio button");
    setSelected(event.target.value);
  };

  console.log(selected);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" color="text.primary" mt={5} mb={2}>
            What happened to your passport?
          </Typography>
          <Typography variant="h5" color="text.primary" mt={2} mb={2}>
            Was the passport lost or stolen?
          </Typography>
          <Stack spacing={2}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="lost"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="lost"
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 36,
                        },
                      }}
                      checked={selected === "lost"}
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography variant="h5" color="textSecondary">
                      Lost
                    </Typography>
                  }
                />
                <FormControlLabel
                  value="stolen"
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 36,
                        },
                      }}
                      checked={selected === "stolen"}
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography variant="h5" color="textSecondary">
                      Stolen
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              {selected === "lost" && (
                <div>
                  <Typography variant="h6">How did you lose it</Typography>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="lot-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="while-socialising"
                      control={<Radio />}
                      label="While socialising"
                    />
                    <FormControlLabel
                      value="at-home"
                      control={<Radio />}
                      label="At home"
                    />
                    <FormControlLabel
                      value="moving-house"
                      control={<Radio />}
                      label="While moving house"
                    />
                    <FormControlLabel
                      value="travelling"
                      control={<Radio />}
                      label="While travelling"
                    />
                    <FormControlLabel
                      value="dont-know"
                      control={<Radio />}
                      label="I don't know"
                    />
                    <FormControlLabel
                      value="another-reason"
                      control={<Radio />}
                      label="Another reason"
                    />
                  </RadioGroup>
                </div>
              )}

              {selected === "stolen" && (
                <div>
                  <Typography variant="h6">How was it stolen</Typography>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="lot-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="while-socialising"
                      control={<Radio />}
                      label="While socialising"
                    />
                    <FormControlLabel
                      value="mugged-pickpocketed"
                      control={<Radio />}
                      label="Mugged / Pickpocketed"
                    />
                    <FormControlLabel
                      value="home"
                      control={<Radio />}
                      label="From home"
                    />
                    <FormControlLabel
                      value="travelling"
                      control={<Radio />}
                      label="While travelling"
                    />
                    <FormControlLabel
                      value="dont-know"
                      control={<Radio />}
                      label="I don't know"
                    />
                    <FormControlLabel
                      value="another-reason"
                      control={<Radio />}
                      label="Another reason"
                    />
                  </RadioGroup>
                </div>
              )}
              <Typography variant="h5" my={2}>
                Where was the passport lost or stolen?
              </Typography>
              <Typography variant="h5" my={2}>
                City or town
              </Typography>
              <TextField
                id="cityOrTown"
                name="cityOrTown"
                inputProps={{ maxLength: 30 }}
              />
            </FormControl>
            <FormControl>
              <Typography variant="h5" my={2}>
                Country
              </Typography>
              <TextField
                id="country"
                name="country"
                inputProps={{ maxLength: 50 }}
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

export default WhatHappened;
