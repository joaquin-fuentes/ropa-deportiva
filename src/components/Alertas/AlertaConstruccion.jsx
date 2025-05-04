"use client";

import { useState } from "react";
import { FaTools } from "react-icons/fa";

export default function AlertaConstruccion() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
      <FaTools className="text-lg" />
      <span className="text-sm font-semibold">Sitio en construcción</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 text-black hover:text-red-600 text-xs font-bold cursor-pointer"
        aria-label="Cerrar mensaje"
      >
        ×
      </button>
    </div>
  );
}
