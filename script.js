const container = document.querySelector(".wrapper");
let card;
let primeirCarta = "";
let segundaCarta = "";

const items = [
  { nome: "panda", imagem: "/imagem/panda.png" },
  { nome: "cobra", imagem: "/imagem/cobra.jpg" },
  { nome: "tigre", imagem: "/imagem/tigre.jpg" },
  { nome: "cachorro", imagem: "/imagem/cachorro.jpg" },
  { nome: "jacare", imagem: "/imagem/jacare.jpg" },
  { nome: "leao", imagem: "/imagem/leao.jpg" },
  { nome: "macaco", imagem: "/imagem/macaco.jpg" },
  { nome: "girafa", imagem: "/imagem/girafa.png" },
];

function criarCartas() {
  let itemDuplicado = [...items, ...items];
  let personagens = itemDuplicado.sort(() => Math.random() - 0.5);

  for (let i = 0; i < personagens.length; i++) {
    container.innerHTML += `
      <div class="card-container" data-card = ${personagens[i].nome}>       
       <div class="card-before">?</div>
       <div class="card-after">
       <img src=${personagens[i].imagem} width="120" heigth="120" />
       </div>
     </div>`;
  }
}

criarCartas();

function checarCartas(card) {
  let primeiroPersonagem = primeirCarta.getAttribute("data-card");
  let segundoPersonagem = segundaCarta.getAttribute("data-card");

  if (primeiroPersonagem == segundoPersonagem) {
    primeirCarta = "";
    segundaCarta = "";
  } else if (primeirCarta != segundaCarta) {
    setTimeout(() => {
      primeirCarta.classList.remove("flipped");
      segundaCarta.classList.remove("flipped");
      primeirCarta = "";
      segundaCarta = "";
    }, 600);
  }
}

function revelarCarta() {
  card = document.querySelectorAll(".card-container");

  card.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("flipped")) {
        return;
      }

      if (primeirCarta == "") {
        card.classList.add("flipped");
        primeirCarta = card;
      } else if (segundaCarta == "") {
        card.classList.add("flipped");
        segundaCarta = card;

        checarCartas(card);
      }
    });
  });
}
revelarCarta();

function jogo() {
  container.style.gridTemplateColumns = "repeat(4, 120px)";
}

jogo();
