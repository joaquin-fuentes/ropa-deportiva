"use client";

import { useProductStore } from "@/store/productStore";
import ProductCard from "@/components/Products/ProductCard";
import Filtros from "@/components/Products/Filtros";

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
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Productos Destacados
      </h2>
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
