// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Global routes
import { App } from "@/App";
import { AppRoute } from "./app/AppRoute";
import { ErrorRoute } from "./error/ErrorRoute";

// Feature routes
import { HomeRoute } from "@/features/home/routes/HomeRoute";

export const routesConfig = [
  {
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <AppRoute />,
        children: [
          {
            index: true,
            element: <HomeRoute />,
          },
        ],
      },
    ],
  },
];

export function Router() {
  // Paths are case-insensitive, isSensitive prop of Route component has default value of false
  const router = createBrowserRouter(routesConfig);

  return <RouterProvider router={router} />;
}
