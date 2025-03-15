import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Home from './Home';
import Food from './Food';
import Instamart from './Instamart';
import Signin from './Signin';
import Footer from './Footer';
import './Navbar.css';

function Navbar(){
    return(
        <div >
            <BrowserRouter>
            <nav className='navbar'>
                <img src="./logo.png" alt="" style={{width:'190px',margin:'50px'}} className="logo" />
                <input type="text" placeholder='Search Your Favorites' className='input-box'/>
                <ul className='navlink'>
                    <li style={{marginTop:'50px'}}><Link to='/'className='link'>Home </Link> </li>
                    <li style={{marginTop:'50px'}}><Link to='/food'className='link'>Food Delivery</Link></li>
                    <li style={{marginTop:'50px'}}><Link to='/instamart'className='link'>Instamart </Link></li>
                    <li style={{marginTop:'50px'}}><Link to='/signin'className='link'>Signin </Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/food' element={<Food />}></Route>
                <Route path='/instamart' element={<Instamart />}></Route>
                <Route path='/signin' element={<Signin />}></Route>
                
            </Routes>
            </BrowserRouter>
            <Footer />
        </div>

    )
}
export default Navbar;