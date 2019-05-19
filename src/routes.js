import React from "react";
const Expenses = React.lazy(() =>
  import("./containers/Layout/sections/Expenses/Expenses")
);
const Incomes = React.lazy(() =>
  import("./containers/Layout/sections/Incomes/Incomes")
);
const Dashboard = React.lazy(() => import("./components/Dashboard"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/app/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/app/incomes", name: "Incomes", component: Incomes },
  { path: "/app/expenses", name: "Expenses", component: Expenses }
];

export default routes;
