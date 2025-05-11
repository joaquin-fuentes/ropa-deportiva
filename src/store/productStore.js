import { create } from "zustand";

const productosMock = [
  {
    name: "Camiseta DryFit",
    description: "Ideal para entrenamientos intensos.",
    price: 6000,
    category: "hombres",
    destacado: true,
    image:
      "https://i.pinimg.com/736x/78/14/bb/7814bb46d9e6e00bbff58bc28dc82a6a.jpg",
  },
  {
    name: "Pantalón Training",
    description: "Cómodo y transpirable.",
    price: 4500,
    category: "hombres",
    destacado: true,
    image:
      "https://img.kwcdn.com/product/fancy/a477f596-66e0-4366-a21b-23c16d3985ce.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
  },
  {
    name: "Zapatillas Runner",
    description: "Livianas y resistentes.",
    price: 8900,
    category: "calzado",
    destacado: true,
    image:
      "https://i.pinimg.com/736x/e7/dd/68/e7dd680161e4d4527823ca685dd52ef8.jpg",
  },
  {
    name: "Leggings de Compresión",
    description: "Ajuste perfecto para tus entrenamientos.",
    price: 5000,
    category: "mujeres",
    destacado: true,
    image:
      "https://i.pinimg.com/736x/f5/e8/12/f5e812f27227020dd3aac4ba7bcca789.jpg",
  },
  {
    name: "Top Deportivo",
    description: "Soporte y comodidad.",
    price: 3500,
    category: "mujeres",
    destacado: true,
    image:
      "https://i.pinimg.com/736x/b4/7e/12/b47e1268f8892af2aeecee815e7c7ad2.jpg",
  },
  {
    name: "Shorts de Entrenamiento",
    description: "Libertad de movimiento.",
    price: 4000,
    category: "hombres",
    destacado: true,
    image:
      "https://acdn-us.mitiendanube.com/stores/306/659/products/wp_-267-df870554289263c54516980831391603-1024-1024.jpg",
  },
  {
    name: "Sudadera con Capucha",
    description: "Ideal para el calentamiento.",
    price: 6500,
    category: "hombres",
    destacado: true,
    image:
      "https://i.pinimg.com/736x/0b/3a/c1/0b3ac1c3bc58a2b6944fb3e83abf8852.jpg",
  },
  {
    name: "Chaqueta Cortavientos",
    description: "Protección contra el viento.",
    price: 7000,
    category: "hombres",
    destacado: true,
    image:
      "https://i.pinimg.com/736x/4f/2d/f4/4f2df472499bf614e0175c13248ff24e.jpg",
  },
  {
    name: "Gorra Deportiva",
    description: "Protección solar durante tus entrenamientos.",
    price: 2000,
    category: "accesorios",
    destacado: true,
    image:
      "https://i.pinimg.com/736x/b5/cc/ac/b5ccac1b2669c0e8d93b773f625d8be1.jpg",
  },
  {
    name: "Calcetines Técnicos",
    description: "Comodidad y transpirabilidad.",
    price: 1500,
    category: "accesorios",
    destacado: true,
    image:
      "https://i.pinimg.com/736x/9f/0e/48/9f0e48385d7bf42efbf779b520330e37.jpg",
  },
];

export default productosMock;

export const useProductStore = create((set, get) => ({
  productos: productosMock,
  filtroNombre: "",
  precioMin: 0,
  precioMax: 10000,

  setFiltroNombre: (nombre) => set({ filtroNombre: nombre }),
  setPrecioMin: (min) => set({ precioMin: min }),
  setPrecioMax: (max) => set({ precioMax: max }),

  getProductosFiltrados: () => {
    const { productos, filtroNombre, precioMin, precioMax } = get();
    return productos.filter((prod) => {
      const matchNombre = prod.name
        .toLowerCase()
        .includes(filtroNombre.toLowerCase());
      const matchPrecio = prod.price >= precioMin && prod.price <= precioMax;
      return matchNombre && matchPrecio;
    });
  },
}));
