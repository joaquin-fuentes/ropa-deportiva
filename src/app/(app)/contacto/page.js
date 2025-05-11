import ContactForm from "@/components/Contacto/ContactForm";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const metadata = {
  title: "Contacto | SportZone",
  description: "Ponete en contacto con nosotros.",
};

export default function ContactPage() {
  return (
    <section className="p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contactanos</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Si tienes alguna pregunta o simplemente quieres saludar, no dudes en
          enviarnos un mensaje.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario de Contacto */}
        <div>
          <ContactForm />
        </div>

        {/* Información de Contacto */}
        <div className="flex flex-col gap-8">
          {/* <Image
            src="/contacto-1.png"
            alt="Contacto"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg w-full h-80 object-cover object-top object-top"
          /> */}
          <Image
            src="/contacto-2.png"
            alt="Contacto"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg w-full h-80 object-cover"
          />
          <div className="bg-black text-white rounded-2xl p-8 shadow-lg flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <span>+54 9 381 123 4567</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-400 text-2xl" />
              <span>contacto@sportzone.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-400 text-2xl" />
              <span>San Miguel de Tucumán, Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
