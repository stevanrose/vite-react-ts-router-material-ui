import { FC } from "react";
import { Outlet } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en-gb";

import {
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme();

const Layout: FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                component="div"
                variant="h3"
                color="inherit"
                noWrap
                mt={1}
              >
                <Box sx={{ fontWeight: "bold" }}>HM Passports</Box>
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <main>
            <Outlet />
          </main>
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default Layout;
