import { createContext, useState, useEffect } from "react";
import useGetProjData, { Project } from "../API/useGetProjData";

export const ProjectContext = createContext<Project[]>([]);

export const ProjectContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Project[]>([]);
  const projectData = useGetProjData();

  useEffect(() => {
    setData(projectData);
  }, [projectData]);

  return (
    <ProjectContext.Provider value={data}>{children}</ProjectContext.Provider>
  );
};
