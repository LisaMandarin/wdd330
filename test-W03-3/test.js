
function showPicture() {
    const template = document.querySelector("template");
    const clone = template.content.cloneNode(true);
    document.body.appendChild(clone);
}

