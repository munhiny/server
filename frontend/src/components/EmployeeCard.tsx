import "./EmployeeCard.scss";

type Props = {
  firstName: String;
  lastName: String;
  img: String;
  jobDesc: String;
  jobChgHour: Number;
};

const EmployeeCard = ({
  firstName,
  lastName,
  img,
  jobDesc,
  jobChgHour,
}: Props) => {
  const card = true;
  return (
    <div className={`card${card ? "" : "_row"}`}>
      <div
        className={`card${card ? "__pic" : "_row__pic"}`}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="card__name">
        <h2>{`${firstName} ${lastName}`}</h2>
      </div>
      <div className="card__postion">
        <span>Position: </span>
        <p>{jobDesc}</p>
      </div>
      <div className="card__rate">
        <span>Rate:</span>
        <p>${jobChgHour.toFixed(2)}</p>
      </div>
      {card && (
        <>
          <div className="card__project">
            <span>Project: </span>
            <p>Airwave</p>
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
