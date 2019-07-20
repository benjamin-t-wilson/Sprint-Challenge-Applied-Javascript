// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
let objRequest = axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    response.data.topics.forEach(cv => {
      return new TabBuilder(cv);
    });
  })
  .catch(error => {
    console.log("error", error);
  });

const topics = document.querySelector(".topics");

function TabBuilder(obj) {
  let div = document.createElement("div");
  div.classList.add("tab");
  div.textContent = obj;
  topics.appendChild(div);
}

window.setTimeout(() => {
  let tabsList = document.querySelectorAll(".tab");
  tabsList.forEach(cv => {
    if (cv.textContent.includes("javascript")) {
      cv.dataset.tab = "javascript";
    }
    if (cv.textContent.includes("bootstrap")) {
      cv.dataset.tab = "bootstrap";
    }
    if (cv.textContent.includes("technology")) {
      cv.dataset.tab = "technology";
    }
    if (cv.textContent.includes("jquery")) {
      cv.dataset.tab = "jquery";
    }
    if (cv.textContent.includes("node")) {
      cv.dataset.tab = "node";
    }
  });
}, 3000);