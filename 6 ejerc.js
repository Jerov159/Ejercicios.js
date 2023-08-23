// Mostrar el menú de opciones
console.log("Menú de opciones:");
console.log("1. Pizza");
console.log("2. Sándwiches");
console.log("3. Ensaladas");

let opcion;
let costoUnitario;
let producto;

// Solicitar al usuario que seleccione una opción válida
do {
  opcion = parseInt(prompt("Seleccione una opción (1 para Pizza, 2 para Sándwiches, 3 para Ensaladas):"));

  if (opcion >= 1 && opcion <= 3) {
    if (opcion === 1) {
      costoUnitario = 7000;
      producto = "Pizza";
    } else if (opcion === 2) {
      costoUnitario = 5000;
      producto = "Sándwiches";
    } else if (opcion === 3) {
      costoUnitario = 15000;
      producto = "Ensaladas";
    }
  } else {
    console.log("Opción inválida. Por favor, seleccione una opción válida.");
  }
} while (opcion < 1 || opcion > 3);

// Solicitar al usuario la cantidad de porciones
let cantidadPorciones;
do {
  cantidadPorciones = parseInt(prompt(`Ingrese la cantidad de porciones de ${producto} que desea: `));

  if (cantidadPorciones < 1) {
    console.log("Cantidad inválida. Por favor, ingrese una cantidad válida.");
  }
} while (cantidadPorciones < 1);

// Calcular el costo básico del pedido
let costoPedido = costoUnitario * cantidadPorciones;

// Solicitar al usuario si desea agregar salsa adicional
const respuestaSalsa = prompt("¿Desea agregar salsa adicional por $500 pesos? (sí/no): ");

if (respuestaSalsa.toLowerCase() === "sí") {
  costoPedido += 500;
}

// Mostrar el costo total al cliente
console.log(`El costo total de su pedido de ${cantidadPorciones} porciones de ${producto} es: $${costoPedido}`);
