import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Navbar />
        <main className="px-4 md:px-12 py-6">{children}</main>
      </body>
    </html>
  );
}
