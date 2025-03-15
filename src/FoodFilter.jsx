import { useState } from "react";
import "./App.css"; // Import external CSS

const foodItems = [
  { id: 1, name: "Paneer Butter Masala", type: "veg" },
  { id: 2, name: "Dal Tadka", type: "veg" },
  { id: 3, name: "Chicken Biryani", type: "nonveg" },
  { id: 4, name: "Mutton Curry", type: "nonveg" }
];

export default function FoodFilter() {
  const [showOnlyVeg, setShowOnlyVeg] = useState(false); // Default: Show all dishes

  const toggleSwitch = () => {
    setShowOnlyVeg(!showOnlyVeg);
  };

  return (
    <div className="container">
      <div className="toggle-container">
        <span>Show Only Veg</span>
        <div
          className={`switch-btn ${showOnlyVeg ? "switch-on" : ""}`}
          onClick={toggleSwitch}
        ></div>
      </div>

      <ul className="food-list">
        {foodItems
          .filter((item) => (!showOnlyVeg || item.type === "veg")) // Show all if OFF, only Veg if ON
          .map((food) => (
            <li key={food.id} className="food-item">
              {food.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
