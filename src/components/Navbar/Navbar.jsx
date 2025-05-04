"use client";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold tracking-wide">
        Sport<span className="text-green-400">Zone</span>
      </div>
      <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
        <li className="hover:text-green-400 cursor-pointer">Inicio</li>
        <li className="hover:text-green-400 cursor-pointer">Productos</li>
        <li className="hover:text-green-400 cursor-pointer">Contacto</li>
      </ul>
      <div className="relative">
        <FaShoppingCart className="text-xl cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-green-400 text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">
          0
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
