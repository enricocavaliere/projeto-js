const btnAdicionar = document.getElementById("Adicionar");
let input = document.getElementById("input");
 
btnAdicionar.addEventListener("click", () => {
  if(input.value.trim() === ""){
    alert("Digite uma tarefa para adicionar.")
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
 
 
 