const setSizes = () => {
  let bookletWidth = window.innerWidth < 1400 ? 0.9 * window.innerWidth : 1400;

  if (window.innerHeight < 450) {
    bookletWidth = 0.75 * window.innerHeight * 2;
  }

  // Adjust for mobile view
  if (window.innerWidth < 768) {
    bookletWidth = 0.9 * window.innerWidth;
  }

  document.body.style = `height: ${
    window.innerHeight
  }px; --booklet-width: ${bookletWidth}px; --page-width: ${
    bookletWidth / 3
  }px; --booklet-height: ${bookletWidth / 2.2}px`;
};

setSizes();

window.addEventListener("resize", () => {
  setSizes();
});

const booklet = document.querySelector(".booklet");
const button = document.querySelector(".openBtn");

button.addEventListener("click", () => {
  button.classList.add("hide");
  setTimeout(() => {
    button.classList.remove("hide");
  }, 2000);
  if (booklet.classList.contains("open")) {
    booklet.classList.remove("open");
  } else {
    booklet.classList.add("open");
  }
});
