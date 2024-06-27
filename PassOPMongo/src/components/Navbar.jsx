import React from 'react';

const Navbar = () => {
  return (
    <nav className=' bg-purple-900 '>
        <div className="md:mycontainer flex  items-center md:justify-space justify-between h-16 py-10">

        <div className='Logo font-bold text-white sm:text-2xl text-lg'>
          
          <span className='text-green-500'> &lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
          </div>
        <ul>
            <li className='flex sm:gap-3 gap-1'>
              <a className='hover:font-bold text-white sm:text-xl text-sm' href="/">Home</a>
              <a className='hover:font-bold text-white sm:text-xl text-sm' href="/about">About</a>
              <a className='hover:font-bold text-white sm:text-xl text-sm' href="/contact">Contact</a>
            </li>
        </ul>
        </div>

    </nav>
  );
}

export default Navbar;
