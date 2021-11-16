const link = document.querySelectorAll("span"); // Getting all the span elements
const body = document.querySelector("body"); // Getting the body

link.forEach((item) => {
  item.addEventListener("click", () => {
    const bodyColor = item.dataset.color;
    body.style.backgroundColor = bodyColor;
  });
});
