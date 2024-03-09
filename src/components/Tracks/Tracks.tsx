import lamp from "../../assets/lamp.svg";
import arrow from "../../assets/arrow.svg";

import track1 from "../../assets/track1.svg";
import track2 from "../../assets/track2.svg";
import track3 from "../../assets/track3.svg";

import star1 from "../../assets/star1.svg";
import star2 from "../../assets/star2.svg";
import views from "../../assets/views.svg";
import { Carousel } from "@mantine/carousel";

const Tracks = () => {
  return (
    <div
      id="courses"
      className="h-[60vh] lg:h-[80vh] w-[100vw] m-0 p-0 relative flex flex-col items-center justify-center lg:justify-around"
    >
      <img
        src={lamp}
        alt="lamp"
        className="h-[4rem] lg:h-[10rem] absolute top-[-5rem] left-0"
      />
      <img
        src={arrow}
        alt="arrow"
        className="h-[4rem] lg:h-[10rem] absolute top-[-5rem] right-0"
      />
      <div>
        <div className="font-medium text-4xl text-center">Our Tracks</div>
        <div className="font-light text-center">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
      </div>
      <Carousel
        className="w-[100%] lg:w-[80%] m-auto"
        withControls={false}
        withIndicators
        height={500}
        slideSize={{ base: "90%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="center"
      >
        <Carousel.Slide>
          <div className="w-[25rem] shadow p-6 rounded-lg relative">
            <img src={track1} alt="track1" />
            <div className="flex justify-between mt-4">
              <div className="text-[rgba(0,0,0,0.6)]">UI/UX Design</div>
              <div>
                <img src={star1} alt="star1" />
              </div>
            </div>
            <div className="border-dotted border-b-2 pb-2">
              <div className="text-xl font-medium">JEE 2024</div>
              <div className="text-[#FF7426] text-xl">$98</div>
            </div>
            <img src={views} alt="views" className="mb-8" />
            <button className="bg-[#FF7426] text-white absolute w-[30%] p-2 text-lg font-bold left-[35%] rounded-[40px]">
              Join Course
            </button>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="w-[25rem] shadow p-6 rounded-lg relative">
            <img src={track2} alt="track2" />
            <div className="flex justify-between mt-4">
              <div className="text-[rgba(0,0,0,0.6)]">UI/UX Design</div>
              <div>
                <img src={star1} alt="star1" />
              </div>
            </div>
            <div className="border-dotted border-b-2 pb-2">
              <div className="text-xl font-medium">NEET 2024</div>
              <div className="text-[#FF7426] text-xl">$98</div>
            </div>
            <img src={views} alt="views" className="mb-8" />
            <button className="bg-[#FF7426] text-white absolute w-[30%] p-2 text-lg font-bold left-[35%] rounded-[40px]">
              Join Course
            </button>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="w-[25rem] shadow p-6 rounded-lg relative">
            <img src={track3} alt="track3" />
            <div className="flex justify-between mt-4">
              <div className="text-[rgba(0,0,0,0.6)]">UI/UX Design</div>
              <div>
                <img src={star2} alt="star2" />
              </div>
            </div>
            <div className="border-dotted border-b-2 pb-2">
              <div className="text-xl font-medium">GATE 2024</div>
              <div className="text-[#FF7426] text-xl">$98</div>
            </div>
            <img src={views} alt="views" className="mb-8" />
            <button className="bg-[#FF7426] text-white absolute w-[30%] p-2 text-lg font-bold left-[35%] rounded-[40px]">
              Join Course
            </button>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="w-[25rem] shadow p-6 rounded-lg relative">
            <img src={track1} alt="track1" />
            <div className="flex justify-between mt-4">
              <div className="text-[rgba(0,0,0,0.6)]">UI/UX Design</div>
              <div>
                <img src={star1} alt="star1" />
              </div>
            </div>
            <div className="border-dotted border-b-2 pb-2">
              <div className="text-xl font-medium">JEE 2024</div>
              <div className="text-[#FF7426] text-xl">$98</div>
            </div>
            <img src={views} alt="views" className="mb-8" />
            <button className="bg-[#FF7426] text-white absolute w-[30%] p-2 text-lg font-bold left-[35%] rounded-[40px]">
              Join Course
            </button>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className="w-[25rem] shadow p-6 rounded-lg relative">
            <img src={track2} alt="track2" />
            <div className="flex justify-between mt-4">
              <div className="text-[rgba(0,0,0,0.6)]">UI/UX Design</div>
              <div>
                <img src={star1} alt="star1" />
              </div>
            </div>
            <div className="border-dotted border-b-2 pb-2">
              <div className="text-xl font-medium">NEET 2024</div>
              <div className="text-[#FF7426] text-xl">$98</div>
            </div>
            <img src={views} alt="views" className="mb-8" />
            <button className="bg-[#FF7426] text-white absolute w-[30%] p-2 text-lg font-bold left-[35%] rounded-[40px]">
              Join Course
            </button>
          </div>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default Tracks;
