"use client";

import Image from "next/image";

const categorias = [
  {
    titulo: "Todos",
    imagen: "/favicon.png",
    category: "",
  },
  {
    titulo: "Ropa para Hombres",
    imagen:
      "https://i.pinimg.com/736x/67/63/7c/67637c485b8af38a51fca014aa4fcf23.jpg",
    category: "hombres",
  },
  {
    titulo: "Ropa para Mujeres",
    imagen:
      "https://i.pinimg.com/736x/88/90/db/8890dbf03e785a87b5fa7555a144a7f2.jpg",
    category: "mujeres",
  },
  {
    titulo: "Calzado Deportivo",
    imagen:
      "https://i.pinimg.com/736x/b1/9a/04/b19a049020d28c8377a866dafae79b91.jpg",
    category: "calzado",
  },
  {
    titulo: "Accesorios",
    imagen:
      "https://i.pinimg.com/736x/fe/f4/43/fef443271005f67e8b475d111f70c781.jpg",
    category: "accesorios",
  },
];

export default function Categorias({ setCategoriaSeleccionada }) {
  return (
    <section className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold inline-block relative after:content-[''] after:block after:w-32 after:h-1 after:bg-green-400 after:mt-2 after:ml-0">
          Explora por Categoría
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {categorias.map((cat, i) => (
          <div
            key={i}
            onClick={() => setCategoriaSeleccionada(cat.category)}
            className="relative rounded-xl overflow-hidden group shadow-lg cursor-pointer"
          >
            <Image
              src={cat.imagen}
              alt={cat.titulo}
              height={1000}
              width={1000}
              className="w-full h-64 object-cover group-hover:scale-105 group-hover:brightness-75 transition-transform duration-300 ease-in-out"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 group-hover:bg-black/50 transition">
              <h3 className="text-xl font-bold mb-2 text-center">
                {cat.titulo}
              </h3>
              <button className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-300 transition cursor-pointer">
                Ver productos
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
