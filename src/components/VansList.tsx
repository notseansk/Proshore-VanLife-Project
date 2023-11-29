interface Props {
  name: string;
  price: number;
  imageUrl: string;
  type: string;
}
const VansList = ({ name, price, imageUrl, type }: Props) => {
  return (
    <div className="van1 w-max p-10">
      <div className={"w-[240px] aspect-square rounded-lg"}>
        <img className="rounded-lg" src={imageUrl} alt="not found" />
      </div>
      <div className="flex flex-row text-xl font-semibold justify-between item-center  leading-8 text-[#161616] pt-4">
        <h2>{name}</h2>
        <h2>${price}</h2>
      </div>
      <div className="flex flex-row justify-between text-[#161616]">
        <button
          className={`rounded-lg font-semibold text-base py-[0.20rem] px-[0.90rem] text-white bg-[${
            type === "simple"
              ? "#E17654"
              : type === "rugged"
              ? "#115E59"
              : "#161616"
          }] mt-4`}
        >
          {type}
        </button>
        <p className="text-[0.9rem] mt-[-0.7rem]">/day</p>
      </div>
    </div>
  );
};

export default VansList;
