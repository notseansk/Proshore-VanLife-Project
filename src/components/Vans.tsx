import { useEffect, useState } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import "../server.js";
import VansList from "./VansList.js";

//---------------------passing list of vans to vanslist component---------------------
const Vans = () => {
  interface VansType {
    name: string;
    id: string;
    description: string;
    imageUrl: string;
    price: number;
    type: string;
  }
  const [vansList, setVansList] = useState<VansType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const tempVansList = vansList.filter(
  //   (one) => one.type.toLowerCase() === filterTypeOfVan
  // );
  const filterTypeOfVan = searchParams.get("type");
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVansList(
          filterTypeOfVan
            ? data.vans.filter(
                (one: any) => one.type.toLowerCase() === filterTypeOfVan
              )
            : data.vans
        );
      });
  }, [vansList]);

  return (
    <div className="vans container m-auto">
      <h1 className="font-bold text-4xl m-8 ">Explore our van option</h1>
      <div className="flex gap-4 justify-center items-end">
        {/* -------updating search params using link tag------- */}
        <NavLink
          to="?type=simple"
          className="bg-inactiveButton
           rounded-lg font-semibold text-base py-[0.4rem] px-[1.6rem] text-inactiveText mt-4 focus:bg-simpleColor focus:text-white hover:text-white hover:bg-simpleColor"
        >
          simple
        </NavLink>
        {/* -------updating search params using setSearchParams methond on onClick method of button------- */}

        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className="bg-inactiveButton
           rounded-lg font-semibold text-base py-[0.4rem] px-[1.6rem] text-inactiveText mt-4 focus:bg-ruggedColor focus:text-white hover:text-white hover:bg-ruggedColor"
        >
          rugged
        </button>

        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className="bg-inactiveButton
           rounded-lg font-semibold text-base py-[0.4rem] px-[1.6rem] text-inactiveText mt-4 focus:bg-luxuryColor focus:text-white hover:text-white hover:bg-luxuryColor"
        >
          luxury
        </button>
        {filterTypeOfVan ? (
          <button
            type="button"
            onClick={() => {
              setSearchParams({});
            }}
            className="font-light underline"
          >
            clear filters
          </button>
        ) : null}
      </div>
      <div className="list-vans flex flex-row flex-wrap gap-5 items-center justify-center">
        {vansList ? (
          vansList.map((one: VansType) => (
            <VansList
              key={one.id}
              id={one.id}
              name={one.name}
              price={one.price}
              imageUrl={one.imageUrl}
              type={one.type}
            />
          ))
        ) : (
          <h1 className="text-4xl my-[180px] font-black text-[#e17654]">
            Loading...
          </h1>
        )}
      </div>
    </div>
  );
};

export default Vans;
