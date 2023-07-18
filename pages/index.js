import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";

/***** IMAGE IMPORTS *****/
import logo from "../images/Logo.png";
import gitIcon from "../images/github-y.png";
import linkedIcon from "../images/linked-y.png";
import message from "../images/message.png";
import macbook from "../images/macbook-pro.png";
import reactIco from "../images/react.png";
import jsIco from "../images/js.png";
import profilePic from "../images/guitar-boi.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Nick White" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/asset.png"></link>
      </Head>
      <div>
        <div className={styles.landingBody}>
          <div className={styles.macbook}>
            <Image src={macbook} alt="macbook vector" />
          </div>
          <div className={styles.reactIco}>
            <Image src={reactIco} alt="macbook vector" />
          </div>
          <div className={styles.jsIco}>
            <Image src={jsIco} alt="macbook vector" />
          </div>

          <div className={styles.mainHeader}>
            <h1>Hi I{`'`}m Nick.</h1>
            <h6>
              But you can call me Kind Person, I{`'`}m a front-end react
              developer with experience across the entire stack.
            </h6>
            <h6>
              I{`'`}m passionate about writing groovy riffs, grindin{`'`} rails
              and squeezin{`'`} buns.
            </h6>
          </div>
          <div className={styles.profilePicContainer}>
            <div className={styles.outline} />
            <Image
              className={styles.profilePic}
              src={profilePic}
              alt="profile pic"
              unoptimized={true}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
