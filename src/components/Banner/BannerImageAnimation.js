import styles from "./BannerImageAnimation.module.css";

const BannerImageAnimation = (props) => {
  return (
    <div className={styles["banner-image"]}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.src} alt="Logo da Yaman" />
      </a>
    </div>
  );
};

export default BannerImageAnimation;
