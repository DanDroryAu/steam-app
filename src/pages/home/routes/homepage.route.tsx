import { HomePage } from "@/pages/home/pages/HomePage.tsx";

const homepageRoute =  {
  path: "/",
  exact: true,
  layout: 'auth',
  element: <HomePage />,
};

const routes = [homepageRoute];
export default routes;
