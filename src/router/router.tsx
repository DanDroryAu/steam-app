import { createBrowserRouter, RouteObject } from "react-router-dom";
import AppLayout from '@/layouts/AppLayout';
import AuthLayout from "@/layouts/AuthLayout";

const modules = import.meta.glob(['./../pages/**/*.route.(ts|tsx)']);

type RouteModule = {
  default: RouteObjectWithLayout[];
}

type RouteObjectWithLayout = RouteObject & {
    layout: LayoutName
}

const layouts = {
  default: <AppLayout />,
  auth: <AuthLayout />,
};

type LayoutName = keyof typeof layouts;


export let routes: RouteObject[] = [];
export let router: ReturnType<typeof createBrowserRouter>;

const getRoutes = async () => {
  const moduleResult: RouteModule[] = await Promise.all(Object.keys(modules).map(async (path) => modules[path]())) as RouteModule[];

  const rawRoutes = moduleResult.reduce((acc, route) => [...acc, ...route.default], [] as RouteObjectWithLayout[]);

  const reducedRoutes = rawRoutes.reduce((acc, route) => {
    const layout = route.layout;

    return {
      ...acc,
      [layout]: {
        ...acc[layout],
        element: layouts[layout],
        children: [...(acc[layout]?.children || []), route],
      }
    };
  }, { default: [], auth:[] } as { default: RouteObject, auth: RouteObject }
  );

  routes = Object.values(reducedRoutes).map((route) => ({
    ...route,
  })) as RouteObject[];
};

export const initRouter = async () => {
  await getRoutes();
  router = createBrowserRouter(routes);
};
