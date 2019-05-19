export default {
  items: [
    {
      name: "Dashboard",
      url: "/app/dashboard",
      icon: "fa fa-cubes"
    },
    {
      title: true,
      name: "Base",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Incomes",
      url: "/app/incomes",
      icon: "fa fa-dollar"
    },
    {
      name: "Expenses",
      url: "/app/expenses",
      icon: "fa fa-list"
    },
    {
      divider: true
    },
    {
      title: true,
      name: "Premium"
    },
    {
      name: "Projections",
      url: "/pages",
      icon: "fa fa-line-chart",
      children: [
        {
          name: "Login",
          url: "/login",
          icon: "fa fa-user"
        }
      ]
    }
  ]
};
