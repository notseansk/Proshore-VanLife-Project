import { useEffect, useState } from "react";
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

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVansList(data.vans);
      });
  }, []);

  return (
    <div className="vans container m-auto">
      <h1 className="font-bold text-4xl m-8 ">Explore our van option</h1>
      <div className="flex flex-row gap-4 justify-center items-end">
        <button
          type="button"
          className="bg-inactiveButton
           rounded-lg font-semibold text-base py-[0.4rem] px-[1.6rem] text-inactiveText mt-4"
        >
          simple
        </button>
        <button
          type="button"
          className="bg-inactiveButton
           rounded-lg font-semibold text-base py-[0.4rem] px-[1.6rem] text-inactiveText mt-4"
        >
          rugged
        </button>
        <button
          type="button"
          className="bg-inactiveButton
           rounded-lg font-semibold text-base py-[0.4rem] px-[1.6rem] text-inactiveText mt-4"
        >
          luxury
        </button>
        <button type="button" className="font-light underline">
          clear filters
        </button>
      </div>
      <div className="list-vans flex flex-row flex-wrap gap-5 items-center justify-center">
        {vansList.length > 0 ? (
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
