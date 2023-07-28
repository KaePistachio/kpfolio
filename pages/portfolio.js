import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Portfolio.module.css";

import tracker from "../images/tracker.png";
import orderForm from "../images/order-form.png";
import rArrow from "../images/rarrow.png";
import lArrow from "../images/larrow.png";
import { useState } from "react";

const Portfolio = () => {
  const trackerProject = {
    name: "Shipment Tracking App",
    image: tracker,
    description:
      "I was tasked with building a react client to interact with an API service that aggregates sea freight tracking info to display real time information on a shipping containers location and ETA, and then injecting it into a pre-existing website as a WordPress plugin.",
    link: "/tracker-app",
  };

  const orderFormProject = {
    name: "Order Form App",
    image: orderForm,
    description:
      "For this work project I created an API using a PostgresSQL, Express, React & Node.js stack, for an online order form designed to keep track of stock, standardise data entry and streamline the sales team workload.",
    link: "/order-form",
  };

  const projectArray = [trackerProject, orderFormProject];

  const [activeProject, setActiveProject] = useState(projectArray[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectUpSwapper = async () => {
    if (currentIndex < projectArray.length - 1) {
      let newCurrentIndex = currentIndex + 1;
      setCurrentIndex(newCurrentIndex);
      setActiveProject(projectArray[newCurrentIndex]);
      return;
    } else {
      let newCurrentIndex = 0;
      setCurrentIndex(newCurrentIndex);
      setActiveProject(projectArray[newCurrentIndex]);
      return;
    }
  };

  const projectDownSwapper = () => {
    if (currentIndex > 0) {
      let newCurrentIndex = currentIndex - 1;
      setCurrentIndex(newCurrentIndex);
      setActiveProject(projectArray[newCurrentIndex]);
      return;
    } else {
      let newCurrentIndex = projectArray.length - 1;
      setCurrentIndex(newCurrentIndex);
      setActiveProject(projectArray[newCurrentIndex]);
      return;
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Nick White" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        >
        </meta>
        <link rel="icon" href="/asset.png"></link>
      </Head>

      <div className={styles.portfolioBody}>
        <div className={styles.portfolio}>
          <div className={styles.portfolioContainer}>
            <h1>Portfolio</h1>
            <div className={styles.projectModule}>
              <div className={styles.projectBody}>
                <h2>{activeProject.name}</h2>
                <Image
                  className={styles.projectThumbnail}
                  src={activeProject.image}
                  alt="project thumbnail"
                />
                <h6>{activeProject.description}</h6>
                <Link
                  className={styles.portfolioLink}
                  href={activeProject.link}
                >
                  View Project {">>>"}
                </Link>
              </div>
              <div className={styles.leftArrowContainer}>
                <Image
                  onClick={() => projectDownSwapper()}
                  className={styles.lArrow}
                  src={lArrow}
                  alt="left arrow"
                />
              </div>
              <div className={styles.rightArrowContainer}>
                <Image
                  onClick={() => projectUpSwapper()}
                  className={styles.rArrow}
                  src={rArrow}
                  alt="right arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
