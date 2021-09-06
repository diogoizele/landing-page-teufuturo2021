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
        testimonial:
          '"Olá, tudo bem com você? Me chamo Diogo Izele, tenho 19 anos e moro em Marau, Rio Grande do Sul. Iniciei no mundo da programação em 2019, ao ingressar no Curso Técnico com Ensino Médio Integrado de Informática pelo IFSUL – Campus Passo Fundo. Durante minha trajetória na área me deparei com diversos desafios que todo iniciante em programação enfrenta, porém com muita dedicação e prática, atualmente tenho uma segurança na área do desenvolvimento web com HTML5, CSS3 e JavaScript. A partir de agora meus planos são concluir meus cursos e seguir na área aprendendo cada vez mais sobre a Web, a fim de dominar as mais modernas tecnologias Front-End do mercado como por exemplo a biblioteca React e React Native para Mobile e o Framework Next para geração de sites estáticos. Estou sempre à disposição para trocar uma ideia, ajudar quem precisa e aprender coisas novas, agradeço a atenção!"',
        email: "diogogabrielizele@gmail.com",
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
