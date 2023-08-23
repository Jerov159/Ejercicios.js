let saldo = 1000.00;  // Saldo inicial

function consultarSaldo() {
    console.log("Su saldo actual es: $" + saldo.toFixed(2));
}

function realizarRetiro(cantidad) {
    if (cantidad > 0 && cantidad <= saldo) {
        saldo -= cantidad;
        console.log("Retiro exitoso. Su saldo restante es: $" + saldo.toFixed(2));
    } else if (cantidad <= 0) {
        console.log("Por favor, ingrese una cantidad válida para el retiro.");
    } else {
        console.log("Saldo insuficiente para el retiro.");
    }
}

function realizarConsignacion(cantidad) {
    if (cantidad > 0) {
        saldo += cantidad;
        console.log("Consignación exitosa. Su saldo actual es: $" + saldo.toFixed(2));
    } else {
        console.log("Por favor, ingrese una cantidad válida para la consignación.");
    }
}

function main() {
    while (true) {
        console.log("1. Consultar saldo");
        console.log("2. Realizar retiro");
        console.log("3. Realizar consignación");
        console.log("4. Salir");
        
        const opcion = parseInt(prompt("Seleccione una opción:"));

        switch (opcion) {
            case 1:
                consultarSaldo();
                break;
            case 2:
                const cantidadRetiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
                realizarRetiro(cantidadRetiro);
                break;
            case 3:
                const cantidadConsignacion = parseFloat(prompt("Ingrese la cantidad a consignar:"));
                realizarConsignacion(cantidadConsignacion);
                break;
            case 4:
                console.log("Gracias por utilizar la simulación de cajero automático. ¡Hasta luego!");
                return;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
                break;
        }
    }
}

main(); // Iniciar el programa