"use client";

import { useState } from "react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setError("Por favor, completa todos los campos.");
      setSuccess("");
      return;
    }

    if (!validarEmail(email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess(
      "Gracias por tu mensaje. Esta función está deshabilitada por ahora."
    );

    // Limpiar los campos
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black rounded-2xl shadow-lg p-8 flex flex-col gap-6"
    >
      <div>
        <label className="text-sm font-semibold">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Correo Electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">Mensaje</label>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={5}
          className="w-full p-3 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      <button
        type="submit"
        className="bg-black text-white py-3 rounded-lg hover:bg-green-500 hover:text-black transition-colors duration-300 cursor-pointer"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
