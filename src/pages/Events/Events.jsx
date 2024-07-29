import Footer from "../../components/Footer/Footer";
import { events } from "../../data/events";
import styles from "./events.module.css";
const Events = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Events</h1>
        </div>

        <div className={styles.content}>
          <div className={styles.events}>
            {events.map((event, i) => {
              return (
                <div key={i} className={styles.event}>
                  <img src={event.Picture} alt={event.Event} />
                  <h2>{event.Event}</h2>
                  <h5>{event.Tagline}</h5>
                  <small>{event.Description}</small>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
