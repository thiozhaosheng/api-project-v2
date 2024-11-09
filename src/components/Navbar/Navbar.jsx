import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import './Navbar.css'

const Navbar = () => {

  const [sticky,setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }



  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className="nav-logo">TFlights</div>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
        <RxHamburgerMenu className='menu-icon' onClick={toggleMenu}/>


    </nav>
  )
}

export default Navbar
