import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className="px-[200px]">
      <nav className="flex gap-12 text-lg font-medium mt-[2rem] mb-[3rem]">
        <NavLink className="underline focus:font-bold " to="/host">
          Dashboard
        </NavLink>
        <NavLink className="underline focus:font-bold" to="/host/income">
          Income
        </NavLink>
        <NavLink className="underline focus:font-bold" to="/host/vans">
          Vans
        </NavLink>
        <NavLink className="underline focus:font-bold" to="/host/reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
