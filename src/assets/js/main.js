const data = {
  participants: [
    {
      name: "Diogo Shievou",
      testimonial:
        '"Olá me chamo Diogo, tenho 18, sou de Porto Alegre e estou terminando o ensino médio. Estou no momento achando esse curso muito bom, antes de eu entrar nele eu estava bem perdido em como começar e por onde na programação, agora ando me interessando bem mais pela área, sinto que o #teufuturo me deu uma baita oportunidade e com isso pretendo aproveitar ela bastante pois o curso é bom e os professores sempre estão disponíveis pra ajudar a gente com algo. Sempre fui interessado por essa área pois sempre tive vontade de criar um jogo, só pra fazê-lo com todos os gêneros e mecânicas específicas de outros jogos, só descobri que não iria ser tão fácil assim de começo de desenvolver e apenas estudando mais essa área que iria ter uma boa noção de como começar."',
      email: "diogo.ribeiro3006@gmail.com",
    },
    {
      name: "Carolina da Silva",
      testimonial:
        '"Meu nome é Carolina da Silva, tenho 18 anos e sou residente de Porto Alegre. O curso do #TeuFuturo, tem sido de extrema importância na minha vida, sempre gostei de tecnologia, inteligência artificial e por meio de um curso que fiz em 2019 de robótica educacional acabei criando ainda mais interesse na área."',
      email: "dasilvacarolina.carolina@gmail.com",
    },
    {
      name: "Diogo Izele",
      testimonial: '""',
      email: "diogogabrielizele@gmail.com",
    },
    {
      name: "Cristina Pires da Silveira",
      testimonial:
        '"Meu nome é Cristina Pires da Silveira, tenho 16 anos, sou natural de Porto Alegre e apaixonada por design, arte e cultura, além da incrível tecnologia existente! Meu objetivo de vida sempre foi adquirir conhecimento e aprendizado, crescer como pessoa e profissional, mas precisava de, pelo menos, uma oportunidade para desempenhar isto! Quando soube do projeto #TeuFuturo, não pensei duas vezes e me inscrevi, pois era disso que mais precisava nesse momento de desenvolvimento na minha vida. Tenho vivido momentos incríveis no projeto, aprendido coisas que não compreendia e nem sabia da existência! No programa, desenvolvo habilidades intelectuais, físicas, técnicas e comportamentais, o que será de grande importância e relevância para acrescentar em minha trajetória pessoal e profissional."',
      email: "cristinapiresdasilveira@gmail.com",
    },
    {
      name: "Dylan",
      testimonial:
        '"Meu nome é Dylan, tenho 17 anos e sou de porto alegre. \n Meu pai tinha um computador e aos 5 anos, quando aprendi a ler, já comecei a usa-lo e hoje já tenho 12 anos de prática utilizando computadores, aprendi a usar diversos programas, joguei vários jogos, visitei muitos sites, mas em um momento do ano passado (2020) percebi que havia uma coisa que eu não tinha explorado ainda: Como criam todas essas coisas que eu uso a mais de uma década? \n Então depois de pensar sobre isso cogitei a possibilidade de um dia estudar como os jogos, programas e sites eram criados, então quando recebi o e-mail falando sobre o curso eu aceitei o desafio e me inscrevi mesmo sem saber absolutamente nada sobre programação, apenas pela diversão. \n Quando o curso começou não sabia o que esperar, era tudo muito novo pra mim, mas como tenho uma boa estrutura (bom computador e boa internet) não tive nenhuma dificuldade para iniciar a assistir as aulas e me empenhei desde o primeiro dia. Cometi alguns erros até entender como o sistema funcionava, mas logo com a minha experiência com computadores e persistência comecei a entender um pouco da programação, notei que não é algo simples, mas como tudo na vida, devemos nos esforçar para conseguir aprender. \n Até agora estou achando o curso muito interessante, já sou capaz de fazer alguns programas, jogos e sites simples, com muito estudo e autodidatismo, mas consigo. O curso é uma oportunidade muito boa na minha visão, é uma área que falta mão de obra no Brasil, com uma boa remuneração e amplas possibilidades de emprego, toda empresa precisa de um site, máquinas precisam de um software para comanda-las, inteligências artificiais precisam primeiro que uma pessoa a programe para cria-la, e como o mundo tende a se modernizar cada vez mais. A programação é a área dessa década e das próximas, talvez até do século XXI, e se você for uma pessoa interessada e empenhada eu recomendo fortemente que de uma chance ao curso, garanto que você mesmo que não ache à programação a profissão que você queira no futuro ainda sim aprenderá muito e conhecerá pessoas incríveis que serão suas colegas. \n “Permita-se ao conhecimento! Nunca é demais saber a mais”"',
      email: "dylanfigueiredo@outlook.com",
    },
  ],
};

function showInfo(index) {
  const container = document.getElementById("squad");
  const modal = document.createElement("div");
  const name = document.createElement("h4");
  const testimonial = document.createElement("p");
  const email = document.createElement("p");
  const closeButton = document.createElement("button");

  data.participants.forEach((participant, idx) => {
    if (index === idx) {
      name.innerHTML = participant.name;
      testimonial.innerHTML = participant.testimonial;
      email.innerHTML = `contato: ${participant.email}`;
      closeButton.innerHTML = "✕";
    }
  });

  closeButton.classList.add("close-button");
  closeButton.addEventListener("click", () => {
    container.removeChild(modal);
  });
  modal.classList.add("people-modal");

  modal.appendChild(closeButton);
  modal.appendChild(name);
  modal.appendChild(testimonial);
  modal.appendChild(email);

  container.appendChild(modal);
}
