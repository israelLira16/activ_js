let cm =null;
async function cargarModuloSucursal()
{
    //AJAX: Asynchronous Java script Am Xml
    let respuesta = await fetch('sucursal/sucursal.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
}
async function cargarModuloProducto()
{
    //AJAX: Asynchronous Java script Am Xml
    let respuesta = await fetch('producto/producto.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
    
    //despues de cargar el contenido HTML, cargamos el modulo de JS de los productos
    import( './producto.js')
            .then(obj => {
                cm=obj;
                cm.inicializar();
            });
}

async function cargarModuloPedidoCompra()
{
    //AJAX: Asynchronous Java script Am Xml
    let respuesta = await fetch('pedidoCompra/pedidosCompra.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
}


