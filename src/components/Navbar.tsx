import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-10">
      <div className="nav-logo">
        <Link className=" font-black leading-10 text-2xl" to="/">
          #VANLIFE
        </Link>
      </div>
      <div className="nav-items flex gap-4">
        <Link
          className=" font-semibold text-base text-[#4d4d4d] leading-6 not-italic focus:underline"
          to="/about"
        >
          About
        </Link>
        <Link
          className=" font-semibold text-base text-[#4d4d4d] leading-6 not-italic focus:underline"
          to="/vans"
        >
          Vans
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
