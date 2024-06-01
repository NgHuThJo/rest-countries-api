// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Global routes
import { AppRoute } from "./app/AppRoute";
import { ErrorRoute } from "./error/ErrorRoute";

// Feature routes
import { App } from "@/App";

export const routesConfig = [
  {
    element: <App />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <AppRoute />,
      },
    ],
  },
];

export function Router() {
  // Paths are case-insensitive, isSensitive prop of Route component has default value of false
  const router = createBrowserRouter(routesConfig);

  return <RouterProvider router={router} />;
}
