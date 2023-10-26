"use strict";
const characterListContainer = document.getElementById("characterList");
const image = document.getElementById("image");
fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json) => {
    console.log(json);
    //   console.log(json.results);
    //   console.log(json.info)
    json.results.forEach(result => {
        const characterDiv = document.createElement("div");
        characterDiv.innerHTML = result.name, result.episode;
        characterListContainer === null || characterListContainer === void 0 ? void 0 : characterListContainer.appendChild(characterDiv);
    });
    //   for (let i = 0; i < json.results.length; i++) {       // Loops through all the characters
    //     console.log(json.results[i].name + " appears in " + json.results[i].episode.length + " episodes")
    //   }
    // Alien counter
    const valueToCount = "Alien";
    let countAliens = 0;
    for (let i = 0; i < json.results.length; i++) {
        if (json.results[i].species === valueToCount) {
            countAliens++;
        }
    }
    console.log("There are " + countAliens + " aliens in this database");
    for (let i = 0; i < json.results.length; i++) {
        if (json.results[i].status === "Alive") {
            console.log(json.results[i].name + " is alive");
        }
    }
});
