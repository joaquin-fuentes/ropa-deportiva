import ProductosDestacados from "@/components/Products/ProductosDestacados";

export const metadata = {
  title: "Inicio | SportZone",
  description: "Descubrí nuestros productos destacados.",
};

export default function Home() {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-[80vh] rounded-xl overflow-hidden shadow-lg"
        style={{ backgroundImage: `url('/assets/portada3.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Rendí al máximo
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Equipate con la mejor ropa deportiva del mercado
          </p>
          <button className="bg-green-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-300 transition">
            Ver productos
          </button>
        </div>
      </section>

      {/* Cliente */}
      <ProductosDestacados />
    </>
  );
}
