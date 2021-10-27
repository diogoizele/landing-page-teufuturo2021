import styles from "./About.module.css";

import programmingStudents from "../../assets/img/programming-students.jpg";
import alura from "../../assets/img/logo-alura.png";
import whadwany from "../../assets/img/logo-Whadwany.png";

import Section from "../UI/Section";
import Outdoor from "./Outdoor";
import CardsList from "./CardsList";

import technicalItems from "../../data/technicalItems";
import behavioralItems from "../../data/behavioralItems";

const About = (props) => {
  return (
    <Section id={props.id}>
      <Outdoor data-aos="fade-up">
        <h2>Conheça o #TeuFuturo</h2>
        <p>
          O projeto visa dar aquele "empurrãozinho" em jovens interessados na
          carreira d e ciências da computação, com
          <strong> módulos comportamentais e técnicos</strong> que ajudarão
          tanto o adolescente se sair bem em uma entrevista de emprego quanto
          desenvolver aplicações modernas com as tecnologias da web.
        </p>
      </Outdoor>
      <div className={styles.info}  data-aos="fade-right">
        <div>
          <img src={programmingStudents} alt="Estudantes de Programação" />
        </div>
        <div>
          <h3>Ciências da Computação</h3>
          <p>
            Sobre a carreira de ciências da computação podemos destacar a visão
            intercontextualizada da área, ou seja, integrada a diversas outras
            áreas do conhecimento. Criatividade, visão empreendedora e postura
            inovadora são algumas das capacidades que um profissional dessa área
            irá desenvolver, além disso irá aprimorar sua capacidade de resolver
            problemas por meio da tecnologia, de forma que possa atender as
            diferentes demandas, tanto técnicas quanto comportamentais, de onde
            atuar.
          </p>
        </div>
      </div>
      <Outdoor  data-aos="fade-up">
        <h3>Programa #TeuFuturo 2021</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WkcCpHzS7pk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Outdoor>
      <div>
        <CardsList src={alura} alt="Logo da Alura" items={technicalItems} />
        <CardsList
          src={whadwany}
          alt="Logo da Whadwany"
          items={behavioralItems}
        />
      </div>
    </Section>
  );
};

export default About;
