import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.slug}`);
  };

  return (
    <div className="min-w-[240px] max-w-full snap-start shrink-0 bg-white rounded-lg shadow p-4">
      <img
        src={product.gallery?.[0].image}
        alt={`Imagen ${product.name}`}
        className="w-full h-52 object-contain mb-4"
      />
      <h3 className="text-base font-semibold leading-tight">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="font-bold text-lg mt-2 mb-4">
        S/ {product.price.toFixed(2)}
      </p>
      <button
        onClick={handleClick}
        className="w-full border border-black py-2 text-sm hover:bg-black hover:text-white transition cursor-pointer"
      >
        SELECCIONAR OPCIONES
      </button>
    </div>
  );
}
