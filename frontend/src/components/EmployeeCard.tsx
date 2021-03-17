import "./EmployeeCard.scss";

type Props = {
  firstName?: String;
  lastName?: String;
  img?: String;
  jobDesc?: String;
  jobChgHour?: Number;
  card?: boolean;
  projects?: string[];
};

const EmployeeCard = ({
  firstName,
  lastName,
  img,
  jobDesc,
  jobChgHour,
  projects,
  card = true,
}: Props) => {
  // todo remove duplictes in projects and find a better way to display projects
  return (
    <div className={`card${card ? "" : "_row"}`}>
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
            <span>Projects: </span>
            <p>{projects ? projects.join(", ") : ""}</p>
          </div>
          <div className="card__summary">
            <span>Profile: </span>
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
