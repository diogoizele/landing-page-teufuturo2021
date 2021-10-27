import styles from "./CardsList.module.css";
import CardItem from "./CardItem";

const CardsList = (props) => {
  return (
    <div className={styles["card-list"]}>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
      <ul>
        {props.items.map((card, index) => {
          return (
            <CardItem
              key={index}
              title={card.title}
              src={card.src}
              alt={card.alt}
            >
              {card.text}
            </CardItem>
          );
        })}
      </ul>
    </div>
  );
};

export default CardsList;
