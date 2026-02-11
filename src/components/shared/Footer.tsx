import { navLinks } from "@/consts/links";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-nav text-white font-custom flex flex-col md:flex-row items-center justify-around p-4 ">
      <nav className="flex flex-col md:flex-row gap-4 p-2 text-center ">
        <Link key={navLinks[0].id} to={navLinks[0].href}>
          {navLinks[0].title}
        </Link>
        <Link key={navLinks[1].id} to={navLinks[1].href}>
          {navLinks[1].title}
        </Link>
        <Link key={navLinks[2].id} to={navLinks[2].href}>
          {navLinks[2].title}
        </Link>
      </nav>
      <nav className="flex items-center gap-4 my-2">
        <div className="flex items-center gap-2">
          <FaPhoneAlt></FaPhoneAlt>
          <p>+34 123456789</p>
        </div>
        <div className="flex items-center gap-2">
          <IoIosMail></IoIosMail>
          <p>micorreo@noreply.com</p>
        </div>
      </nav>
    </footer>
  );
};
