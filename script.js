
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
const statusMessage = document.getElementById('status-error');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    if (name !== "") {
        statusMessage.innerText = "";
        greetElement.innerText = "Hello, "+name;
    }else{
        statusMessage.style.backgroundColor = "#f8d7da";
        statusMessage.style.border = "1px solid #f5c6cb";
        statusMessage.innerText = "⚠️ Please enter your name to Greet!";
    }
})
