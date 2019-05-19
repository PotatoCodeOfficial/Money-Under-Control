import React from "react";

const Incomes = React.lazy(() =>
  import("./containers/Layout/sections/Incomes/Incomes")
);
const Typography = React.lazy(() => import("./components/Theme/Typography"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/app/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/app/incomes", name: "Incomes", component: Incomes },
  { path: "/app/theme/typography", name: "Typography", component: Typography }
];

export default routes;
