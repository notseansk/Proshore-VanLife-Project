import { useOutletContext } from "react-router-dom";
const HostVanDetailsPricing = () => {
  type HostVansDetailsType = [
    name: string,
    type: string,
    description: string,
    price: number
  ];

  const [name, type, description, price] =
    useOutletContext() as HostVansDetailsType;
  return (
    <div className="flex gap-1 py-14 items-center">
      <p className="text-2xl font-semibold">${price}</p>
      <span className="text-slate-600">/day</span>
    </div>
  );
};

export default HostVanDetailsPricing;
