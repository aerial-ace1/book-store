import heart from "../../assets/hearts.svg";
import jigsaw from "../../assets/jigsaw.svg";
import filler from "../../assets/filler.svg";

const Filler = () => {
  return (
    <div className="h-[55vh] w-full relative bg-[#fdf8ee] pt-8">
      <img
        src={filler}
        alt="views"
        className="absolute top-4 left-[10vw] h-[60vh] z-0 hidden lg:block"
      />
      <div className="p-8 lg:p-0 flex flex-col w-full lg:w-[50vw] items-center justify-end gap-8 lg:ml-[40vw]">
        <div className="text-[2rem] text-center lg:text-left lg:text-[3rem] font-medium">
          Premium{" "}
          <span className="text-[#FF7426]">
            Learning <br />
          </span>{" "}
          Experience
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div>
            <img src={heart} alt="heart" className="h-[5rem]" />
          </div>
          <div>
            <div className="text-xl font-medium">Easily Accessible</div>
            <div className="text-[rgba(0,0,0,0.6)] font-medium text-sm">
              Learning Will fell Very Comfortable With Courslab.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div>
            <img src={jigsaw} alt="jigsaw" className="h-[5rem]" />
          </div>
          <div>
            <div className="text-xl font-medium">Fun Learning Exp</div>
            <div className="text-[rgba(0,0,0,0.6)] font-medium text-sm">
              Learning Will fell Very Comfortable With Courslab.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filler;
