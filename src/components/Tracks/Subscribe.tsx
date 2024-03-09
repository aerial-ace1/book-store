import { Button, TextInput } from "@mantine/core";
import ellipseSet from "../../assets/ellipseset.svg";
import lamp from "../../assets/lamp.svg";
import arrow3 from "../../assets/arrow3.svg";

const Subscribe = () => {
  return (
    <div className="mx-auto rounded-2xl mb-8 lg:mt-[10rem] h-[30vh] w-[80%] lg:w-[60vw] bg-[#4D2C5E] relative flex flex-col justify-center items-center gap-2">
      <img
        src={ellipseSet}
        alt="ellipseSet"
        className="absolute top-[-8rem] left-0 w-[100%] h-[100%]"
      />
      <img src={lamp} alt="lamp" className="absolute bottom-0 right-0" />
      <img src={arrow3} alt="arrow3" className="absolute bottom-0 left-0" />
      <div className="font-medium text-3xl text-white text-center">
        Subscribe to our newsletter
      </div>
      <div className="font-light text-center text-white">
        Lorem Ipsum is simply dummy text of the printing.
      </div>
      <TextInput
        className="w-[80%] lg:w-[40%]"
        radius="xl"
        size="md"
        placeholder="Email Address"
        rightSectionWidth={105}
        rightSection={
          <Button className="bg-[#FF7426] px-8 rounded-2xl">Send</Button>
        }
      />
    </div>
  );
};

export default Subscribe;
