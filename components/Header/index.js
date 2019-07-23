// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headCont = document.querySelector(".header-container");
function Header() {
  let headDiv = document.createElement("div");
  headDiv.classList.add("header");
  headCont.appendChild(headDiv);

  let headDate = document.createElement("span");
  headDate.classList.add("date");
  headDate.textContent = "SMARCH 28, 2019";
  headDiv.appendChild(headDate);

  let headH1 = document.createElement("h1");
  headH1.textContent = "Lambda Times";
  headDiv.appendChild(headH1);

  let headTemp = document.createElement("span");
  headTemp.classList.add("temp");
  headTemp.textContent = "98°";
  headDiv.appendChild(headTemp);
}
Header();
