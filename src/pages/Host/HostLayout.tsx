import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className="px-[200px]">
      <nav className="flex gap-12 text-lg font-medium mt-[2rem] mb-[3rem]">
        <NavLink className="underline focus:font-bold " to=".">
          Dashboard
        </NavLink>
        <NavLink className="underline focus:font-bold" to="income">
          Income
        </NavLink>
        <NavLink className="underline focus:font-bold" to="vans">
          Vans
        </NavLink>
        <NavLink className="underline focus:font-bold" to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
