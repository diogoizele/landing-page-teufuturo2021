import styles from "./Squad.module.css";

import Section from "../UI/Section";
import Participant from "./Participant";

import participants from "../../data/people";
import { useState } from "react";
import ParticipantModal from "./ParticipantModal";

const Squad = (props) => {
  const [modalInfo, setModalInfo] = useState(false);
  const [participantInfo, setParticipantInfo] = useState({});

  const showInfoHandler = (participantData) => {
    setModalInfo(true);
    setParticipantInfo(participantData);
  };

  const closeInfoHandler = () => {
    setModalInfo(false);
  };

  return (
    <Section id={props.id} color="#D8D1E2">
      {modalInfo ? (
        <ParticipantModal
          participant={participantInfo}
          onClose={closeInfoHandler}
        />
      ) : (
        ""
      )}
      <div className={styles["squad-header"]}>
        <h3>SQUAD</h3>
        <p>Conhecendo um pouco dos participantes.</p>
      </div>
      <div className={styles["squad-participants"]}>
        <ul>
          {participants.map((participant) => {
            return (
              <Participant
                key={participant.name}
                src={participant.src}
                name={participant.name}
                description={participant.description}
                linkedin={participant.linkedin}
                onShowInfo={showInfoHandler}
              />
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Squad;
