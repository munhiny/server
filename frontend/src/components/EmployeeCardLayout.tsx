import EmployeeCard from "./EmployeeCard";
import { useContext } from "react";
import { EmployeeContext } from "../Contexts/EmployeeContext";
import { ProjectContext } from "../Contexts/ProjectContext";
import "./EmployeeCardLayout.scss";

type person = {
  emp_num?: number;
  firstName?: string;
  lastName?: string;
  img?: string;
  job?: string;
  charge?: number;
  project?: string[];
};

const EmployeeCardLayout = () => {
  const employeeData = useContext(EmployeeContext);
  const projectData = useContext(ProjectContext);

  const people = employeeData.map((employee) => {
    let person: person = {};
    person.emp_num = employee.emp_num;
    person.firstName = employee.emp_fname;
    person.lastName = employee.emp_lname;
    person.img = employee.img;
    person.job = employee.job_description;
    person.charge = employee.job_chg_hour;
    person.project = projectData
      .filter((project) => employee.emp_num === project.emp_num)
      .map((project) => project.proj_name);

    // push person into peoples array
    return person;
  });

  const renderCards = () => {
    if (people.length < 0) return "";
    return people.map((person) => (
      <EmployeeCard
        key={person.emp_num}
        firstName={person.firstName}
        lastName={person.lastName}
        img={person.img}
        jobDesc={person.job}
        jobChgHour={person.charge}
        projects={person.project}
      />
    ));
  };

  return <div>{renderCards()}</div>;
};

export default EmployeeCardLayout;
