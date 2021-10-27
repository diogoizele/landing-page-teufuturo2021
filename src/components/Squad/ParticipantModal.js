import styles from "./ParticipantModal.module.css";

import linkedinButton from "../../assets/img/linkedin-button.png";

const ParticipantModal = (props) => {
  const { image, name, linkedin, description } = props.participant;

  const closeInfoHandler = () => {
    props.onClose(false);
  };
  return (
    <div className={styles["participant-modal"]}>
      <div
        className={`${styles["squad-backdrop"]}  `}
        onClick={closeInfoHandler}
      />
      <button onClick={closeInfoHandler}>×</button>
      <div className={styles["participant-info"]}>
        <div>
          <img src={image} alt={`Foto do participante ${name}`} />
          <div>
            <h4>{name}</h4>
            <span>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <img
                  src={linkedinButton}
                  alt="Entre em contato com meu linkedin"
                />
              </a>
            </span>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantModal;
