import Footer from "../../components/Footer/Footer";
import { guests } from "../../data/chief_guests";
import styles from "./speakers.module.css";

const Speakers = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Chief Guests</h1>
        </div>
        <div className={styles.wrapper}>
          {guests.map((guest, i) => {
            return (
              <div
                className={i % 2 === 0 ? styles.guest1 : styles.guest2}
                key={i}
              >
                <h3>{guest.name}</h3>
                <p>{guest.role}</p>
                <img src={guest.pic} alt="speaker" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Speakers;
