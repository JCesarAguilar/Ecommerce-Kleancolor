import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { P1 } from "../../components/common/Typography";
import { PATHROUTES } from "../../helpers/NavItems";
import products from "../../helpers/ProductsData";
import BackButton from "../../components/common/BackButton";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <P1 className="text-center mt-20">Producto no encontrado</P1>;
  }

  const handleClick = () => {
    navigate(PATHROUTES.CONTACT);
  };

  return (
    <div>
      <BackButton />
      <div className="max-w-7xl mx-auto lg:pt-10 lg:pb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-contain rounded-lg"
          />
          {/* <div className="flex gap-2 mt-4">
          {product.gallery?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Vista ${i + 1}`}
              className="w-20 h-20 object-contain border rounded cursor-pointer"
            />
          ))}
        </div> */}
        </div>

        <div className="px-6 pb-10">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            S/ {product.price.toFixed(2)}
          </p>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500 text-xl">
              {"★".repeat(Math.round(product.rating || 4))}
              {"☆".repeat(5 - Math.round(product.rating || 4))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.reviews?.length || 8} reseñas
            </span>
          </div>
          <h4 className="font-bold mb-2 text-gray-900">Descripción</h4>
          <P1 className="text-gray-700 mb-6 text-justify">
            {product.description}
          </P1>
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
            <div className="flex gap-3">
              {product.colors?.map((color, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 ${
                    color === product.selectedColor ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>
          <button
            onClick={handleClick}
            className="bg-[#ff33b6] hover:bg-pink-400 text-white py-3 px-6 rounded-lg text-sm font-medium cursor-pointer"
          >
            Hacer Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
