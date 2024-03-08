import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCount, getReports } from "../api/getReports";
import { Grid, Typography, Button, Box, CircularProgress } from "@mui/material";
import { Report } from "../types";
import ReportsList from "./ReportsList";

const Reports: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(25);
  const [count, setcount] = useState<number>(0);

  const [data, setData] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(
    location?.state?.updated ? location.state.updated : false
  );

  const fetchData = async () => {
    setLoading(true);
    const reports = await getReports(page, rowsPerPage);
    setData(reports);
    const count = await getCount();
    setcount(count);
    setLoading(false);
    setUpdated(false);
  };

  useEffect(() => {
    console.log("Using Effect");
    fetchData();
  }, [updated, page, rowsPerPage]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" color="text.primary" mt={5} mb={2}>
          Reports
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              onClick={() => {
                navigate("create", { state: { updated: updated } });
              }}
            >
              Create report
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ my: 4 }} />
        {loading ? (
          <CircularProgress />
        ) : (
          <ReportsList
            reports={data}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            count={count}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Reports;
