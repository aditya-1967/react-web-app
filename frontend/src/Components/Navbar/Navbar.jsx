import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/images/logo/de Compras.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-links">
                <li onClick={() => {setMenu("home")}}><span className={`pages ${menu === "home" ? 'active-page' : ''}`}>Home</span></li>
                <li onClick={() => {setMenu("shop")}}><span className={`pages ${menu === "shop" ? 'active-page' : ''}`}>Shop</span></li>
                <li onClick={() => {setMenu("blog")}}><span className={`pages ${menu === "blog" ? 'active-page' : ''}`}>Blog</span></li>
                <li onClick={() => {setMenu("about")}}><span className={`pages ${menu === "about" ? 'active-page' : ''}`}>About</span></li>
                <li onClick={() => {setMenu("contact")}}><span className={`pages ${menu === "contact" ? 'active-page' : ''}`}>Contact Us</span></li>
                <li onClick={() => {setMenu("cart")}}><span className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`}><FontAwesomeIcon icon={faCartShopping} className='cart-icon'/></span></li>
            </ul>
        </div>
    )
}

export default Navbar
