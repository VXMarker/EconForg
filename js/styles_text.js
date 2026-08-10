const underlineElements = document.querySelectorAll(".effect-underline");
const textElements = document.querySelectorAll(".text-description");
const economyFeature = document.querySelectorAll(".economy-feature");

underlineElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("effect-underline-active");
  });
});

economyFeature.forEach((element) => {
  element.addEventListener("click", () => {
    const title = element.querySelector(".effect-underline-card");
    title.classList.toggle("effect-underline-card-active");
    element.classList.toggle("economy-feature-active");
  });
});

textElements.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("text-description-active");
  });
});
