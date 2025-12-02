import ProductCard from "../home/ProductCard";
import products from "../../helpers/ProductsData";
import "@fontsource/lavishly-yours";
import { Title } from "../common/Typography";

export default function FeaturedProducts() {
  return (
    <section className="lg:py-20 pt-7 pb-10 px-4 bg-[#fafafa]">
      <Title className="lg:mb-10 text-center mb-6">
        Conoce nuestros <span className="font-bold">Productos</span>
      </Title>

      <div className="flex overflow-x-auto gap-5 scroll-smooth snap-x snap-mandatory scrollbar-hide px-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="snap-center shrink-0 w-[280px] sm:w-[300px]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
