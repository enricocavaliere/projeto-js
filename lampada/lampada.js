const apagarButton = document.getElementById('apagar');
const acenderButton = document.getElementById('acender');



acenderButton.addEventListener('click', () => {
    if( lamp.className === "apagar"){
        lamp.classList.add('acender')
        lamp.classList.remove('apagar')
    }
});

apagarButton.addEventListener('click', () => {
    
    if( lamp.className === "acender"){
        lamp.classList.add('apagar')
        lamp.classList.remove('acender');
    }
});