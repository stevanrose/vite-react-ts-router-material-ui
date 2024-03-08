import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormData } from "../types";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const validationSchema = yup.object({
  reportType: yup.string().required("Please select an option"),
});

const PassportHolder: FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    reportType: "",
    details: {
      passportNumber: "",
      firstNames: "",
      middleNames: "",
      lastName: "",
      yearOfBirth: "",
      monthOfBirth: "",
      dayOfBirth: "",
      townOfBirth: "",
    },
    circumstances: {
      lostOrStolen: "",
      lostOrStolenReason: "",
      cityOrTown: "",
      country: "",
      dayOfLoss: "",
      monthOfLoss: "",
      yearOfLoss: "",
    },
    contactDetails: {
      emailAddress: "",
      confirmEmailAddress: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      reportType: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setFormData((prevState) => ({
        ...prevState,
        reportType: values.reportType,
      }));
      setIsSubmitting(true);
    },
  });

  useEffect(() => {
    console.log(`Form Data: ${JSON.stringify(formData)}`);
    if (isSubmitting) {
      navigate("/lost-stolen/passport-details", {
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
                  Who is the passport holder?
                </Typography>
                <FormControl error={!!formik.errors.reportType}>
                  <RadioGroup
                    name="reportType"
                    value={formik.values.reportType}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      control={<Radio value="adult" />}
                      label="Adult"
                    />
                    <FormControlLabel
                      control={<Radio value="child" />}
                      label="Child"
                    />
                    <FormControlLabel
                      control={<Radio value="third-party" />}
                      label="Third-Party"
                    />
                  </RadioGroup>
                  {formik.errors.reportType ? (
                    <FormHelperText>{formik.errors.reportType}</FormHelperText>
                  ) : null}
                </FormControl>
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
      <Box sx={{ m: 4 }} />
    </form>
  );
};

export default PassportHolder;
