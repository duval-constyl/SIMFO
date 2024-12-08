import React , { useState } from "react";
import Logo from "../../assets/simfo.png";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";
import LanguageSwitch from "./LanguageSwitch";
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the toggler


const Navbar = ({ handleOrderPopup }) => {
  
  const { i18n, t } = useTranslation();
  {/*{t('home')}     t('home') */}

  const Menu = [
    {
      id: 1,
      name: t('home'),
      link: "/#home",
    },
    {
      id: 2,
      name: t('about'),
      link: "/#services",
    },
    {
      id: 3,
      name: t('service'),
      link: "/#service",
    },
    {
      id: 4,
      name: t('testimony'),
      link: "/#testimony",
    },
    {
      id: 5,
      name: t('contact'),
      link: "/#contact",
    },
    {
      id: 6,
      name: t('product'),
      link: "/#product",
    },
  ];

  const [isOpen, setIsOpen] = useState(false); // State to manage the open/closed state of the navbar

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/60 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-2xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-22 h-20" />
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder={t('search')}
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button 
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
              {t('order')}
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button> */}

            {/* language Switch */}
            <div>
              <LanguageSwitch />
            </div>


            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>

            {/* Toggler Button */}
            <button onClick={toggleNavbar} className="sm:hidden p-2">
              {isOpen ? <FaTimes className="text-primary" /> : <FaBars className="text-primary" />}
            </button>

          </div>
        </div>
      </div>
      {/* lower Navbar   */}      
      <div data-aos="zoom-in" className={`flex justify-center h-10 ${isOpen ? 'block' : 'hidden'} sm:flex`}>
        <ul className="flex sm:flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className={`inline-block px-4 hover:text-primary duration-200 ${isOpen ? 'text-white' : ''}`} // Apply text-black for small screens
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* lower Navbar       
      <div data-aos="zoom-in" className="flex justify-center h-10">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div> */} 
    </div>
  );
};

export default Navbar;
