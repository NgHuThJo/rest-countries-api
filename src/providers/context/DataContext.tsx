// Third party
import { createContext, useContext, useMemo } from "react";
// Types
import { ContextProps, GenericObject } from "@/types";
// Assets
import data from "@/data.json";

const DataContext = createContext<GenericObject | undefined>(undefined);

export const useDataContext = () => {
  return useContext(DataContext);
};

export function DataContextProvider({ children }: ContextProps) {
  const contextValue = useMemo(() => ({ data }), [data]);

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
