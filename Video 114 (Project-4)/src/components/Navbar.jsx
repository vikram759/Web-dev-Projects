import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
<nav className='hello bg-purple-950 h-14 flex justify-around'>
    <div className="logo h-14 font-bold text-white pt-4">iTask</div>
    
        <ul className='list flex gap-3 text-white pt-4'>
            <li>Home</li>
            <li>About us</li>
        </ul>
    

</nav>
  );
}

export default Navbar;
