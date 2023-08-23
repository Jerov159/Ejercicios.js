let puntajeTotal = 0;

let i = 1;
do {
  console.log(`Pregunta ${i}:`);

  // Simular preguntas de selección múltiple o verdadero/falso
  if (i === 1) {
    console.log("¿Cuál es la capital de Francia?");
    console.log("a) Madrid");
    console.log("b) París");
    console.log("c) Londres");
  } else if (i === 2) {
    console.log("¿Cuál de las siguientes afirmaciones es verdadera?");
    console.log("a) El sol gira alrededor de la Tierra.");
    console.log("b) La Tierra es plana.");
    console.log("c) La Tierra gira alrededor del sol.");
  }
  // Continuar con el resto de preguntas...

  const respuesta = prompt("Ingrese la letra de su respuesta:").toLowerCase();

  if ((i === 1 && respuesta === "b") || (i === 2 && respuesta === "c")) {
    puntajeTotal += 10;
  }
  // Evaluar el resto de preguntas y respuestas...

  console.log(); // Agregar línea en blanco para separar preguntas
  i++;
} while (i <= 5);

const respuestasCorrectas = puntajeTotal / 10;
console.log(`Cantidad de respuestas correctas: ${respuestasCorrectas}`);
console.log(`Puntaje total obtenido: ${puntajeTotal} puntos.`);
