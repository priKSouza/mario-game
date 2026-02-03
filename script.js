const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/game-over.png";
    mario.style.width = "65px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);

    // Criar botão de reininciar
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Reiniciar Jogo";
    restartBtn.classList.add("restart-btn");

    document.body.appendChild(restartBtn);

    // Evento de clique para reiniciar
    restartBtn.addEventListener("click", () => {
      location.reload(); // recarrega a página
    });
  }
}, 10);

document.addEventListener("keydown", jump);