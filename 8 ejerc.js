let lado1, lado2, lado3;

// Solicitar al usuario la longitud del primer lado del triángulo y verificar si es válido
do {
  lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del triángulo:"));
} while (isNaN(lado1) || lado1 <= 0);

// Solicitar al usuario la longitud del segundo lado del triángulo y verificar si es válido
do {
  lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del triángulo:"));
} while (isNaN(lado2) || lado2 <= 0);

// Solicitar al usuario la longitud del tercer lado del triángulo y verificar si es válido
do {
  lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado del triángulo:"));
} while (isNaN(lado3) || lado3 <= 0);

// Verificar si los tres lados son iguales
if (lado1 === lado2 && lado1 === lado3) {
  console.log("El triángulo es equilátero.");
} else {
  console.log("El triángulo no es equilátero.");
}