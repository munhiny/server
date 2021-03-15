import { EmployeeContextProvider } from "./Contexts/EmployeeContext";
import EmployeeCard from "./components/EmployeeCard";

import "./App.scss";

function App() {
  // const data = useGetEmpData();
  // const proData = useGetProjData();

  // // todo find out how to not mutate object when converting the data

  // const db_image = data.length > 0 && data[0].img;
  // console.log("db image: ", db_image);
  // data.length > 0 && console.log(data[0].img);
  // proData.length > 0 && console.log(proData);

  return (
    <div className="App">
      <EmployeeContextProvider>
        <EmployeeCard />
      </EmployeeContextProvider>
    </div>
  );
}

export default App;
