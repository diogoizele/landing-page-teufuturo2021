import styles from "./Banner.module.css";

import logoTeuFuturo from "../../assets/svg/teufuturo.svg";
import logoYaman from "../../assets/img/logo-yaman.png";
import logoImed from "../../assets/img/logo-imed.png";

import BannerImageAnimation from "./BannerImageAnimation";
import BannerLines from "./BannerLines";
import { useState, useEffect } from "react";

const Banner = (props) => {
  const [currentImage, setCurrentImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevState) => !prevState);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section id={props.id} className={styles.banner}>
      <div className={styles["banner-logo"]}>
        <a href="#sobre">
          <img src={logoTeuFuturo} alt="Logo do Teu Futuro" />
        </a>
      </div>
      <BannerLines />
      {currentImage ? (
        <BannerImageAnimation
          src={logoYaman}
          link="https://yaman.com.br/pt-br/"
        />
      ) : (
        <BannerImageAnimation src={logoImed} link="https://www.imed.edu.br/" />
      )}
      <div className={styles["banner-arrow"]}>
        <a href="#sobre">
          <i />
        </a>
      </div>
    </section>
  );
};

export default Banner;
