import styles from "./Header.module.css";

import logoTeuFuturo from "../../assets/svg/teufuturo.svg";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <a href="#inicio">
            <img src={logoTeuFuturo} alt="Logo do Teu Futuro" />
          </a>
        </div>
        <div>
          <a href="#sobre">Sobre</a>
          <a href="#squad">Squad</a>
          <a href="#apoie">Apoie</a>
          <a href="#participar">Quero Participar</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
