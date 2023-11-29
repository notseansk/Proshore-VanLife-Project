const Home = () => {
  return (
    <div className="home relative h-[508px] flex flex-col justify-evenly items-center gap-12 py-16 bg-no-repeat bg-top bg-[url('./assets/bg2.jpg')] bg-cover">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-40 "></div>
      <div className="hero flex flex-col justify-between items-center gap-6 z-10">
        <h1 className=" text-4xl font-extrabold leading-10 not-italic text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-white">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
      </div>
      <button className=" text-white text-base not-italic px-36 py-2 font-bold bg-[#FF8C38] rounded-md leading-8 z-10  hover:scale-110 transition-all">
        Find your van
      </button>
    </div>
  );
};

export default Home;
