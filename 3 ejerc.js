// Mostrar un mensaje de bienvenida
console.log("¡Bienvenido! Vamos a calcular los valores relacionados con la venta de un apartamento.");

// Solicitar el costo del apartamento
const costoApartamento = parseFloat(prompt("Por favor, ingrese el costo del apartamento:"));

let tipoInmueble;
let comisionInmobiliaria;
let valorPropietario;
let valorInmobiliaria;

do {
  // Mostrar opciones disponibles para el tipo de inmueble
  console.log("Opciones disponibles para el tipo de inmueble:");
  console.log("1. Usado");
  console.log("2. Nuevo");

  // Solicitar al usuario que ingrese el tipo de inmueble
  tipoInmueble = parseInt(prompt("Ingrese el número correspondiente al tipo de inmueble (1 para Usado, 2 para Nuevo):"));

  // Validar que el valor ingresado sea una opción válida (1 o 2)
  if (tipoInmueble !== 1 && tipoInmueble !== 2) {
    console.log("Opción inválida. Por favor, ingrese 1 para Usado o 2 para Nuevo.");
  }
} while (tipoInmueble !== 1 && tipoInmueble !== 2);

// Cálculo de comisión de la inmobiliaria
if (tipoInmueble === 1) {
  comisionInmobiliaria = costoApartamento * 0.1; // 10% para inmuebles usados
} else if (tipoInmueble === 2) {
  comisionInmobiliaria = costoApartamento * 0.2; // 20% para inmuebles nuevos
}

// Cálculo de valores para el propietario y la inmobiliaria
valorPropietario = costoApartamento - comisionInmobiliaria;
valorInmobiliaria = comisionInmobiliaria;

// Mostrar resultados
console.log("Resultados:");
console.log("Valor que recibe el propietario: " + valorPropietario);
console.log("Valor recibido por la inmobiliaria: " + valorInmobiliaria);

// Mostrar un mensaje de despedida
console.log("¡Gracias por utilizar nuestro programa!");

// Finalizar el programa

