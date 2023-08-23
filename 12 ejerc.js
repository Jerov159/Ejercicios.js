const numeroEquipos = 3; // Cambiar esto si se desea ingresar más equipos

let equipos = [];
let i = 1;
while (i <= numeroEquipos) {
  const nombreEquipo = prompt(`Ingrese el nombre del equipo ${i}:`);
  equipos.push({ nombre: nombreEquipo, puntos: 0 });
  i++;
}

let fecha = 1;
while (fecha <= 3) {
  console.log(`--- Fecha ${fecha} ---`);
  
  let i = 0;
  while (i < equipos.length) {
    const marcadorEquipo = parseInt(prompt(`Ingrese el marcador para ${equipos[i].nombre} en la fecha ${fecha}:`));

    if (marcadorEquipo > 0) {
      if (marcadorEquipo === 3) {
        equipos[i].puntos += 3; // Victoria
      } else if (marcadorEquipo === 1) {
        equipos[i].puntos += 1; // Empate
      } else {
        console.log("Resultado inválido. No se sumarán puntos.");
      }
    }

    i++;
  }

  fecha++;
}

equipos.sort((a, b) => b.puntos - a.puntos);

console.log("--- Ranking de Equipos ---");
let `i` = 0;
while (i < equipos.length) {
  console.log(`${i + 1}. ${equipos[i].nombre} - ${equipos[i].puntos} puntos`);
  i++;
}
