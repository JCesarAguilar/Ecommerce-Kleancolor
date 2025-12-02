import logo from "../../assets/images/logos/Logo.png";

export default function Logo() {
  return (
    <img src={logo} alt="logo" className="w-45 h-auto object-contain sm:w-70" />
  );
}
