import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { CurrentUrl } from '../Store/Atoms';
import { icons } from '../constants';

export function Nav() {
  const [nav, setNav] = useState(false);
  const [currentURL, setCurrentURL] = useRecoilState(CurrentUrl);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavigation = (url) => {
    setCurrentURL(url);
    navigate(`/${url.toLowerCase()}`);
    setNav(false); // Close the mobile menu
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Invoices' },
    { id: 3, text: 'Projects' },
    { id: 4, text: 'Clients' }
  ];

  return (
    <div className='flex justify-between items-center h-12 max-w-[1300px] mx-auto px-4 border-b-b'>
      <h1 className='text-black'>REACT.</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`${
              currentURL === item.text ? 'bg-gray-100' : 'bg-gray-0'
            } p-2 hover:bg-gray-100 rounded-sm m-2 cursor-pointer duration-300 text-black`}
            onClick={() => handleNavigation(item.text)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='order-9 cursor-pointer block md:hidden'>
        {nav ?
        <icons.AiOutlineClose size={20} /> : <icons.AiOutlineMenu size={20} />}
      </div>

      <ul
        className={`fixed top-0 left-0 w-[60%] h-full bg-[#000300] bg-opacity-5 border-r border-gray-100 ease-in-out duration-500 ${
          nav ? 'flex justify-center items-center flex-col' : 'left-[-100%]'
        } md:hidden`}
      >
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            onClick={() => handleNavigation(item.text)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div className='hidden md:block'>jk</div>
    </div>
  );
}
