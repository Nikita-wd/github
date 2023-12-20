const initSlider = () => {
  const imagelist = document.querySelector(".image-list");
  const slideButtons = document.querySelectorAll("right");
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "right12" ? -1 : 1;

      imagelist.scrollby({ left: scrollAmount, behavior: "smooth" });
    });
  });
};
window.addEventListener("laod", initSlider);
