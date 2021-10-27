import styles from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <li className={styles.item} data-aos="zoom-in">
      <div className={styles["flip-box"]}>
        <div className={styles["flip-box__front"]}>
          <div>
            <img src={props.src} alt={props.alt} />
          </div>

          <label>{props.title}</label>
        </div>
        <div className={styles["flip-box__back"]}>
          <p>{props.children}</p>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
