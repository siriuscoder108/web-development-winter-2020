// WRITE YOUR CODE IN HERE:
const container = document.querySelector("#container")
for (let i = 1; i < 101; i++) {
    const button = document.createElement("button");
    button.innerText = `Button # ${i}`;
    container.appendChild(button);
}