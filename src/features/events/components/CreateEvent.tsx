import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CreateEventData } from "../types";
import { createEvent } from "../api/createEvent";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Event Name is a required field")
    .min(2, "Event Name must be at least 2 characters")
    .max(30, "Event Name must be no longer than 30 characters"),
  businessKey: yup
    .string()
    .uuid("Business Key must be a valid UUID")
    .required("Business Key is a required field"),
  userId: yup
    .string()
    .required("User ID is a required field")
    .min(5, "User ID must be at least 5 characters")
    .max(10, "User ID must be no longer than 10 characters"),
  serviceName: yup
    .string()
    .required("Service name is a required field")
    .min(5, "Service name must be at least 5 characters")
    .max(10, "Service name must be no longer than 30 characters"),
  reportId: yup
    .number()
    .integer("Report id must be a positive integer")
    .required("Report id is a required field")
    .min(100000000, "Report id must be greater than 100000000")
    .max(1000000000, "Report id must be less than than 10000000000"),
  userData: yup.string().required("User data is a required field"),
  eventData: yup.string().required("Event data is a required field"),
  tags: yup.string().required("Tags is a required field"),
});

const CreateEvent: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      name: "",
      businessKey: "",
      userId: "",
      serviceName: "",
      reportId: "",
      userData: "",
      eventData: "",
      tags: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const createEventData: CreateEventData = {
        businessKey: values.businessKey,
        name: values.name,
        userId: values.userId,
        serviceName: values.serviceName,
        reportId: parseInt(values.reportId),
        userData: JSON.parse(values.userData),
        eventData: JSON.parse(values.eventData),
        tags: JSON.parse(values.tags),
      };
      console.log("Posting to API: ", JSON.stringify(createEventData, null, 2));
      createEvent(createEventData);
      location.state.updated = true;
      navigate("/events", { state: { updated: true } });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" color="text.primary" mt={5} mb={2}>
            Create an event
          </Typography>
          <Stack spacing={2}>
            <FormControl>
              <Typography variant="h5" my={2}>
                Business key
              </Typography>
              <TextField
                id="businessKey"
                name="businessKey"
                value={formik.values.businessKey}
                onChange={formik.handleChange}
                error={
                  formik.touched.businessKey &&
                  Boolean(formik.errors.businessKey)
                }
                helperText={
                  formik.touched.businessKey && formik.errors.businessKey
                }
              />
            </FormControl>

            <FormControl>
              <Typography variant="h5" my={2}>
                Event name
              </Typography>
              <TextField
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h5" my={2}>
                User id
              </Typography>
              <TextField
                id="userId"
                name="userId"
                value={formik.values.userId}
                onChange={formik.handleChange}
                error={formik.touched.userId && Boolean(formik.errors.userId)}
                helperText={formik.touched.userId && formik.errors.userId}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h5" my={2}>
                Service name
              </Typography>
              <TextField
                id="serviceName"
                name="serviceName"
                value={formik.values.serviceName}
                onChange={formik.handleChange}
                error={
                  formik.touched.serviceName &&
                  Boolean(formik.errors.serviceName)
                }
                helperText={
                  formik.touched.serviceName && formik.errors.serviceName
                }
              />
            </FormControl>

            <FormControl>
              <Typography variant="h5" my={2}>
                Report id
              </Typography>
              <TextField
                id="reportId"
                name="reportId"
                value={formik.values.reportId}
                onChange={formik.handleChange}
                error={
                  formik.touched.reportId && Boolean(formik.errors.reportId)
                }
                helperText={formik.touched.reportId && formik.errors.reportId}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h5" my={2}>
                User data
              </Typography>
              <TextField
                id="userData"
                name="userData"
                value={formik.values.userData}
                onChange={formik.handleChange}
                error={
                  formik.touched.userData && Boolean(formik.errors.userData)
                }
                helperText={formik.touched.userData && formik.errors.userData}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h5" my={2}>
                Event data
              </Typography>
              <TextField
                id="eventData"
                name="eventData"
                value={formik.values.eventData}
                onChange={formik.handleChange}
                error={
                  formik.touched.eventData && Boolean(formik.errors.eventData)
                }
                helperText={formik.touched.eventData && formik.errors.eventData}
              />
            </FormControl>

            <FormControl>
              <Typography variant="h5" my={2}>
                Tags
              </Typography>
              <TextField
                id="tags"
                name="tags"
                value={formik.values.tags}
                onChange={formik.handleChange}
                error={formik.touched.tags && Boolean(formik.errors.tags)}
                helperText={formik.touched.tags && formik.errors.tags}
              />
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button type="submit" variant="contained" color="success">
            Continue
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ my: 4 }} />
    </form>
  );
};

export default CreateEvent;
