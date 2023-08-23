do {
    console.log("Bienvenido a VenXtucarro - Concesionario de carros");
    console.log("Marcas disponibles: Chevrolet, Mazda, Renault");
    const marca = prompt("Ingrese la marca de carros (Chevrolet, Mazda o Renault):").toLowerCase();
  
    let referencia;
    switch (marca) {
      case "chevrolet":
        console.log("Referencias disponibles: Captiva, Tracker");
        referencia = prompt("Ingrese la referencia del carro (Captiva o Tracker):").toLowerCase();
        break;
      case "mazda":
        console.log("Referencias disponibles: Modelo A, Modelo B");
        referencia = prompt("Ingrese la referencia del carro (Modelo A o Modelo B):").toLowerCase();
        break;
      case "renault":
        console.log("Referencias disponibles: Referencia X, Referencia Y");
        referencia = prompt("Ingrese la referencia del carro (Referencia X o Referencia Y):").toLowerCase();
        break;
      default:
        console.log("Marca inválida. Intente nuevamente.");
        continue;
    }
  
    // Mostrar información de la referencia
    console.log(`Información de ${marca} - ${referencia}:`);
    // Aquí podrías incluir detalles como características técnicas, precio, disponibilidad, etc.
  
    const continuar = prompt("¿Desea consultar otra referencia? (s/n):").toLowerCase();
    if (continuar !== "s") {
      console.log("¡Gracias por visitar VenXtucarro!");
      break;
    }
  } while (true);
  