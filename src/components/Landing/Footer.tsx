import "./Footer.module.css";
import book from "../../assets/book.svg";
const Footer = () => {
  return (
    <footer className="w-full py-8 bg-[#fdf8ee] max-lg:text-center flex flex-wrap items-center justify-center lg:items-start lg:justify-around gap-8">
      <div className="w-[15rem]">
        <div className="flex flex-row gap-4 items-center justify-center">
          <img src={book} alt="book" className="w-[3rem]" />
          <h1>Book Store</h1>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy a type
          specimen book.
        </p>
      </div>
      <div className=" max-lg:w-full">
        <h1>Company</h1>
        <ul>
          <li>About Us</li>
          <li>How to work?</li>
          <li>Popular Course</li>
          <li>Service</li>
        </ul>
      </div>
      <div className=" max-lg:w-full">
        <h1>Courses</h1>
        <ul>
          <li>Categories</li>
          <li>Offline Courses</li>
          <li>Video Courses</li>
        </ul>
      </div>
      <div className=" max-lg:w-full">
        <h1>Support </h1>
        <ul>
          <li>+0913-705-3875</li>
          <li>ElizabethJ@jourrapide.com</li>
          <li>4808 Skinner Hollow Road Days Creek, OR 97429</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
