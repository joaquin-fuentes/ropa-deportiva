"use client";

import { useProductStore } from "@/store/productStore";

export default function Filtros() {
  const filtroNombre = useProductStore((state) => state.filtroNombre);
  const precioMin = useProductStore((state) => state.precioMin);
  const precioMax = useProductStore((state) => state.precioMax);
  const setFiltroNombre = useProductStore((state) => state.setFiltroNombre);
  const setPrecioMin = useProductStore((state) => state.setPrecioMin);
  const setPrecioMax = useProductStore((state) => state.setPrecioMax);

  return (
    <section className="p-4 rounded-xl shadow-md mb-6 flex flex-col justify-around  md:flex-row gap-4 md:items-end">
      <div className="flex flex-col flex-1">
        <label className="text-sm mb-1">Buscar producto</label>
        <input
          type="text"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Precio mínimo</label>
          <input
            type="number"
            value={precioMin}
            onChange={(e) => setPrecioMin(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-md w-full md:w-32"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Precio máximo</label>
          <input
            type="number"
            value={precioMax}
            onChange={(e) => setPrecioMax(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-md w-full md:w-32"
          />
        </div>
      </div>
    </section>
  );
}
