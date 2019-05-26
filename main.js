class Producto
{
    constructor(nombre,precio,cantidad)
    {
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
    }
}

class Cliente
{
    añadirProducto(producto)
    {
       const lista=document.getElementById("lista");
       const elemento=document.createElement('div');

       elemento.innerHTML=
       `<div class="card text-center mb-4" style="max-width: 300rem;">
          <div class="card-body"> 
            <strong>Nombre Producto</strong>: ${producto.nombre}
            <strong>Precio</strong>: ${producto.precio}
            <strong>Unidades</strong>: ${producto.cantidad}
            <a href="#" class="btn-danger btn" name="eliminar">Eliminar</a>
          </div>
       </div>
       `;
       lista.appendChild(elemento)
    }
     //Limpiar Formulario
    limpiar()
    {
        document.getElementById("formulario").reset();
    }


    //Eliminar Producto
    eliminarProducto(elemento)
    {
        if(elemento.name==="eliminar")
        {
          elemento.parentElement.parentElement.parentElement.remove() 
          this.mostrarMensaje("Producto Eliminado","info")
        }
    }
    
    mostrarMensaje(mensaje,cssClass)
    {
        var div=document.createElement("div")
        div.className=`alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(mensaje))

        //Monstar en el DOM
        var container=document.querySelector(".container")
        var app=document.querySelector("#app")
        container.insertBefore(div,app);

        setTimeout(function()
        {
            document.querySelector(".alert").remove()
        },3000)
    }
}

//eventos del DOM
document.getElementById("formulario").addEventListener('submit',function(e)
{
    var nombre=document.getElementById("nombre").value;
    var precio=document.getElementById("precio").value;
    var cantidad=document.getElementById("cantidad").value;

    //console.log(nombre,precio,cantidad)
    //console.log(new Producto(nombre,precio,cantidad))

    const producto=new Producto(nombre,precio,cantidad)

    var cliente= new Cliente()

    if(nombre===""|| precio===""||cantidad==="")
    {
       return cliente.mostrarMensaje("Complete los Campos","warning")
    }


    cliente.añadirProducto(producto);
    cliente.limpiar();
    cliente.mostrarMensaje("Producto Agregado","success");

    e.preventDefault();
});

document.getElementById("lista").onclick=function(e)
{
    var cliente=new Cliente();
    cliente.eliminarProducto(e.target)
}

