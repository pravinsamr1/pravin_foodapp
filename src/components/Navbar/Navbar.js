import React, { useState } from 'react'
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({setlogin}) => {

    const[menu,setmenu] = useState(" ")


  return (
    <div className='navbar'>
            <Link to='/'><img src={assets.logo} className='logo'></img></Link>
            <ul className='menu-list'>
              <a href='#header' onClick={()=> setmenu("home")} className={menu === "home" ? "active": " "}  >Home</a>
              <a href='#exploremenu' onClick={()=> setmenu("menu")} className={menu === "menu" ? "active": " "} >Menu</a>
              <a href='#appdownlaod' onClick={()=> setmenu("app")} className={menu === "app" ? "active": " "} >Mobile App</a>
              <a href='#footer' onClick={()=> setmenu("contact")} className={menu === "contact" ? "active": " "} >Conatct Us</a>
            </ul>
              <div className='navbar-right'>
                {/* <img src={assets.search_icon}></img>  */}
                <div className='navbar-searchicon'>
                 <Link to='/cart'><img src={assets.basket_icon}></img></Link> 
                  <div className='dot'>

                  </div>
                </div>
                <button onClick={()=> setlogin(true)}>Sign In</button>
              </div>
    </div>
  )
}

export default Navbar;