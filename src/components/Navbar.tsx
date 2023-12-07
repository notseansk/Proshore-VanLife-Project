import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-10">
        <div className="nav-logo">
          <NavLink className=" font-black leading-10 text-2xl" to="/">
            #VANLIFE
          </NavLink>
        </div>
        <div className="nav-items flex gap-4">
          <NavLink
            className=" font-semibold text-base text-[#4d4d4d] leading-6 not-italic focus:underline"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className=" font-semibold text-base text-[#4d4d4d] leading-6 not-italic focus:underline"
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            className=" font-semibold text-base text-[#4d4d4d] leading-6 not-italic focus:underline"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className=" font-semibold text-base text-[#4d4d4d] leading-6 not-italic focus:underline"
            to="/vans"
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
