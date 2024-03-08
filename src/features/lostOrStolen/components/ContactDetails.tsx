import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  FormControl,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormData } from "../types";

const validationSchema = yup.object().shape({
  emailAddress: yup
    .string()
    .email()
    .required("Email address is a required field"),
  confirmEmailAddress: yup
    .string()
    .email()
    .required("Confirm email address is a required field"),
});

const ContactDetails: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>(location.state.formData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      confirmEmailAddress: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("in onSubmit, values: ", values);
      setFormData({
        ...formData,
        contactDetails: {
          ...formData.contactDetails,
          emailAddress: values.emailAddress,
          confirmEmailAddress: values.confirmEmailAddress,
        },
      });
      setIsSubmitting(true);
    },
  });

  useEffect(() => {
    if (isSubmitting) {
      navigate("/lost-stolen/check-your-answers", {
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
                  How to confirm your passport has been cancelled
                </Typography>
                <Stack spacing={2}>
                  <FormControl>
                    <Typography variant="h5" my={2}>
                      Email address
                    </Typography>
                    <TextField
                      id="emailAddress"
                      name="emailAddress"
                      value={formik.values.emailAddress}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.emailAddress &&
                        Boolean(formik.errors.emailAddress)
                      }
                      helperText={
                        formik.touched.emailAddress &&
                        formik.errors.emailAddress
                      }
                    />
                  </FormControl>
                  <FormControl>
                    <Typography variant="h5" my={2}>
                      Confirm email address
                    </Typography>
                    <TextField
                      id="confirmEmailAddress"
                      name="confirmEmailAddress"
                      value={formik.values.confirmEmailAddress}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.confirmEmailAddress &&
                        Boolean(formik.errors.confirmEmailAddress)
                      }
                      helperText={
                        formik.touched.confirmEmailAddress &&
                        formik.errors.confirmEmailAddress
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

export default ContactDetails;
