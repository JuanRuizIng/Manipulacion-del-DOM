const h1 = document.querySelector("#HTML")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#calcular")
const sResult = document.querySelector("#result");
const form = document.querySelector("#formulario")

form.addEventListener("mouseover", btnCalcular); //La que más se va a encontrar en JavaScript

function btnCalcular (event){
    event.preventDefault();//Para evitar que el formulario se recargue la página al hacer submit
    const suma = parseInt(input1.value) + parseInt(input2.value)
    sResult.innerHTML = "Resultado: " + suma
    alert("virus")
}