import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>

        </nav>
    );
};

export default Navbar;