"use client";

import { useProductStore } from "@/store/productStore";
import ProductCard from "@/components/Inicio/Products/ProductCard";
import Filtros from "@/components/Inicio/Products/Filtros";

export default function ProductosDestacados() {
  const productos = useProductStore((state) => state.productos);
  const filtroNombre = useProductStore((state) => state.filtroNombre);
  const precioMin = useProductStore((state) => state.precioMin);
  const precioMax = useProductStore((state) => state.precioMax);

  const productosFiltrados = productos.filter((prod) => {
    const matchNombre = prod.name
      .toLowerCase()
      .includes(filtroNombre.toLowerCase());
    const matchPrecio = prod.price >= precioMin && prod.price <= precioMax;
    return matchNombre && matchPrecio;
  });

  return (
    <section className="my-12">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold inline-block relative after:content-[''] after:block after:w-32 after:h-1 after:bg-green-400 after:mt-2 after:ml-0">
          Productos Destacados
        </h2>
      </div>
      <Filtros />
      <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod, i) => (
            <ProductCard key={i} product={prod} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No se encontraron productos.
          </p>
        )}
      </div>
    </section>
  );
}
