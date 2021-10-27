import styles from "./Squad.module.css";

import Section from "../UI/Section";
import Participant from "./Participant";

import participants from "../../data/people";

const Squad = (props) => {
  return (
    <Section id={props.id} color="#D8D1E2">
      <div className={styles["squad-header"]}>
        <h3>SQUAD</h3>
        <p>Conhecendo um pouco dos participantes.</p>
      </div>
      <div className={styles['squad-participants']}>
        <ul>
          {participants.map((participant) => {
            return (
              <Participant
                src={participant.src}
                name={participant.name}
                description={participant.description}
              />
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Squad;
