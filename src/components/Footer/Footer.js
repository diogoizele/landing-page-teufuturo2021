import styles from "./Footer.module.css";

import Section from "../UI/Section";

const Footer = (props) => {
  return (
    <Section id={props.id} color="#7B53CE">
      <footer className={styles.footer}>
        <p>© #TeuFuturo</p>
        <span>Version 2.0.0</span>
      </footer>
    </Section>
  );
};

export default Footer;
