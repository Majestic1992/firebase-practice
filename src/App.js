import "./App.css";
import MealsList from "./components/MealsList";
import OrderList from "./components/OrderList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Meals</h1>
      <MealsList />
      <Form />
      <OrderList />
    </div>
  );
}

export default App;
