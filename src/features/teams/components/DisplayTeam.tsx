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
import { FC, MouseEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Team } from "../types";
import { getTeam } from "../api/getteam";
import { deleteTeam } from "../api/deleteTeam";

const DisplayTeam: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const [data, setData] = useState<Team>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (id: string) => {
    setLoading(true);
    const team = await getTeam(parseInt(id));
    console.log(`TEAM: ${JSON.stringify(team)} `);
    setData(team);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    deleteTeam(parseInt(id));
    navigate("/teams", { state: { updated: true } });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {loading ? (
          <CircularProgress />
        ) : (
          <Box sx={{ my: 4 }}>
            <Card sx={{ maxWidth: 600 }}>
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  Team details
                </Typography>
                <Typography variant="h5" component="div">
                  Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.name}
                </Typography>
                <Typography variant="h5" component="div">
                  Slug
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.slug}
                </Typography>
                <Typography variant="h5" component="div">
                  Description
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {data?.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleDelete}>
                  Delete team
                </Button>
              </CardActions>
            </Card>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default DisplayTeam;
