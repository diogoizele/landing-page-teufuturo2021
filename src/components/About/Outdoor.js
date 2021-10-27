import styles from "./Outdoor.module.css";

const Outdoor = (props) => {
  return (
    <div data-aos={props["data-aos"]} className={styles.outdoor}>
      {props.children}
    </div>
  );
};

export default Outdoor;
