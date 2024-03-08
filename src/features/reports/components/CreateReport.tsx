import { useFormik } from 'formik';
import { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { CreateReportData } from '../types';
import { createReport } from '../api/createReport';
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
} from '@mui/material';

import { v4 as uuid } from 'uuid';

enum Statuses {
  ready = 'ready',
  complete = 'complete',
}

enum ReportTypes {
  adult = 'Adult',
  child = 'Child',
  thirdParty = 'Third-Party',
}

enum WorkStreams {
  central = 'Central',
  tp = 'TP',
}

const validationSchema = yup.object({
  reference: yup
    .string()
    .required('Lost stolen reference is a required field')
    .matches(/^L\d{9}/),
  forenames: yup
    .string()
    .required('Forenames is a required field')
    .min(2, 'Forenames must be at least 2 characters')
    .max(30, 'Forenames must be no longer than 30 characters'),
  surname: yup
    .string()
    .required('Surname is a required field')
    .min(2, 'Surname must be at least 2 characters')
    .max(30, 'Surname must be no longer than 30 characters'),
  dayOfBirth: yup
    .string()
    .required('Day of birth is a required field')
    .matches(/^[0-9]+$/, 'Day of birth must be only digits')
    .max(2, 'Day of birth must be no longer than 2 characters'),
  monthOfBirth: yup
    .string()
    .required('Month of birth is a required field')
    .matches(/^[0-9]+$/, 'Month of birth must be only digits')
    .max(2, 'Month of birth must be no longer than 2 characters'),
  yearOfBirth: yup
    .string()
    .required('Year of birth is a required field')
    .matches(/^[0-9]+$/, 'Year of birth must be only digits')
    .max(4, 'Year of birth must be no longer than 4 characters'),
  countryOfLoss: yup
    .string()
    .required('Country of loss is a required field')
    .min(2, 'Country of loss must be at least 2 characters')
    .max(30, 'Country of loss must be no longer than 30 characters'),
  status: yup
    .mixed<Statuses>()
    .oneOf(Object.values(Statuses))
    .required('Status is a required field'),
  reportType: yup
    .mixed<ReportTypes>()
    .oneOf(Object.values(ReportTypes))
    .required('Report type is a required field'),
  workStream: yup
    .mixed<WorkStreams>()
    .oneOf(Object.values(WorkStreams))
    .required('Workstream is a required field'),
  metaData: yup.string().required('Meta data is a required field'),
  reportData: yup.string().required('Report data is a required field'),
});

const CreateReport: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      reference: '',
      forenames: '',
      surname: '',
      dayOfBirth: '',
      monthOfBirth: '',
      yearOfBirth: '',
      countryOfLoss: '',
      status: '',
      reportType: '',
      workStream: '',
      metaData: '',
      reportData: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Handling submit');
      const createReportData: CreateReportData = {
        reference: values.reference,
        businessKey: uuid(),
        forenames: values.forenames,
        surname: values.surname,
        dateOfBirth: new Date(
          parseInt(values.yearOfBirth),
          parseInt(values.monthOfBirth),
          parseInt(values.dayOfBirth)
        ),
        countryOfLoss: values.countryOfLoss,
        status: values.status,
        reportType: values.reportType,
        workStream: values.workStream,
        metaData: JSON.parse(values.metaData),
        reportData: JSON.parse(values.reportData),
      };

      console.log(
        'Posting to API: ',
        JSON.stringify(createReportData, null, 2)
      );
      createReport(createReportData);
      location.state.updated = true;
      navigate('/reports', { state: { updated: true } });
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
                    Reference
                  </Typography>
                  <TextField
                    id="reference"
                    name="reference"
                    size="small"
                    value={formik.values.reference}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.reference &&
                      Boolean(formik.errors.reference)
                    }
                    helperText={
                      formik.touched.reference && formik.errors.reference
                    }
                  />
                </FormControl>

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Forenames
                  </Typography>
                  <TextField
                    id="forenames"
                    name="forenames"
                    size="small"
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

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Surname
                  </Typography>
                  <TextField
                    id="surname"
                    name="surname"
                    size="small"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.surname && Boolean(formik.errors.surname)
                    }
                    helperText={formik.touched.surname && formik.errors.surname}
                  />
                </FormControl>

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
                          formik.touched.dayOfBirth && formik.errors.dayOfBirth
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

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Country of loss
                  </Typography>
                  <TextField
                    size="small"
                    id="countryOfLoss"
                    name="countryOfLoss"
                    value={formik.values.countryOfLoss}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.countryOfLoss &&
                      Boolean(formik.errors.countryOfLoss)
                    }
                    helperText={
                      formik.touched.countryOfLoss &&
                      formik.errors.countryOfLoss
                    }
                  />
                </FormControl>

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Status
                  </Typography>
                  <TextField
                    id="status"
                    name="status"
                    size="small"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.status && Boolean(formik.errors.status)
                    }
                    helperText={formik.touched.status && formik.errors.status}
                  />
                </FormControl>

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Report type
                  </Typography>
                  <TextField
                    id="reportType"
                    name="reportType"
                    size="small"
                    value={formik.values.reportType}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.reportType &&
                      Boolean(formik.errors.reportType)
                    }
                    helperText={
                      formik.touched.reportType && formik.errors.reportType
                    }
                  />
                </FormControl>

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Workstream
                  </Typography>
                  <TextField
                    id="workStream"
                    name="workStream"
                    size="small"
                    value={formik.values.workStream}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.workStream &&
                      Boolean(formik.errors.workStream)
                    }
                    helperText={
                      formik.touched.workStream && formik.errors.workStream
                    }
                  />
                </FormControl>

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Meta data
                  </Typography>
                  <TextField
                    id="metaData"
                    name="metaData"
                    multiline
                    maxRows={Infinity}
                    size="small"
                    value={formik.values.metaData}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.metaData && Boolean(formik.errors.metaData)
                    }
                    helperText={
                      formik.touched.metaData && formik.errors.metaData
                    }
                  />
                </FormControl>

                <FormControl fullWidth={true}>
                  <Typography variant="h5" my={2}>
                    Report data
                  </Typography>
                  <TextField
                    id="reportData"
                    name="reportData"
                    multiline
                    maxRows={Infinity}
                    size="small"
                    value={formik.values.reportData}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.reportData &&
                      Boolean(formik.errors.reportData)
                    }
                    helperText={
                      formik.touched.reportData && formik.errors.reportData
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

export default CreateReport;
