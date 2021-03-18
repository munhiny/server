import "./EmployeeCard.scss";

type Props = {
  empNum?: number;
  firstName?: String;
  lastName?: String;
  img?: String;
  jobDesc?: String;
  jobChgHour?: Number;
  card?: boolean;
  projects?: string[];
  parentCallback?: any;
  modal?: boolean;
};

const EmployeeCard = ({
  empNum,
  firstName,
  lastName,
  img,
  jobDesc,
  jobChgHour,
  projects,
  card = false,
  parentCallback,
  modal = false,
}: Props) => {
  // todo remove duplictes in projects and find a better way to display projects
  const currentProject = projects && projects.length > 0 && projects[0];
  // get all projects that are not the first one
  const pastProjects =
    (projects &&
      projects.length > 0 &&
      projects
        .filter((project, index) => index !== 0 && project !== currentProject)
        .map((project) => project)) ||
    [];

  const uniqueProjects = pastProjects
    .filter((value, index) => pastProjects.indexOf(value) === index)
    .join(", ");
  // index of returns first index at which element can be found,
  // therefore, first index of elementt does not equal the current index
  // means that it has occured before and so do not add to the new array

  // on click handler to send to parent row that was clicked.
  const onClickHandler = () => {
    console.log("you have clicked me");
    if (modal) return;
    parentCallback(empNum);
  };

  return (
    <div className={`card${card ? "" : "_row"}`} onClick={onClickHandler}>
      <div
        className={`card${card ? "__pic" : "_row__pic"}`}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="card__name">
        <h2>{`${firstName} ${lastName}`}</h2>
      </div>
      <div className="card__position">
        <span>Position: </span>
        <p>{jobDesc}</p>
      </div>
      <div className="card__rate">
        <span>Rate:</span>
        <p>${jobChgHour ? jobChgHour.toFixed(2) : ""}</p>
      </div>
      {card && (
        <>
          <div className="card__project">
            <span>Project: </span>
            <p>
              {currentProject ? currentProject : "N/A"}
              {projects && projects.length > 0 ? (
                <span
                  className="card__project__other_project"
                  title={uniqueProjects}
                >
                  {uniqueProjects.length > 0 ? ` ...` : ""}
                </span>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="card__summary">
            <span>Summary: </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              accusamus, repellendus velit nobis voluptate labore quis
              dignissimos architecto consequatur, omnis aliquid dolorum eos. In
              at incidunt omnis neque ratione sint.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeeCard;
