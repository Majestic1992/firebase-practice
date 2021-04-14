import React from "react";

const OrderItem = ({ id, name, description, price, setOrders, getOrders }) => {
  const deleteItem = async () => {
    const response = await fetch(
      `https://react-http-practice-e111c-default-rtdb.firebaseio.com/orders/${id}.json`,
      {
        method: "DELETE",
      }
    );
    const responseData = await response.json();
    setOrders(responseData);
    getOrders();
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default OrderItem;
