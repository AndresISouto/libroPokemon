import { navLinks } from "@/consts/links";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-4 bg-nav text-white mb-0 font-custom">
      <article className="col-start-2 p-4 m-4 flex flex-col items-center">
        <h4 className="font-semibold text-xl p-2 m-2">Links</h4>
        <ul className="flex flex-col items-center">
          {navLinks.map((link) => (
            <li className="p-2">
              <Link key={link.id} to={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <article className="col-start-3 p-4 m-4 flex flex-col items-center">
        <h4 className="font-semibold text-xl p-2 m-2">Contacto</h4>
        <ul className="flex flex-col items-center gap-2">
          <li className="flex items-center gap-2">
            <FaPhoneAlt /> 123 456 789
          </li>
          <li className="flex items-center gap-2">
            <IoIosMail /> noreply@notenemoscorreo.com
          </li>
        </ul>
      </article>
    </footer>
  );
};
