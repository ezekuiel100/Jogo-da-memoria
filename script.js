const container = document.querySelector(".game");

const items = [
  { nome: "panda", imagem: "/imagem/panda.png" },
  { nome: "cobra", imagem: "/imagem/cobra.jpg" },
  { nome: "tigre", imagem: "/imagem/tigre.jpg" },
  { nome: "girafa", imagem: "/imagem/girafa.png" },

  ,
];

function jogo() {
  let a = items.sort(() => Math.random() - 0.5);

  for (let i = 0; i < items.length; i++) {
    container.innerHTML += `<div class="card"><img src=${items[i].imagem} width="200"</div>`;
  }
}

jogo();
