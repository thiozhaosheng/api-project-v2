import React, { useEffect, useState } from 'react'
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



  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className="nav-logo">TFlights</div>
        <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>


    </nav>
  )
}

export default Navbar
