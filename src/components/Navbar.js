import React from 'react';
import {BsPerson} from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import {HiOutlineMenuAlt4} from "react-icons/hi";

export const Navbar = () => {
  return (
    
    <div className='flex justify-between items-center h-20 px-2 cursor-pointer'>
        <div>
            <h1 className='text text-3xl font-bold'>BEACHES.</h1>
        </div>
        <div>
            <ul className='flex gap-5 cursor-pointer hidden md:flex'>
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>view</li>
                <li>Book</li>
            </ul>
        </div>
        <div className='flex gap-2 px-2 text text-black cursor-pointer hidden md:flex'>
            <BsSearch size={20}/>
            <BsPerson size={20}/>
        </div>
        <div className='md:hidden'>
            <HiOutlineMenuAlt4 size={20}/>
        </div>
        {/* mobile */}

       
    </div>
  );
};

export default Navbar;
