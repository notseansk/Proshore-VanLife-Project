import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="logo">
        <Link to="/">#VANLIFE</Link>
      </div>
      <div className="navlist">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        {/* <p className="text-xl font-bold text-red-500">temporary</p> */}
      </div>
    </nav>
  );
};

export default Navbar;
