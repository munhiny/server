import EmployeeCard from "./EmployeeCard";
import { useContext, useState, useEffect } from "react";
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
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState<person>({});

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

  const handleCallback = (childData: number) => {
    const chosenOne = people.filter((person) => person.emp_num === childData);
    const chosen: person = chosenOne[0];
    setSelected(chosen);
    setModal(!modal);
  };

  const renderCards = () => {
    if (people.length < 0) return "";
    return people.map((person) => (
      <div key={person.emp_num}>
        <EmployeeCard
          key={person.emp_num}
          empNum={person.emp_num}
          firstName={person.firstName}
          lastName={person.lastName}
          img={person.img}
          jobDesc={person.job}
          jobChgHour={person.charge}
          projects={person.project}
          parentCallback={handleCallback}
        />
      </div>
    ));
  };

  return (
    <>
      <div>
        {renderCards()}
        {selected && modal && (
          <div className="modal">
            <EmployeeCard
              key={selected.emp_num}
              empNum={selected.emp_num}
              firstName={selected.firstName}
              lastName={selected.lastName}
              img={selected.img}
              jobDesc={selected.job}
              jobChgHour={selected.charge}
              projects={selected.project}
              card={true}
              parentCallback={handleCallback}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeCardLayout;
