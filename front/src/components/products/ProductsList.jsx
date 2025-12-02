import ProductCard from "../home/ProductCard";
import products from "../../helpers/ProductsData";
import "@fontsource/lavishly-yours";

export default function ProductsList({ selectedCategory }) {
  const filteredProducts =
    selectedCategory === "Todas"
      ? products
      : products.filter((product) =>
          product.category
            .toLowerCase()
            .includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="bg-[#fafafa] border-2 border-dashed border-gray-300 lg:col-span-3 rounded-lg p-4 min-h-[400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No hay productos en esta categoría</p>
      )}
    </div>
  );
}
