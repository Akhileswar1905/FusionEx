import { partners } from "../../data/partners";
import styles from "./partners.module.css";
const Partners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Partners</h1>
      </div>
      <div className={styles.wrapper}>
        {partners.map((partner, i) => {
          return (
            <div key={i} className={styles.partner}>
              <img src={partner.img} alt={partner.name} />
              <h5>{partner.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
