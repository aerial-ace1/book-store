import { Carousel } from "@mantine/carousel";
import fac1 from "../../assets/fac1.svg";
import fac2 from "../../assets/fac2.svg";
import fac3 from "../../assets/fac3.svg";


const Faculty = () => {
  return (
    <div className="h-[50vh] w-full flex flex-col mt-[5rem] lg:mt-[8rem] gap-8 relative ">
      <div>
        <div className="font-medium text-4xl text-center">
          What student’s say
        </div>
        <div className="font-light text-center">
          Lorem Ipsum is simply dummy text of the printing.
        </div>
      </div>

      <Carousel
        className="w-[80%] m-auto"
        withControls={false}
        withIndicators
        height={400}
        slideSize={{ base: "90%", sm: "50%", md: "33.333333%" }}
        slideGap={{ base: 0, sm: "md" }}
        loop
        align="center"
      >
        <Carousel.Slide>
          <img src={fac1} alt="fac1" className="w-[100%]" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={fac2} alt="fac2" className="w-[100%]" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={fac3} alt="fac3" className="w-[100%]" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={fac1} alt="fac1" className="w-[100%]" />
        </Carousel.Slide>
        <Carousel.Slide>
          <img src={fac3} alt="fac3" className="w-[100%]" />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default Faculty;
