const numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));

console.log(`Tabla de multiplicar del ${numero}:`);
for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
  const resultado = numero * multiplicador;
  console.log(`${numero} x ${multiplicador} = ${resultado}`);
}
