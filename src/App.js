import "./App.css";
import MealsList from "./components/MealsList";
import OrderList from "./components/OrderList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1 className="text-indigo-500 text-5xl font-normal	tracking-wide	p-6 mb-8">
        Meals
      </h1>
      <MealsList />
      <Form />
      <OrderList />
    </div>
  );
}

export default App;
