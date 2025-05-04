"use client";

import Image from "next/image";

const testimonios = [
  {
    nombre: "María Gómez",
    opinion:
      "Excelente calidad y atención. Compré unas zapatillas y llegaron en 48 horas. ¡Súper recomendado!",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg",
  },
  {
    nombre: "Lucas Fernández",
    opinion:
      "Muy buena experiencia, pude cambiar un producto sin problemas. Volvería a comprar.",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg",
  },
  {
    nombre: "Camila Rivas",
    opinion:
      "La ropa es cómoda y se nota que es de buena calidad. Me encantó el diseño también.",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/013/042/571/non_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg",
  },
];

export default function Testimonios() {
  return (
    <section className="my-20 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold inline-block relative after:content-[''] after:block after:w-32 after:h-1 after:bg-green-400 after:mt-2 after:ml-0">
          Lo que dicen nuestros clientes
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonios.map((t, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <Image
              src={t.avatar}
              alt={`Avatar de ${t.nombre}`}
              className="w-20 h-20 rounded-full object-cover mb-4"
              loading="lazy"
              width={1000}
              height={1000}
            />
            <p className="text-gray-300 text-sm mb-4 italic">"{t.opinion}"</p>
            <h3 className="font-semibold text-base text-gray-500">
              {t.nombre}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
