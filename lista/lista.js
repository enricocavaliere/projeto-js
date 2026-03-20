const adicionar = document.getElementById('adicionar');
let input = document.getElementById("input")

adicionar.addEventListener("click", () => {
    if(input.value.trim() ===""){
        alert("Digite uma tarefa para adicionar a sua lista")
        return
    }

    const item = document.createElement("li");
    item.textContent = input.value;

    const excluir = document.createElement("button");
    excluir.textContent = "Excluir item"

    item.appendChild(excluir);
    excluir.addEventListener("click", () => {
        item.remove()
    })

    document.getElementById("lista").appendChild(item);

    input.value = "";
});
    
