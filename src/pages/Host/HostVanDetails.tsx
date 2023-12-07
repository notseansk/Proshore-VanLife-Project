import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const HostVanDetails = () => {
  type HostVansDetailsType = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
  };
  // interface HostVansDetailsType {
  //   id: string;
  //   name: string;
  //   price: number;
  //   description: string;
  //   imageUrl: string;
  //   type: string;
  // }
  const param = useParams();
  const [hostVanDetails, setHostVanDetails] = useState(
    {} as HostVansDetailsType
  );
  useEffect(() => {
    fetch(`/api/host/vans/${param.id}`)
      .then((res) => res.json())
      .then((data) => {
        setHostVanDetails(data.vans[0]);
        console.log(hostVanDetails);
      });
  }, [param.id]);

  return (
    <div>
      {Object.keys(hostVanDetails).length ? (
        <div className="h-screen">
          <Link to="/host/vans">
            <p className="font-light text-xm my-6">
              &lt;-&nbsp;
              <span className="underline">Back to all vans</span>
            </p>
          </Link>
          {/* -----------DIV-> VAN IMAGE SECTION & DETAILS SECTION SIDE BY SIDE---------- */}
          <div className="grid grid-cols-2 gap-12 bg-white p-16 rounded-lg shadow-lg">
            {/* -------DIV-> IMAGE DIV-------- */}
            <div className="aspect-square">
              <img
                className="rounded-2xl shadow-2xl"
                src={hostVanDetails.imageUrl}
                alt="van image"
              />
            </div>
            {/* -------DIV-> hostVanDetails DIV-------- */}

            <div>
              <h1 className=" text-5xl font-bold">{hostVanDetails.name}</h1>
              <div className="flex justify-start items-center gap-[1.2rem]">
                <p className="text-3xl font-semibold">
                  ${hostVanDetails.price}
                </p>
                <p
                  className={
                    hostVanDetails.type === "rugged"
                      ? `bg-ruggedColor
       rounded-lg font-semibold text-base py-[0.20rem] px-[0.90rem] w-max text-white my-4`
                      : hostVanDetails.type === "simple"
                      ? `bg-simpleColor
          rounded-lg font-semibold text-base py-[0.20rem] px-[0.90rem] w-max text-white my-4`
                      : `bg-luxuryColor
          rounded-lg font-semibold text-base py-[0.20rem] px-[0.90rem] w-max text-white my-4`
                  }
                >
                  {hostVanDetails.type}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HostVanDetails;
