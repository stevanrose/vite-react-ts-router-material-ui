import { Grid, Typography, Button, Box, CircularProgress } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCount, getTeams } from "../api/getTeams";
import ListTeams from "./ListTeams";

const Teams: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(25);
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(
    location?.state?.updated ? location.state.updated : false
  );

  const fetchData = async () => {
    setLoading(true);
    const teams = await getTeams(page, rowsPerPage);
    setData(teams);
    const count = await getCount();
    setCount(count);
    setLoading(false);
    setUpdated(false);
  };

  useEffect(() => {
    fetchData();
  }, [updated, page, rowsPerPage]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" color="text.primary" mt={5} mb={2}>
          Teams
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              onClick={() => {
                navigate("create", { state: { updated: updated } });
              }}
            >
              Create team
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ my: 4 }} />
        {loading ? (
          <CircularProgress />
        ) : (
          <ListTeams
            data={data}
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

export default Teams;
