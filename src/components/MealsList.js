import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = async () => {
    const response = await fetch(
      "https://react-http-practice-e111c-default-rtdb.firebaseio.com/meals.json"
    );
    const responseData = await response.json();
    const loadedMeals = [];

    for (const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,
      });
    }
    setMeals(loadedMeals);
  };
  return (
    <div>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </div>
  );
};

export default MealsList;
