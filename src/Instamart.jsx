import './Instamart.css';

export default function Instamart(){
    return(
        <div>
            <div className="nav-bar">
                <img src="./6.png" alt="image not found" style={{width:'80px',margin:'10px'}}/> 
                <span style={{color:'orangered',fontSize:'30px'}}>Delivery to Other</span>
                <video width="1300" autoPlay muted loop>
                <source src="./video2.mp4" type="video/mp4" />
                </video>   
                <video width="1300" autoPlay muted loop>
                <source src="./video3.mp4" type="video/mp4" />
                </video>          
                    
                <div className="content">
                    <h4>GROCERY & KITCHEN</h4>
                    <img src="./vegitables.png" alt="not found" className='imgs'/>
                    <img src="./fruites.png" alt="not found"  className='imgs'/>
                    <img src="./bath.png" alt="not found" className='imgs' />
                    <img src="./biscuits.png" alt="not found"  className='imgs'/>
                    <img src="./cold-drinks.png" alt="not found"  className='imgs' />
                    <img src="./frozon foods.png" alt="not found"  className='imgs'/>
                    <img src="./masala.png" alt="not found"  className='imgs' />
                    <img src="./oils.png" alt="not found"  className='imgs'/>
                    <img src="./Rice.png" alt="not found"  className='imgs'/>
                    <img src="./meat.png" alt="not found"  className='imgs'/>

                </div><hr />
                <div className="content">
                    <h4>SNACKS & DRINKS</h4>
                    <img src="./snaks.avif" alt="not found" className='imgs1'/>
                    <img src="./icecream.avif" alt="not found"  className='imgs1'/>
                    <img src="./choclate.avif" alt="not found" className='imgs1' />
                    <img src="./colddrinks.avif" alt="not found"  className='imgs1'/>
                    <img src="./noodels.avif" alt="not found"  className='imgs1' />
                    <img src="./frozonefoods.avif" alt="not found"  className='imgs1'/>
                    <img src="./sauces.avif" alt="not found"  className='imgs1' />

                </div><hr/>
                <div className="content">
                    <h4>BEAUTY & WELLNESS</h4>
                    <img src="./beauty1.avif" alt="not found" className='imgs1'/>
                    <img src="./beauty2.avif" alt="not found"  className='imgs1'/>
                    <img src="./beauty3.avif" alt="not found" className='imgs1' />
                    <img src="./beauty4.avif" alt="not found"  className='imgs1'/>
                    <img src="./beauty5.avif" alt="not found"  className='imgs1' />
                    <img src="./beauty6.avif" alt="not found"  className='imgs1'/>
                    <img src="./beauty7.avif" alt="not found"  className='imgs1' />

                </div><hr />
                <div className="content">
                    <h4>HOUSEHOLD & LIFESTYLE</h4>
                    <img src="./home1.avif" alt="not found" className='imgs1'/>
                    <img src="./home2.avif" alt="not found"  className='imgs1'/>
                    <img src="./home3.avif" alt="not found" className='imgs1' />
                    <img src="./home4.avif" alt="not found"  className='imgs1'/>
                    <img src="./home5.avif" alt="not found"  className='imgs1' />
                    <img src="./home6.avif" alt="not found"  className='imgs1'/>
                    <img src="./home7.avif" alt="not found"  className='imgs1' />

                </div><hr />
                <div className="content">
                <h4>TRENDING TODAY</h4>
                </div>
                <video width="1300" autoPlay muted loop style={{marginRight:'150px'}}>
                <source src="./video4.mp4" type="video/mp4" />
                </video>  
                <hr/>

                <img src="./banner.png" alt="not available" className='banner'/>
                
                </div> 
                
            
       </div>
    )
}
