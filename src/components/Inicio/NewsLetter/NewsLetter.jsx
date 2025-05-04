"use client";

export default function Newsletter() {
  return (
    <section className="my-20 px-4">
      <div className="bg-black text-white p-10 rounded-2xl shadow-lg text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold relative inline-block after:content-[''] after:block after:w-32 after:h-1 after:bg-green-400 after:mt-2 after:ml-0">
          ¡No te pierdas las novedades!
        </h2>
        <p className="mt-4 text-gray-300 max-w-md mx-auto">
          Suscribite y recibí ofertas exclusivas, lanzamientos y más directo a
          tu correo.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full px-4 py-2 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            required
          />
          <button
            type="submit"
            className="bg-green-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-green-300 transition cursor-pointer"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}
