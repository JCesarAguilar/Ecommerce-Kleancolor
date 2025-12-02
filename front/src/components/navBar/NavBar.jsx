import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../helpers/NavItems";
import { BurgerMenu } from "./BurgerMenu";

export const NavBar = () => {
  return (
    <nav className="flex items-center">
      <BurgerMenu />
      <ul className="space-x-5 hidden lg:flex lg:items-center lg:gap-3">
        {NAV_ITEMS.map((item, index) => (
          <li
            key={index}
            className="hover:text-[#ff33b6] cursor-pointer text-white text-[20px]"
          >
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
