import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Project.module.css";
import YouTube from "react-youtube";

const Tracker = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      <Head>
        <title>Tracker App</title>
        <meta name="description" content="Created by Nick White" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/asset.png"></link>
      </Head>
      <div className={styles.projectBody}>
        <div className={styles.project}>
          <div className={styles.projectContainer}>
            <h1>Tracker App</h1>
            <div className={styles.ytContainer}>
              <YouTube videoId="eDCdVIbqO-8" opts={opts} />
            </div>
            <Link
              className={styles.projectLink}
              href="https://github.com/KaePistachio"
              target="_blank"
            >
              View GitHub Repo {`>>>`}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
