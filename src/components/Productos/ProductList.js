"use client";

import Filtros from "@/components/Inicio/Products/Filtros";
import ProductCard from "@/components/Inicio/Products/ProductCard";
import Categorias from "@/components/Productos/Categorias";
import { useProductStore } from "@/store/productStore";
import { useState } from "react";

export default function ProductosList() {
  const productos = useProductStore((state) => state.productos);
  const filtroNombre = useProductStore((state) => state.filtroNombre);
  const precioMin = useProductStore((state) => state.precioMin);
  const precioMax = useProductStore((state) => state.precioMax);
  const setFiltroNombre = useProductStore((state) => state.setFiltroNombre);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  const categorias = {
    "": "Todos los Productos",
    hombres: "Ropa para Hombres",
    mujeres: "Ropa para Mujeres",
    calzado: "Calzado Deportivo",
    accesorios: "Accesorios",
  };

  const productosFiltrados = productos.filter((prod) => {
    const matchNombre = prod.name
      .toLowerCase()
      .includes(filtroNombre.toLowerCase());
    const matchPrecio = prod.price >= precioMin && prod.price <= precioMax;
    const matchCategoria =
      categoriaSeleccionada === "" || prod.category === categoriaSeleccionada;
    return matchNombre && matchPrecio && matchCategoria;
  });

  const limpiarFiltros = () => {
    setCategoriaSeleccionada("");
    setFiltroNombre("");
  };

  return (
    <>
      <Categorias setCategoriaSeleccionada={setCategoriaSeleccionada} />

      {/* Subtítulo de la Categoría Seleccionada */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          {categorias[categoriaSeleccionada] || "Todos los Productos"}
        </h2>
        <p className="text-gray-500 mt-2">
          Mostrando {productosFiltrados.length} productos
        </p>
      </div>

      <Filtros />
      <div className="flex justify-end mb-4">
        <button
          onClick={limpiarFiltros}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Ver Todos
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
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
    </>
  );
}
