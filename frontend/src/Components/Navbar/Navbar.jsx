import React from 'react'
import './Navbar.css'
import logo from '../Assets/images/logo/de Compras.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-links">
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="" className="cart-icon"><FontAwesomeIcon icon={faCartShopping} className='cart-icon'/></a></li>
            </ul>
        </div>
    )
}

export default Navbar
