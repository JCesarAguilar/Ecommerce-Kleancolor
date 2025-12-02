import { PiBuildingOffice } from "react-icons/pi";
import { MdOutlinePhone } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { P1, Title } from "../../components/common/Typography";

export default function Contact() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center bg-[#fafafa]">
      <div className="lg:w-1/2 flex flex-col lg:gap-6 lg:p-20 px-7 pt-7 pb-10 gap-3">
        <Title>Contáctanos</Title>
        <P1 className="text-gray-600 mb-2 ">
          ¿Tienes dudas, consultas o deseas hacer un pedido? <br />
          Estamos aquí para ayudarte. <br />
          Escríbenos a cualquiera de los medios disponibles.
        </P1>
        <div className="space-y-4 text-gray-700">
          <div className="flex gap-5 items-center">
            <PiBuildingOffice className="text-2xl text-[#ff33b6]" />
            <P1>Aquí va la dirección.</P1>
          </div>
          <div className="flex gap-5 items-center">
            <MdOutlinePhone className="text-2xl text-[#ff33b6]" />
            <P1>Aquí va el teléfono de contacto.</P1>
          </div>
          <div className="flex gap-5 items-center">
            <GoMail className="text-2xl text-[#ff33b6]" />
            <P1>Aquí va el email de contacto.</P1>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src="https://res.cloudinary.com/dajizrpyk/image/upload/v1764597105/56555891_342380079725577_7026783284730265600_n_leld12.jpg"
          alt="Imagen de contacto"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
