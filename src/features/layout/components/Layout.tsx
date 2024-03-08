import { FC, useState } from "react";
import { Outlet, useOutletContext, useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb";

import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material";
import { LostStolenForm } from "../../lostOrStolen/types";

const defaultTheme = createTheme();

type ContextType = { lostStolenForm: LostStolenForm | null };

export function useLostStolenForm() {
  return useOutletContext<ContextType>();
}

const Layout: FC = () => {
  const navigate = useNavigate();
  const [lostStolenForm, setLostStolenForm] = useState<LostStolenForm | null>(
    null
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <Container maxWidth="lg">
          <Grid item xs={8} mt={5}>
            <Grid container spacing={2}>
              <AppBar position="static" color="primary">
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    React with Vite, react-router, and Material UI
                  </Typography>
                  <Button
                    color="inherit"
                    onClick={() => navigate("lost-stolen")}
                  >
                    LOST OR STOLEN
                  </Button>
                  <Button color="inherit" onClick={() => navigate("reports")}>
                    REPORTS
                  </Button>
                  <Button color="inherit" onClick={() => navigate("events")}>
                    EVENTS
                  </Button>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>

          <Divider />
          <main>
            <Outlet context={{ lostStolenForm } satisfies ContextType} />
          </main>
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default Layout;
