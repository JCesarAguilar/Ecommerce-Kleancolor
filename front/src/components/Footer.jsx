import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-pink-100 py-8 font-redhat flex flex-col justify-center gap-3">
      <div className="flex items-center justify-center gap-3 text-2xl">
        <Link to="https://www.instagram.com/kleancolorperu/">
          <BsInstagram />
        </Link>
        <Link to="https://www.facebook.com/KLEANCOLORPERU">
          <FaFacebook />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="text-center text-[14px] px-7 lg:text-[16px]">
          © 2025 KLEANCOLOR PERÚ. Todos los derechos reservados.
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
