import { useState } from "react";
import styles from "./Foods.module.css";

export default function Foods() {
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [cart, setCart] = useState([]); 

  const images = [
    { name: "Subway", src: "./rest1.avif", time: "20-30 min", location: "Peelamedu" },
    { name: "NagarKovil Arya Bhavan", src: "./rest2.avif", time: "35-50 min", location: "Peelamedu" },
    { name: "Night Lion By Madhampatti", src: "./rest3.avif", time: "25-40 min", location: "Peelamedu" },
    { name: "Thirupathi Mess", src: "./rest4.avif", time: "50-60 min", location: "RamanadhaPuram" },
    { name: "Geetha Canteen", src: "./rest5.avif", time: "30-45 min", location: "GandhiPuram" },
    { name: "A2B - Adyar Ananda Bhavan", src: "./rest6.avif", time: "30-45 min", location: "GandhiPuram" },
    { name: "Subway", src: "./rest1.avif", time: "20-30 min", location: "Peelamedu" },
    { name: "NagarKovil Arya Bhavan", src: "./rest2.avif", time: "35-50 min", location: "Peelamedu" },
    { name: "Night Lion By Madhampatti", src: "./rest3.avif", time: "25-40 min", location: "Peelamedu" },
    { name: "Thirupathi Mess", src: "./rest4.avif", time: "50-60 min", location: "RamanadhaPuram" },
    { name: "Geetha Canteen", src: "./rest5.avif", time: "30-45 min", location: "GandhiPuram" },
    { name: "A2B - Adyar Ananda Bhavan", src: "./rest6.avif", time: "30-45 min", location: "GandhiPuram" }
  ];

  const foods = [
    { name: "Pizza Hut", src: "./food1.avif", type: "nonveg", time: "20-30 min", location: "RS Puram" },
    { name: "Chinese Wok", src: "./food2.avif", type: "nonveg", time: "35-50 min", location: "Sivanandha Colony" },
    { name: "Burger King", src: "./food3.avif", type: "nonveg", time: "50-60 min", location: "Ram Nagar" },
    { name: "The Biryani Life", src: "./food4.avif", type: "nonveg", time: "20-30 min", location: "Ranganathapuram" },
    { name: "Faasos", src: "./food5.avif", type: "veg", time: "35-50 min", location: "Ranganathapuram" },
    { name: "Olio The World Fried Pizzaria", src: "./food6.avif", type: "veg", time: "20-30 min", location: "Ranganathapuram" },
    { name: "Chai Point", src: "./food7.avif", type: "veg", time: "35-50 min", location: "Saibaba Colony" }
  ];

  const filteredFoods = foods.filter((food) =>
    selectedCategory === null ? true : food.type === selectedCategory
  );

  const toggleFilter = () => {
    if (selectedCategory === null) setSelectedCategory("veg");
    else if (selectedCategory === "veg") setSelectedCategory("nonveg");
    else setSelectedCategory(null);
  };

  const addToCart = (food) => {
    setCart([...cart, food]);
    alert("Added to cart! 🛒");
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! 🛒");
    } else {
      alert("Order placed successfully! 🎉");
      setCart([]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <label><b>Filter:</b></label>
        <select
          className={styles.filterDropdown}
          value={selectedCategory || "All"}
          onChange={(e) => setSelectedCategory(e.target.value === "All" ? null : e.target.value)}
        >
          <option value="All">All</option>
          <option value="veg">Veg</option>
          <option value="nonveg">Non-Veg</option>
        </select>

        <div 
          className={`${styles.switchBtn} ${selectedCategory === "veg" ? styles.switchVeg : selectedCategory === "nonveg" ? styles.switchNonVeg : ""}`} 
          onClick={toggleFilter}
        >
          {selectedCategory === null ? "All" : selectedCategory === "veg" ? "Veg" : "Non-Veg"}
        </div>
      </div>

      <div className={styles.horizontalScroll}>
        {images.map((image, index) => (
          <div key={index} className={styles.card}>
            <img src={image.src} alt={image.name} className={styles.image} />
            <div className={styles.cardContent}>
              <p className={styles.name}>{image.name}</p>
              <p className={styles.details}>⭐ {image.time}</p>
              <p className={styles.details}>{image.location}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className={styles.separator} />

      <h2 className={styles.sectionTitle}>Restaurants with online food delivery</h2>
      <div className={styles.horizontalScroll}>
        {filteredFoods.map((food, index) => (
          <div key={index} className={styles.card}>
            <img src={food.src} alt={food.name} className={styles.image} />
            <div className={styles.cardContent}>
              <p className={styles.name}>{food.name}</p>
              <p className={styles.details}>⭐ {food.time}</p>
              <p className={styles.details}>{food.location}</p>
              <button className={styles.addToCartBtn} onClick={() => addToCart(food)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <hr className={styles.separator} />
      <h2 className={styles.sectionTitle}>Your Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty</p>
      ) : (
        <div className={styles.cartItems}>
          {cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.src} alt={item.name} className={styles.cartImage} />
              <p className={styles.cartName}>{item.name}</p>
            </div>
          ))}
          <button className={styles.placeOrderBtn} onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}
