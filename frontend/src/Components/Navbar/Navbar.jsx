import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/images/logo/de Compras.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-links">
                <li onClick={() => { setMenu("home") }}><Link to='/' className={`pages ${menu === "home" ? 'active-page' : ''}`}>Home</Link></li>
                <li onClick={() => { setMenu("shop") }}><Link to='/shop' className={`pages ${menu === "shop" ? 'active-page' : ''}`}>Shop</Link></li>
                <li onClick={() => { setMenu("blog") }}><Link to='/blog' className={`pages ${menu === "blog" ? 'active-page' : ''}`}>Blog</Link></li>
                <li onClick={() => { setMenu("about") }}><Link to='/about' className={`pages ${menu === "about" ? 'active-page' : ''}`}>About</Link></li>
                <li onClick={() => { setMenu("contact") }}><Link to='/contact' className={`pages ${menu === "contact" ? 'active-page' : ''}`}>Contact Us</Link></li>
                <li onClick={() => { setMenu("cart") }}><Link to='/cart' className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`}><FontAwesomeIcon icon={faCartShopping} className={`cart-icon ${menu === "cart" ? 'active-page' : ''}`} /></Link></li>
            </ul>
        </div>
    )
}

export default Navbar
