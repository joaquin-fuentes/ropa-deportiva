import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import AlertaConstruccion from "@/components/Alertas/AlertaConstruccion";

export const metadata = {
  title: "SportZone",
  description: "Descubrí nuestros productos destacados.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Navbar />
        <main className="px-4 md:px-12 py-6">{children}</main>
        <Footer />
        <AlertaConstruccion />
      </body>
    </html>
  );
}
