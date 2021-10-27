import styles from "./Outdoor.module.css";

const Outdoor = (props) => {
  return <div className={styles.outdoor}>{props.children}</div>;
};

export default Outdoor;
