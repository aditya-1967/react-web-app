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
                <li><span className='pages'>Home</span></li>
                <li><span className='pages'>Shop</span></li>
                <li><span className='pages'>Blog</span></li>
                <li><span className='pages'>About</span></li>
                <li><span className='pages'>Contact Us</span></li>
                <li><span classname='cart-icon'><FontAwesomeIcon icon={faCartShopping} className='cart-icon'/></span></li>
            </ul>
        </div>
    )
}

export default Navbar
