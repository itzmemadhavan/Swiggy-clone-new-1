import { useRef } from "react";
import "./Food.css";
import Foods from "./Foods";

function Food() {
  const sliderRef = useRef(null);

  const foodItems = [
    { image: "./Salad.png" },
    { image: "./Burger.png" },
    { image: "./Kebab.png" },
    { image: "./Momo.png" },
    { image: "./Noodles.png" },
    { image: "./North Indian.png" },
    { image: "./Pizza.png" },
    { image: "./Shawarma.png" },
    { image: "./Appam.png" },
    { image: "./Biryani.png" },
    { image: "./Bonda.png" },
    { image: "./Coffee.png" },
    { image: "./Dosa.png" },
    { image: "./Idli.png" },
    { image: "./Omelette.png" },
    { image: "./Pakoda.png" },
    { image: "./Paniyaram.png" },
    { image: "./Poha-1.png" },
    { image: "./Parotta.png" },
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 250; 
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", 
      });
    }
  };

  return (
    <div className="food-container">
      <div className="box1">
        <h2>What's on Your Mind?</h2>
      </div>

      <div className="slider-container">
        <button className="arrow left" onClick={() => scrollSlider("left")}>
          ❮
        </button>

        <div className="slider" ref={sliderRef}>
          {foodItems.map((item, index) => (
            <div key={index} className="food-item">
              <img src={item.image} alt="Food" className="food-image" />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scrollSlider("right")}>
          ❯
        </button>
      </div>

      <hr className="divider" />

      <div className="food">
        <h2>Top Restaurant Chains in Coimbatore</h2>
        <Foods />
      </div>
    </div>
  );
}

export default Food;
