
const boxRed = (element) => {
    element.style.backgroundColor = "red";
    element.style.color = "#ffffff"
}

const boxBlue = (element) => {
    element.style.backgroundColor = "blue";
    element.style.color = "#ffffff"
}

const boxGreen = (element) => {
    element.style.backgroundColor = 'green';
    element.style.color = "#ffffff"
}

const boxYellow = (element) => {
    element.style.backgroundColor = 'yellow';
    element.style.color = "#000"
}

const form = document.querySelector('.input-form form');
const nameInput = form.querySelector('input[name="name"]');
const greetElement = document.getElementById('greet-name');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    greetElement.innerText = "Hello, "+name;
})
