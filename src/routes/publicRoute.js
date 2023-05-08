import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Contact from "../pages/Contact";

export const publicRoute = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/home",
    name: "Home",
    Component: Home,
  },
  {
    path: "/about",
    name: "About",
    Component: About,
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
  },
  {
    path: "/login",
    name: "Login",
    Component: Login,
  },
  {
    path: "/contact",
    name: "Contact",
    Component: Contact,
  },
];
