"use client";

import { FaTruck, FaShieldAlt, FaSyncAlt, FaHeadset } from "react-icons/fa";

const beneficios = [
  {
    titulo: "Envíos a todo el país",
    descripcion: "Recibí tu pedido en tiempo récord en cualquier provincia.",
    icono: <FaTruck className="text-3xl text-green-400" />,
  },
  {
    titulo: "Pagos 100% seguros",
    descripcion: "Protegemos tus datos y aceptamos todos los medios de pago.",
    icono: <FaShieldAlt className="text-3xl text-green-400" />,
  },
  {
    titulo: "Cambios y devoluciones",
    descripcion: "Tenés hasta 15 días para realizar cambios sin costo.",
    icono: <FaSyncAlt className="text-3xl text-green-400" />,
  },
  {
    titulo: "Atención personalizada",
    descripcion: "Te ayudamos por WhatsApp, email o redes sociales.",
    icono: <FaHeadset className="text-3xl text-green-400" />,
  },
];

export default function Beneficios() {
  return (
    <section className="my-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold inline-block relative after:content-[''] after:block after:w-32 after:h-1 after:bg-green-400 after:mt-2 after:ml-0">
          ¿Por qué elegir SportZone?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {beneficios.map((b, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4 flex justify-center">{b.icono}</div>
            <h3 className="text-lg font-semibold mb-2">{b.titulo}</h3>
            <p className="text-sm text-gray-500">{b.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
