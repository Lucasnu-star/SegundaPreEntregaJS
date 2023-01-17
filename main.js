const productos = [
    {
        id: 1,
        img: "img/rtx3060.jpg",
        nombre: "Placa de video Asus Tuf Rtx 3060 V2 Gaming LHR",
        desarrolador: "Asus",
        precio: 70000,
        cantidad:1
    },
    {
        id: 2,
        img: "img/procesador-cpu-ryzen_40368_1.jpeg",
        nombre: "Procesador Amd Ryzen 5 6500G 4.4 Ghz - AM4",
        desarrolador: "AMD",
        precio: 120000,
        cantidad:1
    },
    {
        id: 3,
        img: "img/motherboard.png",
        nombre: "Motherboard Gigabyte AM4 GA-A320M-H Box M-ATX",
        desarrolador: "AMD",
        precio: 30000,
        cantidad:1
    },
    {
        id: 4,
        img: "img/monitor.jpg",
        nombre: "Monitor 144hz Benq Zowie",
        desarrolador: "Zowie",
        precio: 130000,
        cantidad:1
    }
    ]
const contenedorProductos = document.querySelector('#box-padre');






console.log(productos);

const mostrarProductos = (data) =>{
    data.forEach(producto => {
        const cardProducto = document.createElement('article');
        cardProducto.setAttribute('id', 'tarjeta-producto');
        cardProducto.innerHTML =    `
                                    <img class="prod-img" src="${producto?.img}" alt="${producto?.nombre}" >
                                    <div class="prod-description">
                                        <h5 class="obra-nombre">${producto?.nombre}</h5>
                                        <h5 class="obra-nombre">${producto?.desarrolador}</h5>
                                        <h5 class="obra-nombre">$${producto?.precio}</h5>
                                        <button id='${producto.id}' class="btn-compra"> Comprar </button>
                                        
                                    </div>    
                                    `;
                                    
        contenedorProductos.appendChild(cardProducto);
        
    })
    const btnComprar=  document.querySelectorAll('.btn-compra');
    btnComprar.forEach(el =>{
        el.addEventListener('click', (e) =>{
        agregarAlCarrito(e.target.id)
        })
})
}

mostrarProductos(productos);
const carrito = [];

function agregarAlCarrito(id) 
{
    const existe= carrito.some(prod => prod.id === parseInt(id));

    if(existe){

        carrito.map(prod => prod.cantidad++)
    }
    else
    {
        let prodEnc = productos.find(prod => prod.id === parseInt(id));
    carrito.push(prodEnc);
    }
        console.log(carrito);
}

let contador = 0;
let contadorFinal = 0;
const resultado= document.getElementById('resultado')
const botonSumaCarrito = document.querySelectorAll('.btn-compra')
botonSumaCarrito.forEach( sumCarr =>{

    sumCarr.addEventListener('click', (sumCarrE) =>{
        contador++;
        actContador();

    })
})

const actContador= () =>{
    resultado.innerText= contador;
}
const resultadoPrec= document.getElementById('resultadofinal')
const BtnSumaPrecioCarrito = document.querySelectorAll('.btn-compra')
BtnSumaPrecioCarrito.forEach(sumPrecCarr =>{

    sumPrecCarr.addEventListener('click', (sumPre) =>{
        carrito.forEach((prod) =>{
            contadorFinal += prod.precio
            actContadorPrecio();
        })

    })
})
const actContadorPrecio= () =>{
    resultadoPrec.innerText= contadorFinal;
}




