"use strict";

const url =
  "//beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    paintPalette(data.palettes[0]);
  });

// Paint elements
function paintPalette(palette) {
  palettesContainer.innerHTML = `
     <section class="palette">
         <h2 class="palette__title">${palette.name}</h2>
         <div class="palette__colors-container">
         <div
             class="palette__colors-item"
             style="background-color: #${palette.colors[0]}"
         ></div>
         <div
             class="palette__colors-item"
             style="background-color:  #${palette.colors[1]}"
         ></div>
         <div
             class="palette__colors-item"
             style="background-color:  #${palette.colors[2]}"
         ></div>
         <div
             class="palette__colors-item"
             style="background-color:  #${palette.colors[3]}"
         ></div>
         <div
             class="palette__colors-item"
             style="background-color:  #${palette.colors[4]}"
         ></div>
         </div>
     </section>
     `;
}

//Select elements

const palettesContainer = document.querySelector(".palettes-container");
