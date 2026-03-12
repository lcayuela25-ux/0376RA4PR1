console.log("DOM carregat");

// 1 Selecció
document.querySelector("#titol-principal").style.color = "blue";

// 2 Contingut
document.querySelector("#paragraf-hola").textContent = "Hola Món";

// 3 Atributs
document.querySelector("#imatge-canviant").setAttribute("src", "gato.webp");

// 4 Esdeveniments
document.querySelector("#boto-alerta").addEventListener("click", function () {
    alert("Hola!");
});

// 5 Classes
document.querySelector("#boto-toggle").addEventListener("click", function () {
    document.querySelector("#text-classe").classList.toggle("actiu");
});

// 6 Estructura
document.querySelector("#boto-afegir").addEventListener("click", function () {
    let nouItem = document.createElement("li");
    nouItem.textContent = "Nou producte";
    document.querySelector("#llista-compra").appendChild(nouItem);
});

// 7 Eliminació
document.querySelector("#element-eliminar").addEventListener("click", function () {
    this.remove();
});