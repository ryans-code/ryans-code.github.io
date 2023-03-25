const buttons = document.querySelectorAll("[data-carousel-button]");
let index = 0;

function carousel() {
  const currentSlide = document.querySelector("[data-active]");
  let x = document.getElementsByClassName("slide");

  if (index >= x.length) {
    index = 0;
  }
  delete currentSlide.dataset.active;
  x[index].dataset.active = true;
  index++;

  setTimeout(carousel, 5000);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    index = newIndex;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

carousel();
