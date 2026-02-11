import { NavLink } from "react-router";
import { navLinks } from "../../consts/links";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className="h-26 bg-nav w-screen relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-24 w-24 relative " />
          <img
            src="/title.png"
            alt="Mi gran aventura pokemon Tirulina"
            className="h-20"
          />
        </div>
        <div className="mx-20 hidden md:flex items-center justify-around">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-600 px-3 py-2 rounded-md text-sm font-medium "
                  : "text-white px-3 py-2 rounded-md text-sm font-medium" +
                    " hover:text-cyan-500 transition-all duration-300"
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="relative">
          <GiHamburgerMenu
            size={24}
            className="md:hidden cursor-pointer text-white mr-4"
            onClick={() => setIsToggled(!isToggled)}
          />
          {isToggled && (
            <div className="absolute right-0 top-full w-full min-w-[140px] bg-nav shadow-lg z-50 py-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 text-sm font-medium text-cyan-600"
                      : "block px-4 py-2 text-sm font-medium text-white hover:text-cyan-500 transition-all duration-300"
                  }
                  onClick={() => setIsToggled(false)}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
