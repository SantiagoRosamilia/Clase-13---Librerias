const stockProductos = [
    {id:1, nombre: "Cerveza Corona", precio: 700, img: './Imagenes/cerveza corona.webp'},
    {id:2, nombre: "Coca-Cola", precio: 400, img: './Imagenes/Coca-cola-Sabor-Original-1-5-Lt-2-245092.webp'},
    {id:3, nombre: "Cepita", precio: 400, img: './Imagenes/gaseosas/Cepita.webp'},
    {id:4, nombre: "Vodka Absolute", precio: 2700, img: './Imagenes/Aperitivos/vodka.webp'}
]

const contenedorProductos = document.querySelector('.contenedor-productos')

let carrito = []

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto-ind')
    div.innerHTML = `
    <div class="producto-a">
        <div class="info-p">
            <img src="#" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <p>$ ${producto.precio}</p>
        </div>
        <div class="input">
            <input type="button" id="agregar${producto.id}" class ="agregar1" value="Agregar +1"> 
        </div>  
    </div>
    `
    contenedorProductos.appendChild(div)

    const boton = document.querySelector(`#agregar${producto.id}`)
    boton,addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
    
})


const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
}

console.log(carrito)