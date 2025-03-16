import './Home.css';

const Home = () => {
  const images = [
    { src: './Appam.png', alt: 'Image Not Found' },
    { src: './Biryani.png', alt: 'Image Not Found' },
    { src: './Bonda.png', alt: 'Image Not Found' },
    { src: './Cake.png', alt: 'Image Not Found' },
    { src: './Coffee.png', alt: 'Image Not Found' },
    { src: './Dosa.png', alt: 'Image Not Found' },
    { src: './Idli.png', alt: 'Image Not Found' },
    { src: './Juice.png', alt: 'Image Not Found' },
    { src: './Omelette.png', alt: 'Image Not Found' },
    { src: './Pakoda.png', alt: 'Image Not Found' },
    { src: './Paniyaram.png', alt: 'Image Not Found' },
    { src: './Paratha.png', alt: 'Image Not Found' },
    { src: './Parotta.png', alt: 'Image Not Found' },
    { src: './Poha-1.png', alt: 'Image Not Found' },
    { src: './Poori.png', alt: 'Image Not Found' },
    { src: './Puttu.png', alt: 'Image Not Found' },
    { src: './Salad.png', alt: 'Image Not Found' },
    { src: './Samosa.png', alt: 'Image Not Found' },
    { src: './Burger.png', alt: 'Image Not Found' },
    { src: './Chinese.png', alt: 'Image Not Found' },
    { src: './Ice Cream.png', alt: 'Image Not Found' },
    { src: './Kebab.png', alt: 'Image Not Found' },
    { src: './Momo.png', alt: 'Image Not Found' },
    { src: './Noodles.png', alt: 'Image Not Found' },
    { src: './North Indian.png', alt: 'Image Not Found' },
    { src: './Pasta.png', alt: 'Image Not Found' },
    { src: './Pizza.png', alt: 'Image Not Found' },
    { src: './Pure Veg.png', alt: 'Image Not Found' },
    { src: './Rolls.png', alt: 'Image Not Found' },
    { src: './Salad.png', alt: 'Image Not Found' },
    { src: './Shawarma.png', alt: 'Image Not Found' },
    { src: './South Indian.png', alt: 'Image Not Found' },
  ];

  const instamart = [
    { src: './vegitables.png', alt: 'Image Not Found' },
    { src: './fruites.png', alt: 'Image Not Found' },
    { src: './dairy.png', alt: 'Image Not Found' },
    { src: './bath.png', alt: 'Image Not Found' },
    { src: './biscuits.png', alt: 'Image Not Found' },
    { src: './cold-drinks.png', alt: 'Image Not Found' },
    { src: './frozon foods.png', alt: 'Image Not Found' },
    { src: './masala.png', alt: 'Image Not Found' },
    { src: './oils.png', alt: 'Image Not Found' },
    { src: './Rice.png', alt: 'Image Not Found' },
    { src: './meat.png', alt: 'Image Not Found' },
  ];

  return (
    <div>
      <div className="bgimg1"></div>

      {/* Responsive Grid for Main Cards */}
      <div className="grid-container">
        <img src="./card1.png" alt="image not found" className="grid-item" />
        <img src="./card2.png" alt="image not found" className="grid-item" />
        <img src="./card3.png" alt="image not found" className="grid-item" />
        <img src="./card4.png" alt="image not found" className="grid-item" />
      </div>

      {/* Scrollable Food Items */}
      <div className="scroll-container">
        <div className="scroll-wrapper">
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className="scroll-img" />
          ))}
        </div>
      </div>

      <h2 className="instamart-title">Shop Groceries on Instamart</h2>

      {/* Scrollable Grocery Items */}
      <div className="scroll-container">
        <div className="scroll-wrapper">
          {instamart.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} className="scroll-img" />
          ))}
        </div>
      </div>

      {/* Banner */}
      <div>
        <img src="./banner.png" alt="not found" className="banner-img" />
      </div>
    </div>
  );
};

export default Home;
