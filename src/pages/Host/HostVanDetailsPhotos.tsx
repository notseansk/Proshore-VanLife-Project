import { useOutletContext } from "react-router-dom";
const HostVanDetailsPhotos = () => {
  type HostVansDetailsType = [
    name: string,
    type: string,
    description: string,
    price: number,
    imageUrl: string
  ];

  const [name, type, description, price, imageUrl] =
    useOutletContext() as HostVansDetailsType;
  return (
    <div>
      <img
        className="w-[100px] mt-14 aspect-square rounded-md"
        src={imageUrl}
        alt="van image"
      />
    </div>
  );
};

export default HostVanDetailsPhotos;
