var titleHeader = document.querySelector(".l-header");

var yellowColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--yellow")
  .trim();

let isBlue = false;

titleHeader.addEventListener("click", () => {
  if (isBlue) {
    titleHeader.style.backgroundColor = "#005564";
    titleHeader.style.color = "#FFFFFF";
  } else {
    titleHeader.style.backgroundColor = "#fce757";
    titleHeader.style.color = "#005564"; // la couleur de text ne marche pas
  }
  isBlue = !isBlue;
});

var products = document.querySelectorAll(".product");
var description = document.querySelector(".description-hidden");

var redColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--red")
  .trim();
var blueColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--light-blue")
  .trim();
var greenColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--green")
  .trim();

products.forEach(function (product) {
  product.addEventListener("click", function () {
    if (product.style.backgroundColor) {
      product.style.backgroundColor = "";
    } else {
      products.forEach(function (prod) {
        prod.style.backgroundColor = "";
      });

      if (product.classList.contains("pink")) {
        product.style.backgroundColor = redColor;
      } else if (product.classList.contains("green")) {
        product.style.backgroundColor = greenColor;
      } else if (product.classList.contains("blue")) {
        product.style.backgroundColor = blueColor;
      }
    }

    product.querySelector(".description-hidden").classList.toggle("show");
  });
});
