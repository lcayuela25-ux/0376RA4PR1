# 0376RA4PR1 - Exercicis DOM

Practica manipulacio del DOM.

## Fitxers del projecte

- index.html
- style.css
- script.js
- README.md

## Exercicis

### 1. Selecció
Canviar el color del títol amb JavaScript.

Codi:
`document.querySelector("#titol-principal").style.color = "blue";`

### 2. Contingut
Canviar el text d'un paràgraf.

Codi:
`document.querySelector("#paragraf-hola").textContent = "Hola Món";`

### 3. Atributs
Canviar la imatge amb setAttribute.

Codi:
`document.querySelector("#imatge-canviant").setAttribute("src","https://via.placeholder.com/150/ff0000");`

### 4. Esdeveniments
Mostrar una alerta quan es fa clic en un botó.

Codi:
`document.querySelector("#boto-alerta").addEventListener("click", function(){ alert("Hola!"); });`

### 5. Classes
Afegir o treure una classe amb toggle.

Codi:
`document.querySelector("#boto-toggle").addEventListener("click", function(){ document.querySelector("#text-classe").classList.toggle("actiu"); });`

### 6. Crear element
Afegir un nou element a la llista.

Codi:
`let nouItem = document.createElement("li");`

### 7. Eliminació
Eliminar un element del DOM.

Codi:
`document.querySelector("#element-eliminar").addEventListener("click", function(){ this.remove(); });`