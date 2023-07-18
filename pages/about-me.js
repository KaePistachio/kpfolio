import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/AboutMe.module.css";
import profilePic from "../images/guitar-boi.png";

const AboutMe = () => {
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
      <div className={styles.aboutBody}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutContainer}>
            <h1>About Me</h1>
            <div className={styles.aboutText}>
              <h6>
                Having come from a background in Audio Engineering and Sound
                Design, I have carried a meticulous & technical mindset
                throughout the majority of my career.
              </h6>

              <h6>
                When the world stopped during the global pandemic, I decided I
                was tired of working for the gig economy so I retrained in web
                development, focusing most of my time on Javascript & React. I
                discovered a huge passion for coding and after studying full
                time for 18 months, I did some freelance work as a front end
                engineer before landing my first role as an in house developer.
              </h6>

              <h6>
                {" "}
                Prior to launching my audio / tech career I worked for many
                years as a runner and in various front of house based
                hospitality roles, including management positions. This has
                provided me with highly valuable transferable skills that some
                may overlook. I am very sociable and a team player that will
                perform well under heavy pressure. Due to this I am confident in
                my ability to work in client and customer facing roles, as well
                as being adept in management & conflict resolution.
              </h6>
            </div>
          </div>
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
  );
};

export default AboutMe;
