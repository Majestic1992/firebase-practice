import React from "react";

const MealItem = ({ name, description, price }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
    </div>
  );
};

export default MealItem;
