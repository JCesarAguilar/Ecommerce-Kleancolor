import { P1, Title } from "../../components/common/Typography";
import ProductsList from "../../components/products/ProductsList";
import { useState } from "react";

const CATEGORIES = [
  "Todas",
  "Base",
  "Diluidores",
  "Iluminadores",
  "Rostro",
  "Sombras",
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="lg:max-w-[90vw] mx-auto px-4 lg:py-12 py-8">
      <div className="mb-8">
        <Title className="font-bold">Nuestros Productos</Title>
        <P1 className="text-gray-600 mt-2 ">
          ¡Echa un vistazo a nuestros catálogo!
        </P1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-8">
          <div>
            <h2 className="font-semibold mb-2">Category</h2>
            {CATEGORIES.map((cat) => (
              <label
                key={cat}
                className="flex items-center space-x-2 text-sm text-gray-700"
              >
                <input
                  type="checkbox"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => handleCategoryChange(cat)}
                  className="accent-[#ff33b6]"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </aside>

        <ProductsList selectedCategory={selectedCategory} />
      </div>
    </section>
  );
}
