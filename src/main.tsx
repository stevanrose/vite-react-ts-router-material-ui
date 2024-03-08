import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Events from "./features/events/components/Events";
import Reports from "./features/reports/components/Reports";
import CreateEvent from "./features/events/components/CreateEvent";
import CreateReport from "./features/reports/components/CreateReport";
import DisplayReport from "./features/reports/components/DisplayReport";
import Layout from "./features/layout/components/Layout";
import Home from "./features/home/components/Home";
import Error from "./features/error/components/Error";
import LostStolen from "./features/lostOrStolen/components/LostStolen";
import PassportDetails from "./features/lostOrStolen/components/PassportDetails";
import PassportHolder from "./features/lostOrStolen/components/PassportHolder";
import ContactDetails from "./features/lostOrStolen/components/ContactDetails";
import CheckYourAnswers from "./features/lostOrStolen/components/CheckYourAnswers";
import React from "react";
import Circumstances from "./features/lostOrStolen/components/Circumstances";
import Teams from "./features/teams/components/Teams";
import CreateTeam from "./features/teams/components/CreateTeam";
import DisplayTeam from "./features/teams/components/DisplayTeam";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="events">
        <Route index element={<Events />} />
        <Route path="create" element={<CreateEvent />} />
      </Route>

      <Route path="reports">
        <Route index element={<Reports />} />
        <Route path="create" element={<CreateReport />} />
        <Route path=":id" element={<DisplayReport />} />
      </Route>

      <Route path="lost-stolen">
        <Route index element={<LostStolen />} />
        <Route path="passport-holder" element={<PassportHolder />} />
        <Route path="passport-details" element={<PassportDetails />} />
        <Route path="what-happened" element={<Circumstances />} />
        <Route path="contact-details" element={<ContactDetails />} />
        <Route path="check-your-answers" element={<CheckYourAnswers />} />
      </Route>

      <Route path="teams">
        <Route index element={<Teams />} />
        <Route path="create" element={<CreateTeam />} />
        <Route path=":id" element={<DisplayTeam />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
