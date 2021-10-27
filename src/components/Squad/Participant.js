import styles from "./Participant.module.css";

const Participant = (props) => {
  const showParticipantInformationHandler = () => {
    const participant = {
      name: props.name,
      image: props.src,
      description: props.description,
      linkedin: props.linkedin
    }
    
    props.onShowInfo(participant)
  };

  return (
    <li className={styles.card}>
      <img src={props.src} alt="Foto do Participante" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <button onClick={showParticipantInformationHandler}>Ver Mais</button>
    </li>
  );
};

export default Participant;
