import ProductosList from "@/components/Productos/ProductList";

export const metadata = {
  title: "Productos | SportZone",
  description: "Explora nuestra amplia variedad de productos deportivos.",
};

export default function ProductosPage() {
  return (
    <section className="p-6">
      <ProductosList />
    </section>
  );
}
