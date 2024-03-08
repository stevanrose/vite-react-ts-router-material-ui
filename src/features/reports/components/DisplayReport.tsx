import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReport } from "../api/getReport";
import { Report } from "../types";

import dayjs from "dayjs";

const DisplayReport: FC = () => {
  const { id } = useParams() as { id: string };

  console.log(typeof id);

  const [data, setData] = useState<Report>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (id: string) => {
    setLoading(true);
    const report = await getReport(parseInt(id));
    setData(report);
    setLoading(false);
  };

  useEffect(() => {
    console.log("Using Effect");
    fetchData(id);
  }, [id]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* <Typography variant="h4" color="text.primary" mt={5} mb={2}>
          {data?.forenames} {data?.surname}
        </Typography> */}
        {loading ? (
          <CircularProgress />
        ) : (
          <Box sx={{ my: 4 }}>
            <Card sx={{ maxWidth: 600 }}>
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  Report details
                </Typography>
                <Typography variant="h5" component="div">
                  Reference
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.reference}
                </Typography>
                <Typography variant="h5" component="div">
                  Business key
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.businessKey}
                </Typography>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.forenames} {data?.surname}
                </Typography>
                <Typography variant="h5" component="div">
                  Date of birth
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {dayjs(data?.dateOfBirth).format("DD-MM-YYYY")}
                </Typography>
                <Typography variant="h5" component="div">
                  Country of loss
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.countryOfLoss}
                </Typography>
                <Typography variant="h5" component="div">
                  Status
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.status}
                </Typography>
                <Typography variant="h5" component="div">
                  Report type
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.reportType}
                </Typography>
                <Typography variant="h5" component="div">
                  Workstream
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.workStream}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete report</Button>
              </CardActions>
            </Card>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default DisplayReport;
