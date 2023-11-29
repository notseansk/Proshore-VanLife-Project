import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="about container m-auto ">
      <div className="m-auto h-[270px] w-[700px] bg-[url('./assets/about.jpg')] bg-no-repeat bg-top bg-cover"></div>
      <h1 className=" text-center m-12 text-4xl leading-10 not-italic font-bold ">
        Don't squeeze in a sedan when you could relax in a van.
      </h1>
      <div className="flex flex-row gap-16 justify-center">
        <div className=" flex flex-col flex-1 gap-4">
          <p className=" text-base font-medium">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className=" text-base font-medium">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className=" bg-[#FFCC8D] rounded-[0.3125rem] p-8 mb-[3.5rem] flex gap-8 flex-col">
          <p className="text-2xl font-bold text-[#161616]">
            Your destination is waiting. Your van is ready.
          </p>
          <Link
            className=" w-max font-bold text-base leading-6 text-white bg-black px-[1.38rem] py-[0.75rem] rounded-[0.625rem]"
            to="/vans"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
