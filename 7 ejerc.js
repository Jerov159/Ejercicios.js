// Solicitar al usuario si es devolución o pérdida
let opcion;
do {
  console.log("Seleccione una opción:");
  console.log("1. Devolución");
  console.log("2. Pérdida");
  opcion = parseInt(prompt("Ingrese la opción (1 para Devolución, 2 para Pérdida):"));
} while (opcion !== 1 && opcion !== 2);

let montoTotal;

if (opcion === 1) {
  // Devolución
  const diasRetraso = parseInt(prompt("Ingrese la cantidad de días de retraso:"));
  const revistasPrestadas = parseInt(prompt("Ingrese la cantidad de revistas prestadas:"));
  const librosPrestados = parseInt(prompt("Ingrese la cantidad de libros prestados:"));

  const costoRetrasoRevistas = diasRetraso * 500;
  const costoRetrasoLibros = diasRetraso * 600;

  montoTotal = costoRetrasoRevistas + costoRetrasoLibros;
} else if (opcion === 2) {
  // Pérdida
  const ejemplaresPerdidos = parseInt(prompt("Ingrese la cantidad de ejemplares perdidos:"));

  montoTotal = ejemplaresPerdidos * 10000;
}

// Mostrar el monto total de la multa a pagar
console.log(`El monto total de la multa a pagar es: $${montoTotal}`);
