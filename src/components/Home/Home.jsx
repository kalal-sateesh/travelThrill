import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import route from "../../routes/route.json";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const Home = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = () => {
    if (!isAuth) {
      navigate(`/${route.LOGIN}`);
    } else {
      alert("You Are Already Login!!! Please Plan A Travel");
    }
  };
  return (
    <>
      <div className={styles.div1}>
        <div>
          <h1 className={styles.h11}>Your Journey Your Story</h1>
          <h4 className={styles.h41}>Choose Your Favourite Destination</h4>
          <button className={styles.Btn} onClick={loginHandler}>
            Travel Plan
          </button>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.h12}>Popular Destination</div>
        <div className={styles.div21}>
          Tour gives you the opportunity to see a lot, within a time frame
        </div>
        <div className={styles.div22}>
          <div className={styles.div221}>
            <h3 className={styles.h21}>Taal Volcano, Batangas</h3>
            <p className={styles.div2211}>
              Taal Volcano, located in Batangas, Luzon, is an active
              stratovolcano known for its picturesque crater lake. It holds the
              distinction of being one of the most active volcanoes in the
              Philippines, posing a potential threat to nearby populated areas.
              The volcanos history is marked by numerous eruptions, some of
              which have caused significant devastation. The most recent
              significant eruption occurred in January 2020, resulting in
              ashfall and evacuations. Taal Volcano is part of the Pacific Ring
              of Fire, an area known for frequent seismic and volcanic activity.
              Despite its volatile nature, Taal Volcano remains a popular
              tourist destination, attracting visitors for its natural beauty
              and geological significance. Scientists closely monitor the
              volcano for any signs of increased activity to ensure the safety
              of the surrounding communities.
            </p>
          </div>
          <div className={styles.div222}>
            <div className={styles.div2221}></div>
            <div className={styles.div2222}></div>
          </div>
        </div>
        <div className={styles.div22}>
          <div className={styles.div222}>
            <div className={styles.div2223}></div>
            <div className={styles.div2224}></div>
          </div>
          <div className={styles.div221}>
            <h3 className={styles.h21}>Intramuros,Manila,</h3>
            <p className={styles.div2211}>
              Intramuros, located in Manila, Philippines, is a historic walled
              area that encapsulates the rich heritage of the country. It was
              built during Spanish colonial rule and served as the center of
              political, religious, and economic activities during that era. The
              word Intramuro means within the walls in Latin, aptly describing
              its enclosed nature. The architectural style of Intramuros is
              reminiscent of Spanish influence, with well-preserved structures
              like Fort Santiago and San Agustin Church, showcasing this
              colonial legacy. Visitors can explore cobblestone streets,
              fortified walls, and centuries-old buildings, offering a glimpse
              into the Philippines colonial past. Intramuros holds cultural
              significance and houses several museums and art galleries,
              providing insights into the nations history and art
            </p>
          </div>
        </div>
      </div>
      <div className={styles.div3}>
        <div className={styles.h12}>Recent Trips</div>
        <div className={styles.div21}>
          You can discover unique destination using Google Maps
        </div>
        <div className={styles.div31}>
          <div className={styles.div311}>
            <div className={styles.image1}></div>
            <div className={styles.head}>Trip in France</div>
            <div className={styles.text}>
              France, located in Western Europe, is a nation steeped in rich
              history and cultural heritage. Renowned for its iconic landmarks,
              such as the Eiffel Tower and Notre Dame Cathedral, France attracts
              millions of tourists each year. The country is celebrated for its
              art, literature, and culinary expertise, with Paris being a global
              hub for art and fashion. France boasts diverse landscapes, from
              the picturesque countryside of Provence to the stunning French
              Riviera, offering a spectrum of experiences
            </div>
          </div>
          <div className={styles.div311}>
            <div className={styles.image2}></div>
            <div className={styles.head}>Trip in Indonesia</div>
            <div className={styles.text}>
              Indonesia, an archipelago nation situated in Southeast Asia,
              isrenowned for its diverse culture, stunning landscapes, and
              richhistory. With over 17,000 islands, it holds the distinction of
              beingthe worlds largest island country. The country boasts a
              multitude oflanguages, traditions, and religions, creating a
              vibrant and colorfultapestry of society. Its capital, Jakarta, is
              a bustling metropolisand a hub of economic and cultural activity.
            </div>
          </div>
          <div className={styles.div311}>
            <div className={styles.image3}></div>
            <div className={styles.head}>Trip in Malaysia</div>
            <div className={styles.text}>
              Malaysia, located in Southeast Asia, is a diverse and culturally
              rich nation that encompasses the Malay Peninsula and parts of the
              island of Borneo. It boasts a population of over 30 million
              people, comprising various ethnic groups, including Malays,
              Chinese, Indians, and indigenous peoples. The countrys capital,
              Kuala Lumpur, is a vibrant metropolis known for its iconic
              Petronas Twin Towers.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
