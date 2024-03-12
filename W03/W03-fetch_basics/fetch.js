const url = "http://pokeapi.co/api/v2/pokemon/ditto";
let results = null;

async function doStuff(data) {
    results = await data;
    // results.forEach((pokemon) => {
    //     const div = document.querySelector("div");
    //     div.textContent = pokemon.name;
    //     document.querySelector("main").appendChild(div);
    //     console.log("123");
    // });
    console.table(results);
}



async function getPokemon(url) {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json();
        doStuff(data);
    }
}

getPokemon(url);
// console.log("second", );
