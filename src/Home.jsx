
import './Home.css'


const Home = () => {
  const imges=[{src:'./Appam.png',alt:'Image Not Found'},
               {src:'./Biryani.png',alt:'Image Not Found'},
               {src:'./Bonda.png',alt:'Image Not Found'},
               {src:'./Cake.png',alt:'Image Not Found'},
               {src:'./Coffee.png',alt:'Image Not Found'},
               {src:'./Dosa.png',alt:'Image Not Found'},
               {src:'./Idli.png',alt:'Image Not Found'},
               {src:'./Juice.png',alt:'Image Not Found'},
               {src:'./Omelette.png',alt:'Image Not Found'},
               {src:'./Pakoda.png',alt:'Image Not Found'},
               {src:'./Paniyaram.png',alt:'Image Not Found'},
               {src:'./Paratha.png',alt:'Image Not Found'},
               {src:'./Parotta.png',alt:'Image Not Found'},
               {src:'./Poha-1.png',alt:'Image Not Found'},
               {src:'./Poori.png',alt:'Image Not Found'},
               {src:'./Puttu.png',alt:'Image Not Found'},
               {src:'./Salad.png',alt:'Image Not Found'},
               {src:'./Samosa.png',alt:'Image Not Found'},
               {src:'./Burger.png',alt:'Image Not Found'},
               {src:'./Chinese.png',alt:'Image Not Found'},
               {src:'./Ice Cream.png',alt:'Image Not Found'},
               {src:'./Kebab.png',alt:'Image Not Found'},
               {src:'./Momo.png',alt:'Image Not Found'},
               {src:'./Noodles.png',alt:'Image Not Found'},
               {src:'./North Indian.png',alt:'Image Not Found'},
               {src:'./Pasta.png',alt:'Image Not Found'},
               {src:'./Pizza.png',alt:'Image Not Found'},
               {src:'./Pure Veg.png',alt:'Image Not Found'},
               {src:'./Rolls.png',alt:'Image Not Found'},
               {src:'./Salad.png',alt:'Image Not Found'},
               {src:'./Shawarma.png',alt:'Image Not Found'},
               {src:'./South Indian.png',alt:'Image Not Found'},
              ]
    const instamart=[{src:'./vegitables.png',alt:'Image Not Found'},
                      {src:'./fruites.png',alt:'Image Not Found'},               
                      {src:'./dairy.png',alt:'Image Not Found'},
                      {src:'./bath.png',alt:'Image Not Found'},
                      {src:'./biscuits.png',alt:'Image Not Found'},
                      {src:'./cold-drinks.png',alt:'Image Not Found'},
                      {src:'./frozon foods.png',alt:'Image Not Found'},
                      {src:'./masala.png',alt:'Image Not Found'},
                      {src:'./oils.png',alt:'Image Not Found'},
                      {src:'./Rice.png',alt:'Image Not Found'},
                      {src:'./meat.png',alt:'Image not found'},
    ]
              
    return (
      <div>
        <div className='bgimg1'>

        </div>
        <div className='bgimg' >
            <img src="./card1.png" alt="image not found" style={{width:'300px',height:'300px'}} />
            <img src="./card2.png" alt="image not found" style={{width:'300px',height:'300px'}}/>
            <img src="./card3.png" alt="image not found" style={{width:'300px',height:'300px'}}/>
            <img src="./card4.png" alt="image not found" style={{width:'300px',height:'300px'}} />
        </div>

        <div 
  className="w-full overflow-x-auto whitespace-nowrap" 
  style={{
    marginLeft: '50px',
    marginTop: '10px',
    background: 'white',
    width: '95%',
    height: '400px',
    display: 'flex'
  }}
>
  <div className="flex gap-4 p-4" style={{ minWidth: 'max-content' }}>
    {imges.map((_, i) => (
      <img
        key={i}
        src={imges[i % 32].src} 
        alt="Random"
        className="rounded-lg object-cover"
        style={{ width: "200px", height: "300px", marginLeft: '50px' }}
      />
    ))}
  </div>
</div>

          <h2 style={{marginTop:'100px',marginLeft:'100px',fontFamily:'sans-serif'}}>Shop Groceries on Instamart</h2>

          <div 
  className="w-full overflow-x-auto whitespace-nowrap" 
  style={{
    marginLeft: '40px',
    marginTop: '10px',
    background: 'white',
    width: '95%',
    height: '400px',
    overflowX: 'auto', // Ensures horizontal scroll
    whiteSpace: 'nowrap' // Prevents wrapping
  }}
>
  <div 
    className="flex gap-4 p-4" 
    style={{ minWidth: 'max-content' }} // Allows horizontal scrolling
  >
    {instamart.map((_, i) => (
      <img
        key={i}
        src={instamart[i % 20].src} 
        alt="Random"
        className="rounded-lg object-cover"
        style={{ width: "200px", height: "250px", marginLeft: '150px', marginTop: '50px' }}
      />
    ))}
  </div>
</div>


          

<div>
  <img src="./banner.png" alt="not found" style={{width:'100%'}} />
</div>

      </div >
   
      
    );
  };
export default Home;      