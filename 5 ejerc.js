// Solicitar al usuario que elija el tamaño de los stickers
const tamano = prompt("Elija el tamaño de los stickers (pequeño o grande):");

// Definir los costos de stickers
let costoUnitario;

if (tamano === "pequeño") {
  costoUnitario = 4000;
} else if (tamano === "grande") {
  costoUnitario = 6000;
} else {
  console.log("Opción inválida. Por favor, elija 'pequeño' o 'grande'.");
  process.exit(1); // Salir del programa debido a opción inválida
}

// Solicitar al usuario la cantidad de stickers que desea comprar
let cantidad = parseInt(prompt("Ingrese la cantidad de stickers que desea comprar (mínimo 10):"));

// Verificar si la cantidad es menor que 10
while (cantidad < 10) {
  console.log("La cantidad mínima permitida es 10. Por favor, ingrese una cantidad válida.");
  cantidad = parseInt(prompt("Ingrese la cantidad de stickers que desea comprar (mínimo 10):"));
}

// Calcular el costo total
const costoTotal = costoUnitario * cantidad;

// Mostrar el costo total a pagar al usuario
console.log("El costo total de los stickers es: $" + costoTotal);
