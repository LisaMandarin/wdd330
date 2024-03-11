if ("content" in document.createElement("template")) {
    const tbody = document.querySelector("tbody");
    const template = document.querySelector("template")

    const clone1 = template.content.cloneNode(true);
    let td = clone1.querySelectorAll("td");
    td[0].textContent = "1";
    td[1].textContent = "2";

    tbody.appendChild(clone1)

    const clone2 = template.content.cloneNode(true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "3";
    td[1].textContent = "4";

    tbody.appendChild(clone2);

    const clone3 = template.content.cloneNode(true);
    td = clone3.querySelectorAll("td");
    td[0].textContent = "5";
    td[1].textContent = "6";

    tbody.appendChild(clone3);
}
  