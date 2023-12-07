import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface HostVansType {
  name: string;
  id: string;
  description: string;
  imageUrl: string;
  price: number;
  type: string;
}
const HostVans = () => {
  const [hostVans, setHostVans] = useState<HostVansType[]>([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        setHostVans(data.vans);
      });
  }, []);
  return (
    <>
      <div className="flex justify-between px-[3rem] pb-[1rem]">
        <p className="text-4xl font-bold">Your listed vans</p>
        <button className="font-semibold">view all</button>
      </div>
      <div className="flex flex-col">
        {hostVans.length ? (
          hostVans.map((oneHostVan) => (
            <Link
              to={oneHostVan.id}
              className="flex flex-col px-[1rem] py-[2rem]"
            >
              <div className="flex gap-[2rem] items-center bg-[#ffffff] rounded-2xl px-[3rem] py-[3rem]">
                <img
                  className="w-[10rem] aspect-square"
                  src={oneHostVan.imageUrl}
                  alt=""
                />
                <div>
                  <p className="font-bold text-2xl">{oneHostVan.name}</p>
                  <p className="font-medium text-xl">${oneHostVan.price}/day</p>
                </div>
                {/* <button className="font-semibold  ml-auto">Edit</button> */}
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-4xl text-center pt-32 font-black text-[#e17654]">
            Loading...
          </h1>
        )}
      </div>
    </>
  );
};

export default HostVans;
