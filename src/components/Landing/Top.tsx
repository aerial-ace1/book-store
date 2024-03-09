import topbg from "../../assets/topbg.svg";
import topPeople from "../../assets/topPeople.svg";
import topEllipse from "../../assets/topellipse.svg";
import Navbar from "./Navbar";
import { Search } from "./Search";
import Mid from "./Mid";

const Top = () => {
  return (
    <div
      id="home"
      className="bg-transparent h-[100vh] w-[100vw] m-0 p-0 relative"
    >
      <img
        src={topbg}
        alt="topbg"
        className="h-[100vh] w-[100vw] object-cover -z-10 absolute top-0 left-0"
      />
      <Navbar />
      <div className="pt-[10rem] w-full height-full flex flex-wrap flex-row px-4 items-center justify-center">
        <div className="lg:w-[35vw]">
          <div className="text-[2rem] text-center lg:text-left lg:text-[3.5rem] font-medium">
            The <span className="text-[#FF7426]">Smart</span>
            <br /> choice for the <span className="text-[#FF7426]">Future</span>
          </div>
          <div className="hidden lg:block font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div className="relative lg:w-[45vw]">
          <img src={topPeople} className="z-1" alt="topPeople" />
          <img
            src={topEllipse}
            className="absolute top-0 h-[10rem] right-0 z-0"
            alt="topEllipse"
          />
        </div>
      </div>
      <Mid />
    </div>
  );
};

export default Top;
