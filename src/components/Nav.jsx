import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import { useState } from "react";

function Nav() {
  const [mobNav, setMobNav] = useState(false);
  function mobNavHidden() {
    setMobNav((mobNav) => (mobNav ? false : mobNav));
  }
  return (
    <nav className={`${styles.nav} ${mobNav ? styles.navOpen : ""}`}>
      <div className={styles.navContainer}>
        <NavLink to={"/"} className={styles.link}>
          <span className={styles.logo}>Whatsapp Communities</span>
        </NavLink>
        <nav className={styles.navigation}>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={mobNavHidden}>
              <NavLink to={"/news"} className={styles.link}>
                News
              </NavLink>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <NavLink to={"/business"} className={styles.link}>
                Business
              </NavLink>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <NavLink to={"/cricket"} className={styles.link}>
                Cricket
              </NavLink>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <NavLink to={"/pubg"} className={styles.link}>
                Pubg
              </NavLink>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <NavLink to={"/girls"} className={styles.link}>
                Girls
              </NavLink>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <NavLink to={"/others"} className={styles.link}>
                Other
              </NavLink>
            </li>
            <li className={styles.li} onClick={mobNavHidden}>
              <NavLink to={"/contact-us"} className={styles.link}>
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className={styles.btnMobileNav}
          onClick={() => setMobNav((mobNav) => !mobNav)}
        >
          <ion-icon
            class={styles.iconMobileNav}
            name={`${mobNav ? "close" : "menu"}-outline`}
          ></ion-icon>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
