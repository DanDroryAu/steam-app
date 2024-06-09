import { RouterProvider } from "react-router";
import { router } from "./router";

export const RouterComponent = () => {
  return (
    <RouterProvider router={router}/>
  );
};

