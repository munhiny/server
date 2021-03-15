import { createContext, useState, useEffect } from "react";
import useGetEmpData, { employee } from "../API/useGetEmpData";

export const EmployeeContext = createContext<employee[]>([]);

export const EmployeeContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<employee[]>([]);
  const employeeData = useGetEmpData();

  useEffect(() => {
    setData(employeeData);
  }, [employeeData]);

  return (
    <EmployeeContext.Provider value={data}>{children}</EmployeeContext.Provider>
  );
};
