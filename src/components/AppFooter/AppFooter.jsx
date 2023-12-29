import styles from "./AppFooter.module.css";
const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        <div className={styles.head}>
          TravelThrill
        </div>
        <div className={styles.icons}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
          </svg>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM727.3 401.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
          </svg>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          Products
          <a href="#">
            <div className={styles.view}>Overview</div>
          </a>
          <a href="#">
            <div className={styles.view}>Features</div>
          </a>
          <a href="#">
            <div className={styles.view}>Tutorials</div>
          </a>
          <a href="#">
            <div className={styles.view}>Pricing</div>
          </a>
          <a href="#">
            <div className={styles.view}>Releases</div>
          </a>
        </div>
        <div className={styles.products}>
          Company
          <a href="#">
            <div className={styles.view}>About Us</div>
          </a>
          <a href="#">
            <div className={styles.view}>Press</div>
          </a>
          <a href="#">
            <div className={styles.view}>Careers</div>
          </a>
          <a href="#">
            <div className={styles.view}>Contact Us</div>
          </a>
          <a href="#">
            <div className={styles.view}>Partners</div>
          </a>
        </div>
        <div className={styles.products}>
          Legal
          <a href="#">
            <div className={styles.view}>Cookies Policy</div>
          </a>
          <a href="#">
            <div className={styles.view}>Privacy Policy</div>
          </a>
          <a href="#">
            <div className={styles.view}>Terms of Service</div>
          </a>
          <a href="#">
            <div className={styles.view}>Law Enforcement</div>
          </a>
          <a href="#">
            <div className={styles.view}>Status</div>
          </a>
        </div>
        <div className={styles.products}>
          Follow Us
          <a href="#">
            <div className={styles.view}>Facebook</div>
          </a>
          <a href="#">
            <div className={styles.view}>Twitter</div>
          </a>
          <a href="#">
            <div className={styles.view}>Dribbble</div>
          </a>
          <a href="#">
            <div className={styles.view}>Instagram</div>
          </a>
          <a href="#">
            <div className={styles.view}>LinkedIn</div>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default AppFooter;
