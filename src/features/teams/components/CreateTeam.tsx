import { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as yup from "yup";
import { CreateTeamDto } from "../types";
import { useFormik } from "formik";
import { createTeam } from "../api/createTeam";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@mui/material";

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Team name is a required field")
    .min(2, "Team name must be at least 2 characters")
    .max(30, "Team name must be no longer than 30 characters"),
  description: yup
    .string()
    .required("Team description is a required field")
    .min(2, "Team description must be at least 2 characters")
    .max(150, "Team description must be no longer than 150 characters"),
});

const CreateTeam: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Handling submit");
      const createTeamDto: CreateTeamDto = {
        name: values.name,
        description: values.description,
      };

      console.log("Posting to API: ", JSON.stringify(createTeamDto, null, 2));
      createTeam(createTeamDto);
      location.state.updated = true;
      navigate("/teams", { state: { updated: true } });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ my: 4 }}>
            <Card sx={{ maxWidth: 600 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Create a report
                </Typography>
                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Name
                  </Typography>
                  <TextField
                    id="name"
                    name="name"
                    size="small"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </FormControl>

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Description
                  </Typography>
                  <TextField
                    id="description"
                    name="description"
                    size="small"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                  />
                </FormControl>
                <Box sx={{ my: 4 }} />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button type="submit" variant="contained">
                      Continue
                    </Button>
                  </Grid>
                </Grid>
                <Box sx={{ my: 4 }} />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateTeam;
