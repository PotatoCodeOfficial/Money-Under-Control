import React from "react";

const Colors = React.lazy(() => import("./components/Theme/Colors"));
const Typography = React.lazy(() => import("./components/Theme/Typography"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/app/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/app/theme/colors", name: "Colors", component: Colors },
  { path: "/app/theme/typography", name: "Typography", component: Typography }
];

export default routes;
