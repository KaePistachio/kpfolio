import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import gitIcon from "../images/github-y.png";
import linkedIcon from "../images/linked-y.png";
import message from "../images/message.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <button className={styles.contactButton}>
        Contact
        <Image
          className={styles.messageIcon}
          src={message}
          alt="message icon"
        />
      </button>
      <div className={styles.socialsContainer}>
        <Link href="https://www.linkedin.com/in/nickwhitedev" target="_blank">
          <Image src={linkedIcon} alt="github icon" width="40" quality="100" />
        </Link>
        <Link href="https://github.com/KaePistachio" target="_blank">
          <Image src={gitIcon} alt="github icon" width="40" quality="100" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
