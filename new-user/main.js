"use strict";

const button = document.querySelector(".js-button");
const painContainer = document.querySelector(".js-paint-container");

const getUser = () => {
  fetch("https://randomuser.me/api/?inc=name,picture")
    .then((response) => response.json())
    .then((data) => {
      paint(
        data.results[0].name.first,
        data.results[0].name.last,
        data.results[0].picture.medium
      );
    });
};

button.addEventListener("click", getUser);

/* 
paint when loading the page */

const paint = (name = "Nombre", lastName = "Apellidos", src = "") => {
  painContainer.innerHTML = "";
  painContainer.innerHTML = `<p class="name">${name}</p>
<p class="last-name">${lastName}</p>
<img src="${src}" alt="" class="image" />`;
};

paint();
