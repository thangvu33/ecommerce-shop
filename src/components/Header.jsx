import React, { useContext, useState, useEffect } from "react";

import { SidebarContext } from "../contexts/SidebarContext";

import { CartContext } from "../contexts/CartContext";

import { BsBag } from "react-icons/bs";
import Logo from "../assets/img/logo.svg";

import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full transition-all z-10`}>
      <div className="container mx-auto flex justify-between items-center h-full ">
        <Link to={`/`}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>

        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
