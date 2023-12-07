import star from "../../assets/star1.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      {/* --------first box containing welcome text-------- */}
      <div className="flex flex-col gap-6 bg-[#FFEAD0] px-[3rem] py-[2rem] mt-[2.2rem] ">
        <h2 className="font-bold text-6xl">Welcome!</h2>
        <div className="flex justify-between">
          <p>
            Income last <span className="underline font-semibold">30 days</span>
          </p>
          <button className="font-semibold">Details</button>
        </div>
        <p className="font-bold text-6xl">$2,260</p>
      </div>
      {/* --------second box containing review score -------- */}
      <div className="bg-[#FFDDB2] flex items-center gap-[1.6rem] px-[3rem] py-[4rem] ">
        <p className="text-2xl font-semibold ">Review score</p>
        <div className="flex items-center gap-[0.2rem]">
          <img src={star} alt="rating star" />
          <p className="text-2xl ">
            <span className="font-semibold">5.0</span>
            /5
          </p>
        </div>
        <button className="ml-auto font-semibold">Details</button>
      </div>
      {/* --------Third box containing Your listed vans -------- */}
      {/* <div className="py-[8rem]">
        <div className="flex justify-between px-[3rem] pb-[1rem]">
          <p className="text-4xl font-bold">Your listed vans</p>
          <button className="font-semibold">view all</button>
        </div>
        <div className="flex flex-col gap-6 px-[1rem] py-[2rem]">
          <div className="flex gap-[2rem] items-center bg-[#ffffff] rounded-2xl px-[3rem] py-[3rem]">
            <img className="w-[10rem] aspect-square" src={van} alt="" />
            <div>
              <p className="font-bold text-2xl">Modest Explorer</p>
              <p className="font-medium text-xl">$60/day</p>
            </div>
            <button className="font-semibold  ml-auto">Edit</button>
          </div>
          <div className="flex gap-[2rem] items-center bg-[#ffffff] rounded-2xl px-[3rem] py-[3rem]">
            <img className="w-[10rem] aspect-square" src={van} alt="" />
            <div>
              <p className="font-bold text-2xl">Modest Explorer</p>
              <p className="font-medium text-xl">$60/day</p>
            </div>
            <button className="font-semibold  ml-auto">Edit</button>
          </div>
          <div className="flex gap-[2rem] items-center bg-[#ffffff] rounded-2xl px-[3rem] py-[3rem]">
            <img className="w-[10rem] aspect-square" src={van} alt="" />
            <div>
              <p className="font-bold text-2xl">Modest Explorer</p>
              <p className="font-medium text-xl">$60/day</p>
            </div>
            <button className="font-semibold  ml-auto">Edit</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
