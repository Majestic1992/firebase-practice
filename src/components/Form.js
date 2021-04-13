import React, { useState } from "react";
import MealItem from "./MealItem";

const Form = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      description: description,
      price: price,
    };
    console.log(data);
    fetch(
      "https://react-http-practice-e111c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: data,
        }),
      }
    );
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={nameChangeHandler}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={descriptionChangeHandler}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={priceChangeHandler}
        />
        <button>Submit</button>
      </form>
      <MealItem />
    </div>
  );
};

export default Form;
