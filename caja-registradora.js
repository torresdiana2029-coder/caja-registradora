const prompt = require("prompt-sync")();

let total = 0;
let seguir;
let precio;

do {
  precio = Number(prompt("Ingresa el precio del producto: "));

  if (isNaN(precio)) {
    console.log("Por favor ingrese un numero");
    continue;
  }

  total = total + precio;
  console.log("Subtotal hasta ahora: " + total);

  seguir = prompt("Quieres agregar otro producto (s/n): ");

} while (seguir === "s");

console.log("TOTAL A PAGAR: " + total);