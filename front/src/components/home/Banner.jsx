import banner from "../../assets/images/banner/kcPortada1.jpg";

export default function Banner() {
  return (
    <div className="w-full">
      <img
        src={banner}
        alt="Banner Desktop"
        className="hidden sm:block w-full object-cover"
      />

      <img
        src="https://res.cloudinary.com/dajizrpyk/image/upload/v1764815595/Captura_de_pantalla_2025-12-03_a_la_s_9.32.18_p._m._aaw4zo.png"
        alt="Baner Mobile"
        className="block sm:hidden w-full object-cover"
      />
    </div>
  );
}
