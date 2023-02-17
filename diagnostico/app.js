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


let loading = false



const promesa = () => {
  return new Promise((resolve, reject) => {
    loading = true
    loading ? mensaje4.innerHTML = "Cargando..." : ""
    let result = inmueble.filter(item => item.estaDisponible && item.precio >= 200000000 && item.precio <= 300000000)
    setTimeout(() => {
      loading = false
      mensaje4.innerHTML = ""
      resolve(result)
    }, 1000);
  })
}


const getInmuebles = () => {
  promesa().then((inmuebles) => {
    generateInmueblesTable(inmuebles)
  }).catch(err => console.log(err))

}

const getInmuebleById = () => {
  const id = document.getElementById('idInmueble').value

  const result = inmueble.filter(item => item.idinmueble === parseInt(id))

  if (result != undefined && result[0].estaDisponible) {
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

const generateInmueblesTable = (inmuebles = []) => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody')
  const theadContent = Object.keys(inmuebles[0])
  const theadRow = document.createElement('tr')
  theadContent.map((key) => {
    const cellHead = document.createElement('td')
    const cellHeadContent = document.createTextNode(key)
    cellHead.appendChild(cellHeadContent)
    theadRow.appendChild(cellHead)
  })
  tbody.appendChild(theadRow)
  inmuebles.map((inmueble) => {
    const trContent = Object.values(inmueble);
    const trow = document.createElement('tr');
    trContent.map(value => {
      const cell = document.createElement('td')
      const cellContent = document.createTextNode(value)
      cell.appendChild(cellContent)
      trow.appendChild(cell)
    })

    tbody.appendChild(trow)
  })

  table.appendChild(tbody)
  document.getElementById('table').appendChild(table)
}

document.getElementById('buscar').addEventListener('click', (event) => {
  event.preventDefault()
  getInmuebleById()
})

document.getElementById('listar').addEventListener('click', (event) => {
  event.preventDefault()
  getInmuebles()
})

document.getElementById('enviar').addEventListener('click',(event) => {
  event.preventDefault(); 
  addInmueble()
})


function addInmueble() {  
  let idinmueble =document.getElementById("idinmueble").value;
  let newDireccion =document.getElementById("direccion").value;
  let newTelefono =document.getElementById("telefono").value;
  let newPrecio =document.getElementById("precio").value;
  let estaDisponible =document.getElementById("estaDisponible").checked;
  
  // Create new inmueble object
  let newInmueble = {
    idinmueble: parseInt(idinmueble),
    direccion: newDireccion,
    telefono: parseInt(newTelefono),
    precio: parseInt(newPrecio),
    estaDisponible: estaDisponible,
  };
  
  // Add new inmueble to inmuebles array
  inmuebles.push(newInmueble);
  
  // Display updated inmuebles array
  console.log(inmuebles);
}