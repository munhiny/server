import EmployeeCard from "./EmployeeCard";
import { useContext } from "react";
import { EmployeeContext } from "../Contexts/EmployeeContext";
import "./EmployeeCardLayout.scss";

const EmployeeCardLayout = () => {
  const employeeData = useContext(EmployeeContext);

  const renderCards = () => {
    if (!employeeData) return "";
    return employeeData.map((data) => (
      <EmployeeCard
        key={data.emp_num}
        firstName={data.emp_fname}
        lastName={data.emp_lname}
        img={data.img}
        jobDesc={data.job_description}
        jobChgHour={data.job_chg_hour}
      />
    ));
  };

  return <div>{renderCards()}</div>;
};

export default EmployeeCardLayout;
