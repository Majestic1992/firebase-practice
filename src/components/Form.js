import React, { useState } from "react";

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
    fetch(
      "https://react-http-practice-e111c-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          order: data,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center	items-center w-6/12 mx-auto bg-green-300	p-8"
      >
        <input
          className=" w-full p-5 mb-3"
          type="text"
          placeholder="Name"
          value={name}
          onChange={nameChangeHandler}
        />
        <input
          className="w-full p-5 mb-3"
          type="text"
          placeholder="Description"
          value={description}
          onChange={descriptionChangeHandler}
        />
        <input
          className="w-full p-5 mb-3"
          type="number"
          step=".01"
          placeholder="Price"
          value={price}
          onChange={priceChangeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
