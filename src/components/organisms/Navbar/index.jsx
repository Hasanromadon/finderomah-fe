import React from 'react';
import Button from 'components/atoms/button';
import Logo from 'components/atoms/logo';
import {Link } from "react-router-dom";
import './style.css';

const Navbar = () => {
  return (
    <>
      <nav className='container py-4 flex justify-between items-center mb-8'>
        <Logo/>
          <ul className='text-base hidden sm:flex items-center gap-8 text-gray-500'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>How to get</Link></li>
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/'>Review</Link></li>
            <li><Link to='/'>About Us</Link></li>
          </ul>
          <div>
          <Button outlined className="mr-2" title="Sign In"/>
          <Button  primary title="Sign Up"/>
          </div>
      </nav>
      </>
  )
};

export default Navbar;
