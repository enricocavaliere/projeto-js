const valor = document.getElementById ('valor');
const maisButton = document.getElementById('mais');
const menosButton = document.getElementById('menos');
const resetButton = document.getElementById('reset');

const updtadeValor = () => {
    valor.innerHTML = cont;
};

let cont = 0;
let intervalId = 0;
maisButton.addEventListener('mousedown', () => {
    intervalId = setInterval (() => {
        cont += 1;
        updtadeValor()
    }, 100);
});

menosButton.addEventListener('mousedown', () => {
    intervalId = setInterval (() => {
        cont -= 1;
        updtadeValor()
    }, 100);
});

resetButton.addEventListener('click', () => {
    cont= 0;
    updtadeValor();
});
document.addEventListener('mouseup', () => clearInterval(intervalId));
