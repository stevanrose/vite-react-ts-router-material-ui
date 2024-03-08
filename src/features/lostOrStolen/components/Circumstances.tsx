import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormData } from "../types";
import { useEffect } from "react";

const validationSchema = yup.object({
  lostOrStolen: yup.string().required("Please select an option"),
  lostOrStolenReason: yup.string().required("Please select an option"),
  cityOrTown: yup.string().required("City or town is a required field"),
  country: yup.string().required("Country is a required field"),
  dayOfLoss: yup
    .string()
    .required("Day of loss is a required field")
    .matches(/^[0-9]+$/, "Day of loss must be only digits")
    .max(2, "Day of loss must be no longer than 2 characters"),
  monthOfLoss: yup
    .string()
    .required("Month of loss is a required field")
    .matches(/^[0-9]+$/, "Month of loss must be only digits")
    .max(2, "Month of loss must be no longer than 2 characters"),
  yearOfLoss: yup
    .string()
    .required("Year of loss is a required field")
    .matches(/^[0-9]+$/, "Year of loss must be only digits")
    .max(4, "Year of loss must be no longer than 4 characters"),
});

const Circumstances: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>(location.state.formData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      lostOrStolen: "",
      lostOrStolenReason: "",
      cityOrTown: "",
      country: "",
      dayOfLoss: "",
      monthOfLoss: "",
      yearOfLoss: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("in onSubmit, values: ", values);
      setFormData({
        ...formData,
        circumstances: {
          ...formData.circumstances,
          lostOrStolen: values.lostOrStolen,
          lostOrStolenReason: values.lostOrStolenReason,
          cityOrTown: values.cityOrTown,
          country: values.country,
          dayOfLoss: values.dayOfLoss,
          monthOfLoss: values.monthOfLoss,
          yearOfLoss: values.yearOfLoss,
        },
      });

      setIsSubmitting(true);
    },
  });

  useEffect(() => {
    if (isSubmitting) {
      navigate("/lost-stolen/contact-details", {
        state: { formData: formData },
      });
    }
  }, [isSubmitting]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ my: 4 }}>
            <Card sx={{ maxWidth: 600 }}>
              <CardContent>
                <Typography variant="h4" color="text.primary" mt={5} mb={2}>
                  What happened to your passport
                </Typography>

                <Stack spacing={2}>
                  <FormControl error={!!formik.errors.lostOrStolen}>
                    <RadioGroup
                      row
                      name="lostOrStolen"
                      value={formik.values.lostOrStolen}
                      onChange={formik.handleChange}
                    >
                      <FormControlLabel
                        control={<Radio value="lost" />}
                        label={
                          <Typography variant="h5" color="textSecondary">
                            Lost
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={<Radio value="stolen" />}
                        label={
                          <Typography variant="h5" color="textSecondary">
                            Stolen
                          </Typography>
                        }
                      />
                    </RadioGroup>
                    {formik.errors.lostOrStolen ? (
                      <FormHelperText>
                        {formik.errors.lostOrStolen}
                      </FormHelperText>
                    ) : null}
                  </FormControl>

                  <FormControl>
                    {formik.values.lostOrStolen === "lost" && (
                      <div>
                        <Typography variant="h5">
                          How did you lose it
                        </Typography>
                        <RadioGroup
                          name="lostOrStolenReason"
                          value={formik.values.lostOrStolenReason}
                          onChange={formik.handleChange}
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

                    {formik.values.lostOrStolen === "stolen" && (
                      <div>
                        <Typography variant="h5">How was it stolen</Typography>
                        <RadioGroup
                          name="lostOrStolenReason"
                          value={formik.values.lostOrStolenReason}
                          onChange={formik.handleChange}
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
                    <Typography variant="h6" my={2}>
                      City or town
                    </Typography>
                    <TextField
                      id="cityOrTown"
                      name="cityOrTown"
                      value={formik.values.cityOrTown}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.cityOrTown &&
                        Boolean(formik.errors.cityOrTown)
                      }
                      helperText={
                        formik.touched.cityOrTown && formik.errors.cityOrTown
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="h6" my={2}>
                      Country
                    </Typography>
                    <TextField
                      id="country"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.country && Boolean(formik.errors.country)
                      }
                      helperText={
                        formik.touched.country && formik.errors.country
                      }
                    />
                  </FormControl>

                  <FormControl fullWidth={true}>
                    <Typography variant="h5" my={2}>
                      When was the passport lost or stolen
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Grid item xs={2}>
                        <TextField
                          id="dayOfLoss"
                          name="dayOfLoss"
                          size="small"
                          value={formik.values.dayOfLoss}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.dayOfLoss &&
                            Boolean(formik.errors.dayOfLoss)
                          }
                          helperText={
                            formik.touched.dayOfLoss && formik.errors.dayOfLoss
                          }
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          id="monthOfLoss"
                          name="monthOfLoss"
                          size="small"
                          value={formik.values.monthOfLoss}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.monthOfLoss &&
                            Boolean(formik.errors.monthOfLoss)
                          }
                          helperText={
                            formik.touched.monthOfLoss &&
                            formik.errors.monthOfLoss
                          }
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="yearOfLoss"
                          name="yearOfLoss"
                          size="small"
                          value={formik.values.yearOfLoss}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.yearOfLoss &&
                            Boolean(formik.errors.yearOfLoss)
                          }
                          helperText={
                            formik.touched.yearOfLoss &&
                            formik.errors.yearOfLoss
                          }
                        />
                      </Grid>
                    </Stack>
                  </FormControl>
                </Stack>

                <Box sx={{ m: 4 }} />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button type="submit" variant="contained">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};
export default Circumstances;
