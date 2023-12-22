import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <h1 className="text-6xl pt-44">PageNotFound</h1>
      <Link
        className="py-4 px-8 text-white font-semibold bg-black rounded-2xl"
        to="/"
      >
        Get back to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
