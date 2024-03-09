import mid1 from "../../assets/mid1.svg";
import mid2 from "../../assets/mid2.svg";

const Mid = () => {
  return (
    <div className="absolute bg-[#4D2C5E] rounded-[30px] h-[12rem] lg:h-[15rem] w-[80vw] bottom-[-6rem] lg:bottom-[-7.5rem] left-[10vw] flex p-4 gap-8 items-center lg:justify-around overflow-x-auto">
      <div className=" flex items-start justify-center gap-4">
        <div>
          <img src={mid1} alt="mid1" className="h-[5rem]" />
        </div>
        <div className="w-[70vw] lg:w-[13rem]">
          <div className="text-[#fff] text-xl font-medium">
            Learn The Latest Skills
          </div>
          <div className="text-[rgba(255,255,255,0.6)] font-light text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a BC, making it over 2000 years old.
          </div>
        </div>
      </div>
      <div className=" flex items-start justify-center gap-4">
        <div>
          <img src={mid2} alt="mid1" className="h-[5rem]" />
        </div>
        <div className="w-[70vw] lg:w-[15rem]">
          <div className="text-[#fff] text-xl font-medium">
            Get Ready For a Career
          </div>
          <div className="text-[rgba(255,255,255,0.6)] font-light text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a BC, making it over 2000 years old.
          </div>
        </div>
      </div>
      <div className=" flex items-start justify-center gap-4">
        <div>
          <img src={mid1} alt="mid1" className="h-[5rem]" />
        </div>
        <div className="w-[70vw] lg:w-[13rem]">
          <div className="text-[#fff] text-xl font-medium">
            Learn The Latest Skills
          </div>
          <div className="text-[rgba(255,255,255,0.6)] font-light text-sm">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a BC, making it over 2000 years old.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mid;
