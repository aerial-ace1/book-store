import styles from "./Navbar.module.css";
import book from "../../assets/book.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <a href="" className={styles.logo}>
        <img src={book} alt="book" className={styles.book} />
        Book Store
      </a>
      <input className={styles.menu_btn} type="checkbox" id="menu-btn" />
      <label className={styles.menu_icon} htmlFor="menu-btn">
        <span className={styles.navicon}></span>
      </label>
      <ul className={styles.menu}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#courses">Courses</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
        <li>
          <a>
            <button
              className="bg-[#4D2C5E] px-8 py-4 rounded-[40px] text-[#FFF]"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
