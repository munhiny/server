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
  return (
    <div className="card">
      <div className="card__pic" style={{ backgroundImage: `url(${img})` }} />
      <h2>{`${firstName} ${lastName}`}</h2>
      <p>{jobDesc}</p>
      <p>{jobChgHour.toFixed(2)}</p>
      <p className="card__summary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, accusamus,
        repellendus velit nobis voluptate labore quis dignissimos architecto
        consequatur, omnis aliquid dolorum eos. In at incidunt omnis neque
        ratione sint.
      </p>
    </div>
  );
};

export default EmployeeCard;
