import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const NavLink = ({ id, title }) => (
  <li className="hover:text-white">
    <a href={`#${id}`}>{title}</a>
  </li>
);

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className="w-full py-8 flex justify-between items-center gap-x-4 max-w-screen-lg">
      <div className="w-48">
        <img src={logo} alt={logo} className="brightness-[5]" />
      </div>
      <ul className="hidden sm:flex flex-row gap-x-4  text-dimWhite text-lg font-bold">
        {navLinks.map((navLink) => (
          <NavLink {...navLink} />
        ))}
      </ul>
      <div className="block sm:hidden relative">
        <button
          className="w-8"
          onClick={() => {
            setMenuToggle((prev) => !prev);
          }}>
          <img src={menuToggle ? close : menu} alt={menuToggle ? close : menu} />
        </button>
        {menuToggle && (
          <ul
            className="absolute w-48 right-0 top-16 bg-gray-600 p-8 flex flex-col gap-y-4 bg-gray-gradient rounded-xl text-dimWhite text-lg font-bold animate-slideTop"
            onClick={(e) => {
              if (e.target.tagName === "A") {
                setMenuToggle(false);
              }
            }}>
            {navLinks.map((navLink) => (
              <NavLink {...navLink} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
