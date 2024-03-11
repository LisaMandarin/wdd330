// const container = document.querySelector("#container");
const template = document.querySelector("#template");

function clickHandler(e) {
  e.target.append(" — Clicked this div");
}

const firstClone = template.content.cloneNode(true);
firstClone.addEventListener("click", clickHandler);
container.appendChild(firstClone);

const clone = template.content.cloneNode(true);
clone.childNodes[1].addEventListener("click", clickHandler);
container.appendChild(clone);

