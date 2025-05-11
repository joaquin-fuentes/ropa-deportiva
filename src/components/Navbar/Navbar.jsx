"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black text-white py-4 px-6 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold tracking-wide">
        <Link href="/">
          Sport<span className="text-green-400">Zone</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl focus:outline-none"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wide font-bold">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`cursor-pointer transition duration-300 ${
                pathname === item.href
                  ? "text-green-400"
                  : "hover:text-green-400"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 p-6 md:hidden shadow-lg"
          >
            {navItems.map((item) => (
              <li key={item.name} onClick={toggleMenu}>
                <Link
                  href={item.href}
                  className={`cursor-pointer transition duration-300 ${
                    pathname === item.href
                      ? "text-green-400"
                      : "hover:text-green-400"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
