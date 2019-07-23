/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const caroCont = document.querySelector(".carousel-container");

function CarouselBuilder() {
  let carDiv = document.createElement("div");
  carDiv.classList.add("carousel");
  caroCont.appendChild(carDiv);

  let carLeftBtn = document.createElement("div");
  carLeftBtn.textContent = "<-";
  carLeftBtn.classList.add("left-button");
  carDiv.appendChild(carLeftBtn);

  let carImg1 = document.createElement("img");
  carImg1.src = "./assets/carousel/mountains.jpeg";
  carDiv.appendChild(carImg1);

  let carImg2 = document.createElement("img");
  carImg2.src = "./assets/carousel/computer.jpeg";
  carDiv.appendChild(carImg2);

  let carImg3 = document.createElement("img");
  carImg3.src = "./assets/carousel/trees.jpeg";
  carDiv.appendChild(carImg3);

  let carImg4 = document.createElement("img");
  carImg4.src = "./assets/carousel/turntable.jpeg";
  carDiv.appendChild(carImg4);

  let carRightBtn = document.createElement("div");
  carRightBtn.textContent = "->";
  carRightBtn.classList.add("right-button");
  carDiv.appendChild(carRightBtn);
}
CarouselBuilder();

var next = document.querySelector(".right-button");
var prev = document.querySelector(".left-button");
var items = document.querySelectorAll(".carousel img");
var counter = 0;
var amount = items.length;
var current = items[0];
function navigate(direction) {
  current.style.display = "none";
  counter = counter + direction;
  if (direction === -1 && counter < 0) {
    counter = amount - 1;
  }
  if (direction === 1 && !items[counter]) {
    counter = 0;
  }
  current = items[counter];
  current.style.display = "block";
}
next.addEventListener("click", function(ev) {
  navigate(1);
});
prev.addEventListener("click", function(ev) {
  navigate(-1);
});
navigate(0);
