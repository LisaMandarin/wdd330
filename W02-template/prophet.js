const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphets(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        const name = prophet.name + " " + prophet.lastname;
        const birthDate = prophet.birthdate;
        const birthPlace = prophet.birthplace;
        const imgUrl = prophet.imageurl;

        const template = document.querySelector("#template");
        const clone = template.content.cloneNode(true);
        clone.children[0].children[0].textContent = name;
        clone.children[0].children[1].textContent = birthDate;
        clone.children[0].children[2].textContent = birthPlace;
        clone.children[0].children[3].src = imgUrl;
        clone.children[0].children[3].alt = name
        document.body.appendChild(clone);
    });
}


getProphets(url);
