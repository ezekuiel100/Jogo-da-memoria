const container = document.querySelector(".container");
const botoaReiniciar = document.querySelector("button");
let cartas;
let primeiraCarta = "";
let segundaCarta = "";

botoaReiniciar.addEventListener("click", () => location.reload());

let items = [
  { nome: "gato", imagem: "/imagem/gato.jpg" },
  { nome: "cachorro", imagem: "/imagem/cachorro.jpg" },
  { nome: "coelho", imagem: "/imagem/coelho.jpg" },
  { nome: "elefante", imagem: "/imagem/elefante.jpg" },
  { nome: "girafa", imagem: "/imagem/girafa.jpg" },
  { nome: "leao", imagem: "/imagem/leao.jpg" },
  { nome: "panda", imagem: "/imagem/panda.jpg" },
  { nome: "tigre", imagem: "/imagem/tigre.jpg" },
];

function criarCartas() {
  let itemsDuplicados = [...items, ...items];
  let animais = itemsDuplicados.sort(() => Math.random() - 0.5);

  animais.map((animal) => {
    container.innerHTML += `
    <div class="carta" data-carta=${animal.nome}>
    <div class="atras">?</div>
    <div class="frente">
      <img src=${animal.imagem} width="180px" height="180px" />
    </div>`;
  });
}
criarCartas();

function virarCarta() {
  cartas = document.querySelectorAll(".carta");

  cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
      if (primeiraCarta == "") {
        carta.classList.add("carta-virada");
        primeiraCarta = carta;
      } else if (segundaCarta == "") {
        carta.classList.add("carta-virada");
        segundaCarta = carta;
        checarCartas(carta);
      }
    });
  });
}
virarCarta();

function checarCartas() {
  const primeiroAnimal = primeiraCarta.getAttribute("data-carta");
  const segundoAnimal = segundaCarta.getAttribute("data-carta");

  if (primeiroAnimal == segundoAnimal) {
    primeiraCarta = "";
    segundaCarta = "";
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("carta-virada");
      segundaCarta.classList.remove("carta-virada");

      primeiraCarta = "";
      segundaCarta = "";
    }, 600);
  }
}
