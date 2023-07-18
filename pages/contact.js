import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

const Contact = () => {
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
      <div className={styles.contactBody}>
        <div className={styles.contactMe}>
          <div className={styles.contactContainer}>
            <h1>Contact Me</h1>
            <form className={styles.contactForm}>
              <div>
                <label>Name</label>
                <input type="text" required></input>
              </div>
              <div>
                <label>Email</label>
                <input type="text" required></input>
              </div>
              <div>
                <label>Message</label>
                <textarea required></textarea>
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
