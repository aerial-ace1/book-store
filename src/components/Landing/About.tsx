import book from "../../assets/book.svg";

const About = () => {
  return (
    <div id="about" className="w-[100vw] h-[100vh] m-0 p-0  flex flex-col lg:flex-row justify-center items-center gap-4 overflow-y-clip">
      <div className="w-[80vw] text-center mt-[4rem] lg:text-left lg:w-[40vw] lg:pr-8 ">
        <div className="text-4xl font-bold mb-4">About Us</div>
        <div className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur
        </div>
      </div>
      <div className="w-[40vw] flex justify-center items-center">
        <img src={book} alt="book" className="w-[60%]" />
      </div>
    </div>
  );
};

export default About;
