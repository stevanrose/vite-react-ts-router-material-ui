import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Event } from "../types";
import { getEvents } from "../api/getEvents";
import EventsList from "./EventsList";

const Events: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [updated, setUpdated] = useState<boolean>(
    location?.state?.updated ? location.state.updated : false
  );

  const fetchData = async () => {
    setLoading(true);
    const events = await getEvents();
    setData(events);
    setLoading(false);
    setUpdated(false);
  };

  useEffect(() => {
    console.log("Using Effect");
    fetchData();
  }, [updated]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" color="text.primary" mt={5} mb={2}>
          Events
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              onClick={() => {
                navigate("create", { state: { updated: updated } });
              }}
            >
              Create event
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ my: 4 }} />
        {loading ? <CircularProgress /> : <EventsList events={data} />}
      </Grid>
    </Grid>
  );
};

export default Events;
