import styles from "../Contact/Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className={styles.div1}>
        <div>
          <h1 className={styles.h11}>Contact Us</h1>
        </div>
      </div>
      <div className={styles.formContainer}>
        <h1>Send a message to us!</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
