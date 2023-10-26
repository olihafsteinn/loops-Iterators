const characterListContainer = document.getElementById("characterList");
const image = document.getElementById("image")

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


fetch('https://rickandmortyapi.com/api/character').then((r) => r.json()).then((json:{info:Info, results:Character[] }) => {

console.log(json);
//   console.log(json.results);
//   console.log(json.info)
    
json.results.forEach(result => {
    const characterDiv = document.createElement("div");
    characterDiv.innerHTML = result.name
    characterListContainer?.appendChild(characterDiv);
})


//   for (let i = 0; i < json.results.length; i++) {       // Loops through all the characters
//     console.log(json.results[i].name + " appears in " + json.results[i].episode.length + " episodes")
//   }

// Alien counter
const valueToCount:string = "Alien";
let countAliens:number = 0;
for (let i = 0; i < json.results.length; i++) {
    if (json.results[i].species === valueToCount) {
        countAliens++;
    }
}
console.log("There are " + countAliens + " aliens in this database")

for (let i = 0; i < json.results.length; i++) {
    if (json.results[i].status === "Alive") {
        console.log(json.results[i].name + " is alive")
    } 

});

