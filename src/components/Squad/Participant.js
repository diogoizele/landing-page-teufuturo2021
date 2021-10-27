import styles from "./Participant.module.css";

const Participant = (props) => {
  return (
    <li className={styles.card}>
      <img src={props.src} alt="Foto do Participante" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <button>Ver Mais</button>
    </li>
  );
};

export default Participant;
