"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const characterListContainer = document.getElementById("characterList");
    // const image = document.getElementById("image"); eða seinna
    fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json) => {
        console.log(json);
        json.results.forEach(result => {
            const characterDiv = document.createElement("div");
            // characterDiv.innerHTML = `${result.name} - Appears in ${result.episode.length} episodes `;
            characterDiv.innerHTML = `
                <div class="test">
                    <div>
                        <img src="${result.image}" alt="${result.name}">
                    </div>

                    <div class="characterInfo">
                        <h2>${result.name}</h2>
                        <ul>
                            <li>${result.gender}</li>
                            <li>${result.species}</li>
                            <li>${result.status}</li>
                            <li>${result.episode.length} episodes</li>
                        </ul>
                    </div>
                </div>
                `;
            characterListContainer === null || characterListContainer === void 0 ? void 0 : characterListContainer.appendChild(characterDiv);
        });
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
});
