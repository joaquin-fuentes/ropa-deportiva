"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20 px-6 pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-green-400">SportZone</h3>
          <p className="text-gray-400">
            Ropa deportiva para un rendimiento superior. Calidad, diseño y
            confort para cada entrenamiento.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-semibold mb-4">Navegación</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <ul className="text-gray-400 space-y-2">
            <li>Email: contacto@sportzone.com</li>
            <li>Tel: +54 381 123 4567</li>
            <li>Horario: Lunes a Viernes, 9 a 18 h</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="font-semibold mb-4">Seguinos</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-green-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-400 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-6" />

      <p className="text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} SportZone. Todos los derechos reservados.
      </p>
    </footer>
  );
}
