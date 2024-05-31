const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const text = document.querySelector(".text");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  console.log("loop");

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  console.log(marioPosition);

  if (pipePosition <= 89 && pipePosition > 0 && marioPosition < 58) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "78px";
    mario.style.marginLeft = "22px";

    text.textContent = "game over";
    text.style.color = "#ff3939";
    text.style.animation = "none";
    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
text.addEventListener("keydown", this.classList.remove("hidden"));
