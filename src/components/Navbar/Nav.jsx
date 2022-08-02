import React, { useState } from 'react'
import './Nav.css'
import { FaBars } from 'react-icons/fa'

function Nav() {
  const [color, setColor] = useState(false)
    const changeColor= () => {
        if (window.scrollY >= 20) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);
  return (
    <div className={color ? 'nav nav-af' : 'nav'}>
        <h1 className='logo'>ZINGA</h1>
        <nav>
          <a href="" className='nav-link'>HOME</a>
          <a href="#about" className='nav-link'>ABOUT</a>
          <a href="" className='nav-link'>CONTACT</a>
          <a href="" className='nav-link'>PRICING</a>
        </nav>
        <FaBars className='menu-bar' size='1.4em'/>
    </div>
  )
}

export default Nav