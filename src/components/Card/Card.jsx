import React from "react";
import "./Card.scss";

const Card = ({ data, id, handleClick }) => {
  const itemClass = data.stat ? " active " + data.stat : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <img className="card-image" src={data.img} alt="image" />
    </div>
  );
};

export default Card;
