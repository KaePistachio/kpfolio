import Link from "next/link";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import styles from "../styles/Home.module.css";

import logo from "../images/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className={styles.navBar}>
      <div className={menuOpen ? styles.blackout : styles.blackoutActive}></div>
      <div className={styles.nameContain}>
        <Link onClick={() => setMenuOpen(true)} className={styles.Navlink} href={"/"}>
          <div className={styles.nameContain}>
            <Image
              className={menuOpen ? styles.logo : styles.logoActive}
              src={logo}
              quality={100}
              unoptimized={true}
              alt="logo"
            />
            <h2
              className={menuOpen ? styles.nameHeader : styles.nameHeaderActive}
            >
              nickWhiteDev
            </h2>
          </div>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link className={styles.navLink} href={"/about-me"}>
          aboutMe
        </Link>
        <Link className={styles.navLink} href={"/portfolio"}>
          portfolio
        </Link>
        <Link className={styles.navLink} href={"/contact"}>
          contact
        </Link>
      </div>

      <button
        className={menuOpen ? styles.hamburger : styles.hamburgerActive}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={menuOpen ? styles.burgerLinks : styles.burgerLinksActive}>
        <Link
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.navLink}
          href={"/about-me"}
        >
          aboutMe
        </Link>
        <Link
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.navLink}
          href={"/portfolio"}
        >
          portfolio
        </Link>
        <Link
          onClick={() => setMenuOpen(!menuOpen)}
          className={styles.navLink}
          href={"/contact"}
        >
          contact
        </Link>
      </div>
      <div className={styles.typewriter}>
        <TypewriterComponent
          options={{
            strings: [
              "react",
              "next.js",
              "javascript",
              "typescript",
              "postgreSQL",
              "express",
              "ux design",
              "tailwind CSS",
              "SASS",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 15,
            pauseFor: 2500,
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
