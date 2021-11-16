const link = document.querySelectorAll("span");
const body = document.querySelector("body");

link.forEach((item) => {
  item.addEventListener("click", () => {
    const bodyColor = item.dataset.color;
    body.style.backgroundColor = bodyColor;
  });
});
