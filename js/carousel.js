const images = [
  {
    src: "/img/img1.webp",
    text: "Nuestra visión enfocada en el desarrollo económico.",
  },

  {
    src: "/img/about2.webp",
    text: "Equipo trabajando en nuevos proyectos.",
  },

  {
    src: "/img/about3.webp",
    text: "Creando conocimiento para nuevas generaciones.",
  },
];

let currentImage = 0;

// Referencias HTML

const carouselImg = document.querySelector("#carousel-img");

const carouselText = document.querySelector(".carousel-text");

const carouselContainer = document.querySelector(".carousel");

// Variable del temporizador

let carouselTimer;

function changeImage() {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  // efecto transición

  carouselImg.style.opacity = 0;

  setTimeout(() => {
    carouselImg.src = images[currentImage].src;

    carouselText.textContent = images[currentImage].text;

    carouselImg.style.opacity = 1;
  }, 400);
}

/*
INICIAR TEMPORIZADOR
*/

function startCarouselTimer() {
  carouselTimer = setTimeout(() => {
    changeImage();

    startCarouselTimer();
  }, 3000);
}

/*
REINICIAR TEMPORIZADOR
*/

function resetCarouselTimer() {
  clearTimeout(carouselTimer);

  startCarouselTimer();
}

/*
CLICK EN CARRUSEL
*/

carouselContainer.addEventListener("click", () => {
  // efecto pequeño de pulsación

  carouselContainer.classList.add("zoom");

  setTimeout(() => {
    carouselContainer.classList.remove("zoom");
  }, 250);

  // cambiar imagen

  changeImage();

  // reiniciar los 8 segundos

  resetCarouselTimer();
});

// iniciar al cargar

//startCarouselTimer();
