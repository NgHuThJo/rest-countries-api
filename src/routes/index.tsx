// React
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Global routes
import { App } from "@/App";
import { AppRoute } from "./app/AppRoute";
import { ErrorRoute } from "./error/ErrorRoute";

// Feature routes
import { HomeRoute } from "@/features/home/routes/HomeRoute";
import { CountryDetails } from "@/features/home/components/country/details/CountryDetails";

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
          {
            path: ":country",
            element: <CountryDetails />,
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
