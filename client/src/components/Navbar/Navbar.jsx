import { useState } from "react";
import styles from "./NavbarStyles.module.css";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(true);

  const scrollToSection = (selector) => {
    setMobileMenu(true);
    const section = document.querySelector(selector);
    const offset = 60;
    window.scrollTo({
      top: section.offsetTop - offset,
      behavior: "smooth", // Added smooth scrolling behavior
    });
  };

  return (
    <nav>
      <a
        onClick={() => scrollToSection("#hero")}
        className={styles.gradientText}
      >
        <span className={styles.gradientText}>
          YosifFIT{""}
          <i className="fa-solid fa-dumbbell"></i>
        </span>
      </a>
      <div>
        <ul
          className={
            mobileMenu
              ? styles.navbarLinks
              : `${styles.navbarLinks} ${styles.active}`
          }
        >
          <li>
            <a onClick={() => scrollToSection("#hero")}>Начало</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("#classes")}>Програми</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("#about")}>За нас</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("#testemonials")}>Отзиви</a>
          </li>
        </ul>
      </div>
      <div className={styles.mobile}>
        <i
          className={mobileMenu ? "fa-solid fa-bars" : "fa-solid fa-x"}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></i>
      </div>
    </nav>
  );
}