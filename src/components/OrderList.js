import React, { useState, useEffect } from "react";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const [orders, setOrders] = useState("");

  const getOrders = async () => {
    const response = await fetch(
      "https://react-http-practice-e111c-default-rtdb.firebaseio.com/orders.json"
    );
    const responseData = await response.json();
    const loadedOrders = [];

    for (const key in responseData) {
      loadedOrders.push({
        id: key,
        name: responseData[key].order.name,
        description: responseData[key].order.description,
        price: responseData[key].order.price,
      });
    }
    setOrders(loadedOrders);
  };

  const deleteOrders = async () => {
    const response = await fetch(
      `https://react-http-practice-e111c-default-rtdb.firebaseio.com/orders.json`,
      {
        method: "DELETE",
      }
    );
    const responseData = await response.json();
    setOrders(responseData);
  };

  return (
    <div>
      {orders
        ? orders.map((order) => (
            <OrderItem
              key={order.id}
              id={order.id}
              name={order.name}
              description={order.description}
              price={order.price}
              orders={orders}
              setOrders={setOrders}
              getOrders={getOrders}
            />
          ))
        : ""}
      <br />
      <button onClick={getOrders}>Show orders</button>
      <button onClick={deleteOrders}>Delete all orders</button>
    </div>
  );
};

export default OrderList;
