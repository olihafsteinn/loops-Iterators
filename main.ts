type Info = {
    count: number,
    next: string | null,
    pages: number,
    prev: string | null,
    }
type Character = {
    created: string,
    episode: string[],
    gender: string,
    id: number,
    image: string,
    location: {
        name: string,
        url: string,
    },
    name: string,
    origin: {
        name: string,
        url: string,
    },
    species: string,
    status: string,
    type: string,
    url: string,
    }

document.addEventListener("DOMContentLoaded", function () {
    // Get the HTML element with the ID "characterList"
    const characterListContainer = document.getElementById("characterList");

    // Fetch data from the Rick and Morty API                   Parse the response as JSON
    fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json: { info: Info, results: Character[] }) => {
        console.log(json);

        // Process each character in the API response
        json.results.forEach(result => {
            // Create a new div element for each character
            const characterDiv = document.createElement("div");
            // Populate the div with HTML content using template literals
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
            // Append the new character div to the characterListContainer
            characterListContainer?.appendChild(characterDiv);
        });


        // Just something extra
        const valueToCount: string = "Alien";
        let countAliens: number = 0;

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