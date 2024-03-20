import { lazy } from "react";
const Home = lazy(() => import("../home/Home"));

const routes = [
  {
    path: "/home",
    name: "Home",
    exact: true,
    element: Home,
    roles: [],
    isAnonymous: true,
  },
];

var allRoutes = [...routes];

export default allRoutes;
