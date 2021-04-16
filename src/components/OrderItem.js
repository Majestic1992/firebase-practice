import React, { useState } from "react";

const OrderItem = ({ id, name, description, price, getOrders }) => {
  const initialState = {
    editedName: "",
    editedDescription: "",
    editedPrice: "",
  };
  const [form, setForm] = useState(false);
  const [inputData, setInputData] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const deleteItem = async () => {
    await fetch(
      `https://react-http-practice-e111c-default-rtdb.firebaseio.com/orders/${id}.json`,
      {
        method: "DELETE",
      }
    );
    getOrders();
  };

  const editItem = () => {
    setForm(true);
    setInputData({
      editedName: name,
      editedDescription: description,
      editedPrice: price,
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const data = {
      name: inputData.editedName,
      description: inputData.editedDescription,
      price: inputData.editedPrice,
    };
    await fetch(
      `https://react-http-practice-e111c-default-rtdb.firebaseio.com/orders/${id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          order: data,
        }),
      }
    );
    setForm(false);
    getOrders();
  };

  return (
    <div>
      {form === true ? (
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Name"
            name="editedName"
            value={inputData.editedName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            value={inputData.editedDescription}
            onChange={handleInputChange}
            name="editedDescription"
          />
          <input
            type="number"
            step=".01"
            placeholder="Price"
            value={inputData.editedPrice}
            onChange={handleInputChange}
            name="editedPrice"
          />
          <button>Submit</button>
          <button onClick={() => setForm(false)}>Stop edit</button>
        </form>
      ) : (
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <span>${price}</span>
          <button onClick={deleteItem}>X</button>
          <button onClick={editItem}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
