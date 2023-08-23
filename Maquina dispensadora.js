const PRODUCTO_1 = "Refresco";
const PRODUCTO_2 = "Snack";
const PRECIO_PRODUCTO_1 = 1.50;
const PRECIO_PRODUCTO_2 = 1.00;
let SALDO = 0.00;

function mostrarMenu() {
    console.log("1. " + PRODUCTO_1 + " - $" + PRECIO_PRODUCTO_1);
    console.log("2. " + PRODUCTO_2 + " - $" + PRECIO_PRODUCTO_2);
}

function insertarDinero() {
    const cantidad = parseFloat(prompt("Ingrese la cantidad de dinero:"));
    SALDO += cantidad;
}

function realizarCompra(producto, precio) {
    if (SALDO >= precio) {
        console.log("Dispensando " + producto);
        SALDO -= precio;
        console.log("Su saldo restante: $" + SALDO.toFixed(2));
    } else {
        console.log("Saldo insuficiente. Por favor, ingrese más dinero.");
    }
}

function main() {
    while (true) {
        mostrarMenu();
        const opcion = parseInt(prompt("Ingrese el número de producto (1 o 2), o 0 para salir:"));

        if (opcion === 0) {
            break;
        } else if (opcion === 1) {
            insertarDinero();
            realizarCompra(PRODUCTO_1, PRECIO_PRODUCTO_1);
        } else if (opcion === 2) {
            insertarDinero();
            realizarCompra(PRODUCTO_2, PRECIO_PRODUCTO_2);
        } else {
            console.log("Opción inválida. Por favor, seleccione una opción válida.");
        }
    }
}

main(); // Iniciar el programa