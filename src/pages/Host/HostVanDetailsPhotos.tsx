import { useOutletContext } from "react-router-dom";
const HostVanDetailsPhotos = () => {
  type HostVansDetailsPhotosType = {
    imageUrl: string;
  };

  const { imageUrl } = useOutletContext() as HostVansDetailsPhotosType;
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
