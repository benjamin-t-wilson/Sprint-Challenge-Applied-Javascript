// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let infoRequest = axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    Object.keys(response.data.articles).forEach(cv => {
      if (cv == "javascript") {
        return new cardComp(response.data.articles[cv], "javascript");
      }
      if (cv == "bootstrap") {
        return new cardComp(response.data.articles[cv], "bootstrap");
      }
      if (cv == "technology") {
        return new cardComp(response.data.articles[cv], "technology");
      }
      if (cv == "jquery") {
        return new cardComp(response.data.articles[cv], "jquery");
      }
      if (cv == "node") {
        return new cardComp(response.data.articles[cv], "node");
      }
    });
  })
  .catch(error => {
    console.log("error", error);
  });

const cardsCont = document.querySelector(".cards-container");

function cardComp(obj, dat) {
  obj.forEach(cv => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.dataset.tab = dat;
    cardsCont.appendChild(cardDiv);

    let cardHead = document.createElement("div");
    cardHead.classList.add("headline");
    cardHead.textContent = cv.headline;
    cardDiv.appendChild(cardHead);

    let cardAuth = document.createElement("div");
    cardAuth.classList.add("author");
    cardDiv.appendChild(cardAuth);

    let cardImgCont = document.createElement("div");
    cardImgCont.classList.add("img-container");
    cardAuth.appendChild(cardImgCont);

    let cardImg = document.createElement("img");
    cardImg.src = cv.authorPhoto;
    cardImgCont.appendChild(cardImg);

    let cardAuthName = document.createElement("span");
    cardAuthName.textContent = `By: ${cv.authorName}`;
    cardAuth.appendChild(cardAuthName);
  });
}
