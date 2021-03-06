// variables

let totalSinEnvio;
let cantidadSeleccionada;
let precio = 0;
let stock = 12;
let envioDomicilio = false;
let totalCompra;
let articulo;

const inventario = [ 
    {id: 1, nombre: "Taza", precio: 300, stock: 5},
    {id: 2, nombre: "Bowl", precio: 350, stock: 4},
    {id: 3, nombre: "Florero", precio: 400, stock: 4},
]


function seleccionarItem() {
    
    do {

        let itemSeleccionado = parseInt(prompt('Seleccione el artículo que desea comprar u opción 4 para salir: \n1 - Taza \n2 - Bowl\n3 - Florero \n4 - Salir', 0));

        switch (itemSeleccionado) {
            case 1:
                //precio = 300;
                let articulo = inventario.find ((el) => el.id === 1)
                console.log(articulo)
                verificarStock();
                return articulo;
                break;
            case 2:
                precio = 350;
                verificarStock();
                break;
            case 3:
                precio = 400;
                verificarStock();
                break;       
            default:
                precio = 0;
                cantidad = 0;
                break;
        }  

    } while (itemSeleccionado !== 4);
}


function verificarStock() {
    cantidadSeleccionada = parseInt(prompt('¿Cuántas unidades desea agregar?',0));

    if (cantidadSeleccionada == 0) {
        alert('Ingrese una cantidad válida');
        verificarStock();
    } else if (cantidadSeleccionada > stock) {
        alert ('Lo sentimos1! No tenemos stock disponible')
        alert ('Nuestro stock actual es de ' + stock + ' unidades.')
    } else {
        function calcularTotal (articulo, cantidadSeleccionada){
            totalSinEnvio = articulo["precio"] * cantidadSeleccionada
            alert('Su total sin gastos de envío es: $' + totalSinEnvio)
            return totalSinEnvio;
        }
        //alert('Su total sin gastos de envío es: $' + totalSinEnvio);
        agregarEnvio();
    }

}

function agregarEnvio(){
    envioDomicilio = confirm ('Te gustaría agregar envío a domicilio?');

        switch (envioDomicilio){
            case true:
                totalCompra = totalSinEnvio + 200;
                alert ('El costo de envío es de $200. El total de tu compra es $' + totalCompra );
                break;
            case false:
                totalCompra = totalSinEnvio;
                alert ('El total de tu compra es de $' + totalCompra);
                break;
        }
}

seleccionarItem();
