const inmueble = [
  {
    idinmueble: 0,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 280000000,
    estaDisponible: true,
  },
  {
    idinmueble: 1,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 200000000,
    estaDisponible: true,
  },
  {
    idinmueble: 2,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 300000000,
    estaDisponible: true,
  },
  {
    idinmueble: 3,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 260000000,
    estaDisponible: false,
  },
  {
    idinmueble: 4,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 241000000,
    estaDisponible: false,
  },
  {
    idinmueble: 5,
    direccion: "Cra 45 # 35",
    telefono: 45444,
    precio: 40000000,
    estaDisponible: false,
  },
  {
    idinmueble: 6,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 125400000,
    estaDisponible: true,
  },
  {
    idinmueble: 7,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 265400000,
    estaDisponible: false,
  },
  {
    idinmueble: 8,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 230000320,
    estaDisponible: true,
  },
  {
    idinmueble: 9,
    direccion: "Cra 45 # 35",
    telefono: 5555555,
    precio: 186000000,
    estaDisponible: false,
  },
];

const input = document.createElement("input");

const mensaje1 = document.getElementById("mensaje1");
const mensaje2 = document.getElementById("mensaje2");
const mensaje3 = document.getElementById("mensaje3");
const mensaje4 = document.getElementById("mensaje4");

document.getElementById("idInmueble").addEventListener("focus", () => {
  mensaje1.innerHTML = "* Solo se aceptan numeros en este campo";
});
document.getElementById("direccion").addEventListener("focus", () => {
  mensaje2.innerHTML = "* La direccion es obligatoria";
});
document.getElementById("precio").addEventListener("focus", () => {
  mensaje3.innerHTML =
    "* El precio debe estar entre 100 millones y 500 millones";
});


document.getElementById("idInmueble").addEventListener("focusout", () => {
  mensaje1.innerHTML = "";
});
document.getElementById("direccion").addEventListener("focusout", () => {
  mensaje2.innerHTML = "";
});
document.getElementById("precio").addEventListener("focusout", () => {
  mensaje3.innerHTML = "";
});



const idInmueble = document.getElementById('idInmueble');
const direccion = document.getElementById('direccion');
const precio = document.getElementById('precio');
const telefono = document.getElementById('telefono');
const disponible = document.getElementById('disponible');


var loading = false
const getInmuebles = new Promise((resolve, reject) => {
        loading = true
        loading ? mensaje4.innerHTML = "Cargando..." : null
        let result = [ ]
        setTimeout(() => {
            result = inmueble.filter(item => item.estaDisponible && item.precio >= 200000000 && item.precio <= 300000000)
            resolve(result)
        }, 1000);
    
    
    });
    


const getInmuebleById = () => {
    const id =  document.getElementById('idInmueble').value
    
    const result = inmueble.filter(item => item.idinmueble === parseInt(id))
    
    if(result != undefined && result[0].estaDisponible){
        console.log('Inmueble Disponible!')
        direccion.value = result[0].direccion
        precio.value = result[0].precio
        telefono.value = result[0].telefono

        return result
    } else {
        mensaje4.innerHTML = "Inmueble no Disponible"
        console.log('Inmueble no Disponible')
    }

}

document.getElementById('buscar').addEventListener('click', (event) => {
    event.preventDefault()
    getInmuebleById()
})

document.getElementById('listar').addEventListener('click', (event) => {
    event.preventDefault()

    getInmuebles().then((result) => console.log(result))
})