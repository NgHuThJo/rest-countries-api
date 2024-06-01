// React
import { Outlet } from "react-router-dom";
// Context
import { DataContextProvider } from "./providers/context/DataContext";

export function App() {
  return (
    <DataContextProvider>
      <Outlet />;
    </DataContextProvider>
  );
}
