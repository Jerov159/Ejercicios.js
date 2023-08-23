// Inicializar variables de conteo de votos
let votosAnaMaria = 0;
let votosDiego = 0;

// Repetir 10 veces para los 10 votantes
for (let i = 1; i <= 10; i++) {
  console.log(`Votante ${i}, elija una opción de voto:`);
  console.log("1. Ana Maria Suarez");
  console.log("2. Diego Acero");

  // Leer la opción de voto ingresada por el votante
  const opcionVoto = parseInt(prompt("Ingrese el número de su opción de voto:"));

  // Incrementar el conteo de votos según la opción elegida
  if (opcionVoto === 1) {
    votosAnaMaria++;
  } else if (opcionVoto === 2) {
    votosDiego++;
  } else {
    console.log("Opción inválida. No se ha registrado el voto.");
  }
}

// Determinar quién es el ganador y quién es el perdedor
if (votosAnaMaria > votosDiego) {
  console.log("El ganador es Ana Maria Suarez.");
  console.log("El perdedor es Diego Acero.");
} else if (votosDiego > votosAnaMaria) {
  console.log("El ganador es Diego Acero.");
  console.log("El perdedor es Ana Maria Suarez.");
} else {
  console.log("La votación terminó en empate.");
}

// Mostrar los resultados de la votación
console.log(`Ana Maria Suarez recibió ${votosAnaMaria} votos.`);
console.log(`Diego Acero recibió ${votosDiego} votos.`);
