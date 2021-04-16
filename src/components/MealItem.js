import React from "react";

const MealItem = ({ name, description, price }) => {
  return (
    <div className="w-2/5 mx-auto mb-5 p-4 bg-indigo-600 rounded text-white shadow-xl">
      <h3 className=" text-4xl pb-7">{name}</h3>
      <p className=" text-xl pb-2">{description}</p>
      <p className="text-xl py-1 ">${price}</p>
    </div>
  );
};

export default MealItem;

//
