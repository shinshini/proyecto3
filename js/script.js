//Variables que mantiene el estado visible del carrito
var carritoVisible = false;

//Esperamos que todos los elementos de la pagina carguen para ejecutar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    //Agregar funcionalidad a los botones 
    var botonesELiminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i<botonesELiminarItem.length; i++){
        var button = botonesELiminarItem[i];
        button.addEventListener('click', ELiminarItemCarrito);
    }
    //Agrgar funcionalidad al boton sumar cantidad
    var botonSUmarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
    }
    //Agregamos funcionalidad al boton agregar al carrito
    var botonesAgregarCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarCarrito.length; i++){
        var button = botonesAgregarCarrito[i];
        button.addEventListener('click' ,AgregarAlCarritoClicked);
    }
    //Agregamos funcionalidad al boton comprar
    document.getElementsByClassName('btn-pagar')[0].addEventListener
                                            ('click' ,pagarClicked);
}

//Para pagar eliminamos todos los elementos del carrito y lo ocultamos
function pagarClicked(){
    alert ("Gracias Por Su Compra");
    //Eliminar todos los elemtos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while(carritoItems.hasChildNodes){
        carritoItems.removeChild(carritoItems.firstChild);
    }
    actualizarTotalCarrito();
    ocultarCarrito();
} 
//Funcion que controla el boton clickeado de agregar al carrito
function AgregarAlCarritoClicked(){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imgenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imgenSrc);
    agregarItemAlCarrito(titulo,precio,imgenSrc);
    hacerVisibleCarrito();
} 
//Funcion que hace visible al carrito
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';
    var items = document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60';
}
//Funcion que agrega un item al carrito
function agregarItemAlCarrito(titulo,precio,imgenSrc){
    var item = document.createElement('div');
    item.classList.add('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];
    //Controlamos que el item que intenta ingresar no se encuentre en el carrito
    var nombresItemCarrito = itemsCarrito.getElementsByClassName('carritp-item-titulo');
    for(var i=0; i<nombresItemCarrito.length; i++){
        if(nombresItemCarrito[i].innerText=titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }
    }

    var itemsCarritoContenido =
        <div class="carrito-item">
            <img src="${imgenSrc}" width="80px" alt=""></img>
            <div class="carrito-item-titulo">
            <span class="carrito-item-titulo">${titulo}"</span>
            <div class="selector-cantidad">
            <i class="fa-solid fa-minus restar-catidad"></i>
            <input type="text" value="1" class="carrito-item-cantidad" disabled></input>
            <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
            <span class="carrito-item-titulo">${titulo}"</span>
            </div>
            <button class="btn.eliminar">
            <i class="fa-solid fa-tash"></i>
            </button>
        </div>
        item.innerHTML = itemsCarritoContenido;
        itemsCarrito.append(item);

        //Agregar la funcionalidad eliminar el nuevo item
    }






