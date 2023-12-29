import styles from "../About/About.module.css";
const About = () => {
  return (
    <>
      <div className={styles.div1}>
        <div>
          <h1 className={styles.h11}>About</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <h2>Our History</h2>
          <p>
            Trippy is owned and managed by Trippy .In PVT. Ltd., a leading brand
            in a web designing services and e-commerce solutions. Trippy .In
            Pvt. Ltd. is counted for its expertise in wen solutions and its top
            ranking business portals. Our invincible expertise and rich
            experience has raised our spirit to reach ahead from our clients
            expectations. Commendable success rate of other portals managed by
            Trippy is a live paradigm of our work excellence.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to touch the horizon where our capabilities may
            successfully meet with the requirements of our clients, that too
            with ultimate transparency and cost-effectiveness
          </p>
          <h2>Our Vision</h2>
          <p>
            To sow the seeds of par-excellence services with customer centric
            approach and reap the trust of worldwide clients
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
