import { Carousel } from "@mantine/carousel";
import { Avatar } from "@mantine/core";
import stu1 from "../../assets/stu1.svg";
import stu2 from "../../assets/stu2.svg";
import stu3 from "../../assets/stu3.svg";
import arrow2 from "../../assets/arrow2.svg";
import blur from "../../assets/blur.svg";
import saturn from "../../assets/saturn.svg";
const Students = () => {
  return (
    <div className="h-[50vh] w-full flex flex-col mt-[5rem] lg:mt-[8rem] gap-8 relative ">
      <img
        src={blur}
        alt="blur"
        className="absolute top-[8rem] left-[-20rem] w-[100%] h-[100%]"
      />
      <img
        src={saturn}
        alt="saturn"
        className="absolute bottom-[-10px] right-0 h-[4rem]"
      />
      <img
        src={arrow2}
        alt="arrow"
        className="absolute bottom-0 left-0 h-[10rem]"
      />
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
          <Card name="Clara R. Altman" desc="UI&UX Design" pic={stu3} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Card name="Dannette P. Cervantes" desc="Web Design" pic={stu2} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Card name="Finlay Kirk" desc="Web Developer" pic={stu1} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Card name="Clara R. Altman" desc="UI&UX Design" pic={stu3} />
        </Carousel.Slide>
        <Carousel.Slide>
          <Card name="Finlay Kirk" desc="Web Developer" pic={stu1} />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

export default Students;

interface Props {
  name: string;
  desc: string;
  pic: string;
}

const Card = ({ name, desc, pic }: Props) => {
  return (
    <div className="h-[15rem] shadow-xl w-[25rem] p-8">
      <div className="text-[rgba(0,0,0,0.6)] text-center">
        "Complete account of the system and expound the actual Contrary to
        popular belief, Lorem Ipsum is not simply random text. It has roots”
      </div>
      <div className="flex flex-row items-center justify-center gap-4 mt-4">
        <Avatar radius="xl" size="lg" src={pic} />
        <div>
          <div className="font-medium text-sm text-center">{name}</div>
          <div className="font-light text-sm text-center">{desc}</div>
        </div>
      </div>
    </div>
  );
};
