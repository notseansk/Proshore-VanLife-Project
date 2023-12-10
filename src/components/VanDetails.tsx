import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
type TypeVan = {
  [key: string]: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    type: string;
  };
};

const VanDetails = () => {
  const searchObject = useLocation();
  // console.log(searchObject);
  const search = searchObject.state ? searchObject.state.searchQuery : "";
  // const type = searchObject.state ? searchObject.state.type : "";
  const params = useParams();
  const [details, setDetails] = useState<TypeVan>({});
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      })
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <>
      {Object.keys(details).length ? (
        <div className="h-screen px-[200px]">
          <Link to={`..${search}`} relative="path">
            <p className="font-light text-xm my-6">
              &lt;-&nbsp;
              <span className="underline">
                {search === "?"
                  ? "Back to all vans"
                  : `Back to ${details.vans.type} vans`}
              </span>
            </p>
          </Link>
          {/* -----------DIV-> VAN IMAGE SECTION & DETAILS SECTION SIDE BY SIDE---------- */}
          <div className="grid grid-cols-2 gap-12">
            {/* -------DIV-> IMAGE DIV-------- */}
            <div className="aspect-square">
              <img
                className="rounded-2xl shadow-2xl"
                src={details.vans.imageUrl}
                alt="van image"
              />
            </div>
            {/* -------DIV-> DETAILS DIV-------- */}

            <div>
              <h1 className=" text-6xl font-bold">{details.vans.name}</h1>
              <div className="flex justify-start items-center gap-[1.2rem]">
                <p className="text-3xl font-semibold">${details.vans.price}</p>
                <p
                  className={
                    details.vans.type === "rugged"
                      ? `bg-ruggedColor
           rounded-lg font-semibold text-base py-[0.20rem] px-[0.90rem] w-max text-white my-4`
                      : details.vans.type === "simple"
                      ? `bg-simpleColor
              rounded-lg font-semibold text-base py-[0.20rem] px-[0.90rem] w-max text-white my-4`
                      : `bg-luxuryColor
              rounded-lg font-semibold text-base py-[0.20rem] px-[0.90rem] w-max text-white my-4`
                  }
                >
                  {details.vans.type}
                </p>
              </div>
              <p className="font-normal pt-[1rem]">
                {details.vans.description}
              </p>
              <button className="bg-[#FF8C38] text-[#ffffff] px-[4rem] py-[0.5rem] text-lg font-semibold tracking-[0.03rem] rounded-lg  mt-[1rem]">
                Rent this van
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VanDetails;
