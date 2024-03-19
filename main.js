let totalPedido = 0;
let seleccionados = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};

function seleccionarComida(opcion) {
    let precio = 0;

    switch(opcion) {
        case 1:
            precio = 15500; 
            break;
        case 2:
            precio = 9500;
            break;
        case 3:
            precio = 6800; 
            break;
        case 4:
            precio = 1500;
            break;
        default:
            console.log("Opción inválida");
            return;
    }

    totalPedido += precio;
    seleccionados[opcion]++;
    actualizarTotal();
    actualizarCantidad(opcion);
}

function borrarComida(opcion) {
    let precio = 0;

    switch(opcion) {
        case 1:
            precio = 15500; 
            break;
        case 2:
            precio = 9500; 
            break;
        case 3:
            precio = 6800;
            break;
        case 4:
            precio = 1500; 
            break;
        default:
            console.log("Opción inválida");
            return;
    }

    if (seleccionados[opcion] > 0) {
        totalPedido -= precio;
        seleccionados[opcion]--;
        actualizarTotal();
        actualizarCantidad(opcion);
    }
}

function actualizarTotal() {
    document.getElementById("total").textContent = "Total: $" + totalPedido.toFixed(2);
}

function actualizarCantidad(opcion) {
    document.getElementById("cantidad-" + opcion).textContent = "Cantidad: " + seleccionados[opcion];
}
