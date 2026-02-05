import { NavLink } from "react-router";
import { navLinks } from "../../consts/links";

export const NavBar = () => {
  return (
    <nav className="h-26 bg-nav w-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" className="h-24 w-24 relative " />
          <img
            src="/title.png"
            alt="Mi gran aventura pokemon Tirulina"
            className="h-20"
          />
        </div>
        <div className="mx-20 flex items-center justify-around">
          {navLinks.map((link) =>
            link.title !== "Glosario" ? (
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
            ) : (
              <button className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-cyan-500 transition-all duration-300">
                Glosario
              </button>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};
