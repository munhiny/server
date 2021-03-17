import { EmployeeContextProvider } from "./Contexts/EmployeeContext";
import { ProjectContextProvider } from "./Contexts/ProjectContext";
import "./App.scss";
import EmployeeCardLayout from "./components/EmployeeCardLayout";

function App() {
  return (
    <div className="App">
      <EmployeeContextProvider>
        <ProjectContextProvider>
          <EmployeeCardLayout />
        </ProjectContextProvider>
      </EmployeeContextProvider>
    </div>
  );
}

export default App;
