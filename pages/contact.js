import { useRef, useState } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import Head from "next/head";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  const serviceId = "nwdevpassthrough";
  const templateId = "template_ac7lagu";
  const userId = "user_j4c0V4ZrBMna5X9uxYFo5";
  const router = useRouter();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState("Submit >>>");

  const sendEmail = (e) => {
    const myInterval = setInterval(setSubmit, 500);
    function setSubmit() {
      setIsSubmitting("Sending Email.");
      setTimeout(() => setIsSubmitting("Sending Email.."), 100);
      setTimeout(() => setIsSubmitting("Sending Email..."), 200);
    }
    console.log("sending email");
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    if (emailjs.sendForm) {
      setTimeout(() => clearInterval(myInterval), 1000);
      setTimeout(() => setIsSubmitting("Redirecting..."), 1500);
      setTimeout(() => router.push("/"), 2000);
    }
  };

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
            <form
              className={styles.contactForm}
              onSubmit={sendEmail}
              ref={form}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  required
                ></input>
              </div>
              <div>
                <input type="text" name="number" placeholder="Number"></input>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  required
                ></input>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Please enter your query here, thanks!"
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" className="contact-button">
                  {isSubmitting}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
