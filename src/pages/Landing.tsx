import About from "../components/Landing/About";
import Footer from "../components/Landing/Footer";
import Top from "../components/Landing/Top";
import Faculty from "../components/Tracks/Faculty";
import Filler from "../components/Tracks/Filler";
import Students from "../components/Tracks/Students";
import Subscribe from "../components/Tracks/Subscribe";
import Tracks from "../components/Tracks/Tracks";

const Landing = () => {
  return (
    <div className="overflow-x-clip">
      <Top />
      <About />
      <Tracks />
      <Filler />
      <Students />
      <Faculty />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Landing;
