import { EmployeeContextProvider } from "./Contexts/EmployeeContext";
import "./App.scss";
import EmployeeCardLayout from "./components/EmployeeCardLayout";

function App() {
  return (
    <div className="App">
      <EmployeeContextProvider>
        <EmployeeCardLayout />
      </EmployeeContextProvider>
    </div>
  );
}

export default App;
