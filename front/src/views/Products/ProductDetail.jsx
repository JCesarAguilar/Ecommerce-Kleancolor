import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { P1 } from "../../components/common/Typography";
import { PATHROUTES } from "../../helpers/NavItems";
import products from "../../helpers/ProductsData";
import BackButton from "../../components/common/BackButton";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const product = products.find((product) => product.slug === slug);

  const [mainImage, setMainImage] = useState(
    product.gallery?.[0] || { image: product.image, colorName: "Default" }
  );

  if (!product) {
    return <P1 className="text-center mt-20">Producto no encontrado</P1>;
  }

  const handleClick = () => {
    navigate(PATHROUTES.CONTACT);
  };

  return (
    <div>
      <BackButton />
      <div className="max-w-7xl mx-auto lg:pt-5 lg:pb-15 grid grid-cols-1 md:grid-cols-2 gap-8 pb-5">
        <div>
          <img
            src={mainImage.image}
            alt={product.name}
            className="w-full h-[500px] object-contain px-6 lg:px-0"
          />
          {product.gallery.length > 1 ? (
            <div className="flex gap-2 lg:mt-10 lg:gap-5 justify-center ">
              {product.gallery?.map((variant, index) => (
                <img
                  key={index}
                  src={variant.image}
                  alt={`Vista ${index + 1}`}
                  onClick={() => setMainImage(variant)}
                  className={`lg:w-20 lg:h-20 object-contain cursor-pointer w-15 h-15 rounded border 
      ${mainImage === variant ? "border-[#ff33b6]" : "border-transparent"}`}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="px-6 pb-10 flex flex-col justify-center mt-4 lg:mt-0 lg:gap-5 gap-3">
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
          <div>
            <h4 className="font-bold mb-2 text-gray-900">Descripción</h4>
            <P1 className="text-gray-700 mb-6 text-justify">
              {product.description}
            </P1>
            {product.gallery.length > 1 && (
              <div className="flex gap-3 items-center mb-5">
                <p className="font-bold text-gray-900">Tono:</p>
                <P1>{mainImage.colorName}</P1>
              </div>
            )}
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
