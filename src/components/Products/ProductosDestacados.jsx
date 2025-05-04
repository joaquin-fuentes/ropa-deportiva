"use client";

import { useProductStore } from "@/store/productStore";
import ProductCard from "@/components/Products/ProductCard";

export default function ProductosDestacados() {
  const productos = useProductStore((state) => state.productos);

  return (
    <section className="my-12">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Productos Destacados
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {productos.map((prod, i) => (
          <ProductCard key={i} product={prod} />
        ))}
      </div>
    </section>
  );
}
