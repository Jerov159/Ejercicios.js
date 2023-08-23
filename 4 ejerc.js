// Mostrar un mensaje de bienvenida
console.log("Bienvenido a Lavanservis, el servicio de limpieza de prendas.");

// Mostrar opciones de servicios
console.log("Opciones de servicios:");
console.log("1. Lavado");
console.log("2. Planchado");

// Solicitar al cliente que seleccione un servicio
const servicio = parseInt(prompt("Seleccione un servicio (1 para Lavado, 2 para Planchado):"));

// Validar la opción seleccionada
if (servicio === 1) {
  // Servicio de lavado
  console.log("Opciones de lavado:");
  console.log("1. En seco");
  console.log("2. Normal");

  // Solicitar al cliente que seleccione el tipo de lavado
  const tipoLavado = parseInt(prompt("Seleccione el tipo de lavado (1 para En seco, 2 para Normal):"));

  // Solicitar la cantidad de prendas
  const cantidadPrendas = parseInt(prompt("Ingrese la cantidad de prendas:"));

  // Calcular el costo del servicio de lavado
  let costoLavado = 0;
  if (tipoLavado === 1) {
    costoLavado = cantidadPrendas * 4000;
  } else if (tipoLavado === 2) {
    costoLavado = cantidadPrendas * 3000;
  }

  // Mostrar el costo del servicio de lavado
  console.log("El costo del servicio de lavado es: " + costoLavado);
} else if (servicio === 2) {
  // Servicio de planchado
  // Solicitar la cantidad de prendas
  const cantidadPrendas = parseInt(prompt("Ingrese la cantidad de prendas:"));

  // Calcular el costo del servicio de planchado
  const costoPlanchado = cantidadPrendas * 2000;

  // Agregar cargo por domicilio si es planchado
  const domicilioPlanchado = 4000;
  const costoTotalPlanchado = costoPlanchado + domicilioPlanchado;

  // Mostrar el costo del servicio de planchado con domicilio
  console.log("El costo del servicio de planchado es: " + costoTotalPlanchado);
} else {
  console.log("Opción inválida. Por favor, seleccione 1 para Lavado o 2 para Planchado.");
}

// Mostrar un mensaje de despedida
console.log("Gracias por utilizar Lavanservis. ¡Hasta luego!");
