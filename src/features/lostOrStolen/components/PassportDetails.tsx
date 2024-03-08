import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormData } from "../types";

const validationSchema = yup.object({
  passportNumber: yup
    .string()
    .required("Passport number is a required field")
    .matches(/^\d{9}/),
  forenames: yup.string().required("Forenames is a required field"),
  surname: yup.string().required("Surname is a required field"),
  dayOfBirth: yup
    .string()
    .required("Day of birth is a required field")
    .matches(/^[0-9]+$/, "Day of birth must be only digits")
    .max(2, "Day of birth must be no longer than 2 characters"),
  monthOfBirth: yup
    .string()
    .required("Month of birth is a required field")
    .matches(/^[0-9]+$/, "Month of birth must be only digits")
    .max(2, "Month of birth must be no longer than 2 characters"),
  yearOfBirth: yup
    .string()
    .required("Year of birth is a required field")
    .matches(/^[0-9]+$/, "Year of birth must be only digits")
    .max(4, "Year of birth must be no longer than 4 characters"),
  townOfBirth: yup.string().required("Town of birth is a required field"),
});

const PassportDetails: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>(location.state.formData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      passportNumber: "",
      forenames: "",
      middleNames: "",
      surname: "",
      dayOfBirth: "",
      monthOfBirth: "",
      yearOfBirth: "",
      townOfBirth: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setFormData({
        ...formData,
        details: {
          ...formData.details,
          passportNumber: values.passportNumber,
          firstNames: values.forenames,
          middleNames: values.middleNames,
          lastName: values.surname,
          yearOfBirth: values.yearOfBirth,
          monthOfBirth: values.monthOfBirth,
          dayOfBirth: values.dayOfBirth,
          townOfBirth: values.townOfBirth,
        },
      });
      setIsSubmitting(true);
    },
  });

  useEffect(() => {
    console.log(`Form Data: ${JSON.stringify(formData)}`);
    if (isSubmitting) {
      navigate("/lost-stolen/what-happened", {
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
                  Passport details
                </Typography>
                <Stack spacing={2}>
                  <FormControl>
                    <Typography variant="h5" mb={2}>
                      Passport number
                    </Typography>
                    <TextField
                      id="passportNumber"
                      name="passportNumber"
                      value={formik.values.passportNumber}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.passportNumber &&
                        Boolean(formik.errors.passportNumber)
                      }
                      helperText={
                        formik.touched.passportNumber &&
                        formik.errors.passportNumber
                      }
                    ></TextField>
                  </FormControl>

                  <FormControl>
                    <Typography variant="h5" my={2}>
                      First names
                    </Typography>
                    <TextField
                      id="forenames"
                      name="forenames"
                      value={formik.values.forenames}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.forenames &&
                        Boolean(formik.errors.forenames)
                      }
                      helperText={
                        formik.touched.forenames && formik.errors.forenames
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="h5" my={2}>
                      Middle names
                    </Typography>
                    <TextField
                      id="middleNames"
                      name="middleNames"
                      value={formik.values.middleNames}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.middleNames &&
                        Boolean(formik.errors.middleNames)
                      }
                      helperText={
                        formik.touched.middleNames && formik.errors.middleNames
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="h5" my={2}>
                      Last names
                    </Typography>
                    <TextField
                      id="surname"
                      name="surname"
                      value={formik.values.surname}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.surname && Boolean(formik.errors.surname)
                      }
                      helperText={
                        formik.touched.surname && formik.errors.surname
                      }
                    />

                    <FormControl fullWidth={true}>
                      <Typography variant="h5" my={2}>
                        Date of birth
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Grid item xs={2}>
                          <TextField
                            id="dayOfBirth"
                            name="dayOfBirth"
                            size="small"
                            value={formik.values.dayOfBirth}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.dayOfBirth &&
                              Boolean(formik.errors.dayOfBirth)
                            }
                            helperText={
                              formik.touched.dayOfBirth &&
                              formik.errors.dayOfBirth
                            }
                          />
                        </Grid>
                        <Grid item xs={2}>
                          <TextField
                            id="monthOfBirth"
                            name="monthOfBirth"
                            size="small"
                            value={formik.values.monthOfBirth}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.monthOfBirth &&
                              Boolean(formik.errors.monthOfBirth)
                            }
                            helperText={
                              formik.touched.monthOfBirth &&
                              formik.errors.monthOfBirth
                            }
                          />
                        </Grid>
                        <Grid item xs={4}>
                          <TextField
                            id="yearOfBirth"
                            name="yearOfBirth"
                            size="small"
                            value={formik.values.yearOfBirth}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.yearOfBirth &&
                              Boolean(formik.errors.yearOfBirth)
                            }
                            helperText={
                              formik.touched.yearOfBirth &&
                              formik.errors.yearOfBirth
                            }
                          />
                        </Grid>
                      </Stack>
                    </FormControl>
                  </FormControl>
                  <FormControl>
                    <Typography variant="h5" my={2}>
                      Town of birth
                    </Typography>
                    <TextField
                      id="townOfBirth"
                      name="townOfBirth"
                      value={formik.values.townOfBirth}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.townOfBirth &&
                        Boolean(formik.errors.townOfBirth)
                      }
                      helperText={
                        formik.touched.townOfBirth && formik.errors.townOfBirth
                      }
                    />
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

export default PassportDetails;
