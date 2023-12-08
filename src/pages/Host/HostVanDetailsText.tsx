import { useOutletContext } from "react-router-dom";
const HostVanDetailsText = () => {
  // type HostVansDetailsType = [name: string, type: string, description: string];
  type HostVansDetailsTextType = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    type: string;
  };
  // const [name, type, description] = useOutletContext() as HostVansDetailsType;
  const { name, description, type } =
    useOutletContext() as HostVansDetailsTextType;

  return (
    <div className="py-14">
      <h1 className="py-[8px]">
        <span className="font-bold text-md ">Name:</span>
        &nbsp;{name}
      </h1>
      <p className="py-[8px]">
        <span className="font-bold text-md ">Type:</span>
        &nbsp;{type}
      </p>
      <p className="py-[8px]">
        <span className="font-bold text-md ">Description:</span>
        &nbsp;{description}
      </p>
    </div>
  );
};

export default HostVanDetailsText;
