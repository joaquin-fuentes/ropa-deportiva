import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductCard({ product }) {
  const whatsappNumber = "543816097754";

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-300"
        width={1000}
        height={1000}
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-500 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-bold">${product.price}</span>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola!%20Estoy%20interesado%20en%20el%20producto%20${encodeURIComponent(
              product.name
            )}%20que%20cuesta%20$${product.price}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer bg-black text-white px-4 py-2 text-sm rounded-lg hover:bg-green-500 hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <FaWhatsapp size={18} className="text-green-400" />
            Enviar Whatsapp
          </a>
        </div>
      </div>
    </article>
  );
}
