import Logo from "./navBar/Logo";
import { NavBar } from "./navBar/NavBar";

export const Header = () => {
  return (
    <header className="bg-black flex place-content-between lg:h-[10vh] lg:px-20 sm:px-7 px-4 font-redhat h-[8vh]">
      <Logo />
      <NavBar />
    </header>
  );
};
