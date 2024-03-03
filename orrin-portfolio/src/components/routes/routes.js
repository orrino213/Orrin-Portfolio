import { lazy } from "react";
const Home = lazy(() => import("../components/home/Home"));
const PageNotFound = lazy(() => import("../components/error/"));

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

const errorRoutes = [
  {
    path: "*",
    name: "Error - 404",
    element: PageNotFound,
    roles: [],
    exact: true,
    isAnonymous: true,
  },
];

var allRoutes = [...routes, ...errorRoutes];

export default allRoutes;
