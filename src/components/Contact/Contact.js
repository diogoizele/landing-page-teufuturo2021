import { useState } from "react";
import styles from "./Contact.module.css";

import backpack from "../../assets/img/teufuturo-backpack.png";

import Section from "../UI/Section";

const Contact = (props) => {
  const [userName, setUserName] = useState("");
  const [submitMessage, setSubmitMessage] = useState(false);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (userName) {
      setSubmitMessage(true);
    }

    setTimeout(() => setSubmitMessage(false), 3000);
  };

  const changeNameHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <Section id={props.id} color="#FFCF1A">
      <div className={styles.contact}>
        <div>
          <h3>Inscreva-se!</h3>
          <img src={backpack} alt="Mochila do #TeuFuturo" />
        </div>
        <div>
          <form onSubmit={submitFormHandler}>
            <h4>Preencha o formulário e entraremos em contato com você.</h4>
            <input
              type="text"
              placeholder="Nome completo"
              id="name"
              value={userName}
              onChange={changeNameHandler}
              required="required"
            />
            <input
              type="email"
              placeholder="Email"
              id="email"
              required="required"
            />
            <input
              type="tel"
              placeholder="WhatsApp"
              id="phone"
              required="required"
            />
            <button type="submit">Enviar</button>
            {submitMessage && <p>Obrigado por se inscrever {userName}!</p>}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
