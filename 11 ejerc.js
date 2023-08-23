const costoServicio = 500;
let montoTotal = 0;

do {
  console.log("Elija el tipo de pago:");
  console.log("1. Moneda");
  console.log("2. Billete");
  const tipoPago = parseInt(prompt("Ingrese el número de su opción de pago:"));

  if (tipoPago === 1) {
    console.log("Seleccione el valor de la moneda:");
    console.log("1. 500 pesos");
    console.log("2. 1000 pesos");
    const valorMoneda = parseInt(prompt("Ingrese el número de su opción de valor de moneda:"));

    if (valorMoneda === 1) {
      montoTotal += 500;
    } else if (valorMoneda === 2) {
      montoTotal += 1000;
    } else {
      console.log("Valor de moneda inválido.");
    }
  } else if (tipoPago === 2) {
    console.log("Seleccione el valor del billete:");
    console.log("1. 2000 pesos");
    console.log("2. 5000 pesos");
    const valorBillete = parseInt(prompt("Ingrese el número de su opción de valor de billete:"));

    if (valorBillete === 1) {
      montoTotal += 2000;
    } else if (valorBillete === 2) {
      montoTotal += 5000;
    } else {
      console.log("Valor de billete inválido.");
    }
  } else {
    console.log("Opción de pago inválida.");
  }
} while (montoTotal < costoServicio);

if (montoTotal === costoServicio) {
  console.log("Pago completo. ¡Vuelve pronto!");
} else if (montoTotal < costoServicio) {
  console.log("Falta dinero para completar el pago.");
} else {
  const cambio = montoTotal - costoServicio;
  console.log(`Cambio: ${cambio} pesos. ¡Vuelve pronto!`);
}
