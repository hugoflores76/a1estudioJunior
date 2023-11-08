export { mostrarJugador }

class Moquepon {
    constructor(nombre, foto, vida, n) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.n = n;
        this.ataques = [];
    }};

let pokemon1 = new Moquepon("seya", "./assets/seya.jpg", 100, 1);
let pokemon2 = new Moquepon("iki", "./assets/iki.png", 100, 2);
let pokemon3 = new Moquepon("shun", "./assets/shun.jpg", 100, 3);


pokemon1.ataques.push(
    { nombre: '🔥', id: 'botonFuego', k: 1 },
    { nombre: '🔥', id: 'botonFuego', k: 2 },
    { nombre: '🔥', id: 'botonFuego', k: 3 },
    { nombre: '💦', id: 'botonAgua', k: 4 },
    { nombre: '⛺', id: 'botonTierra', k: 5 }

);

pokemon2.ataques.push(
    { nombre: '🔥', id: 'botonFuego', k: 1 },
    { nombre: '💦', id: 'botonAgua', k: 2 },
    { nombre: '💦', id: 'botonAgua', k: 3 },
    { nombre: '💦', id: 'botonAgua', k: 4 },
    { nombre: '⛺', id: 'botonTierra', k: 5 }

);
pokemon3.ataques.push(
    { nombre: '🔥', id: 'botonFuego', k: 1 },
    { nombre: '💦', id: 'botonAgua', k: 2 },
    { nombre: '⛺', id: 'botonTierra', k: 3 },
    { nombre: '⛺', id: 'botonTierra', k: 4 },
    { nombre: '⛺', id: 'botonTierra', k: 5 }

);

let moquepones=[];
let estructuraHtml
let tarjetas = document.getElementById('tarjetas')
let res = document.getElementById('resetear')
moquepones.push(pokemon1, pokemon2, pokemon3);





function mostrarJugador() {
    moquepones.forEach(element => {
        estructuraHtml = `
            <div id="tarjeta${element.n}">
            <p>${element.nombre}</p>
            <img src="${element.foto}" height="80" width="80" alt="${element.nombre}" onclick="cula()">
            </div>

        `;
        tarjetas.innerHTML += estructuraHtml;

    });

}
 


// function seleccionar(nombre) {
// console.log(nombre);
//     if (nombre.n == 1) {
//         let noSeleccion1 = document.getElementById('tarjeta2');
//         noSeleccion1.style.display = 'none';
//         let noSeleccion2 = document.getElementById('tarjeta3')
//         noSeleccion2.style.display = 'none';

//     } else if (nombre.n == 2) {
//         let noSeleccion1 = document.getElementById('tarjeta1');
//         noSeleccion1.style.display = 'none';
//         let noSeleccion2 = document.getElementById('tarjeta3')
//         noSeleccion2.style.display = 'none';
//     } else {
//         let noSeleccion1 = document.getElementById('tarjeta2');
//         noSeleccion1.style.display = 'none';
//         let noSeleccion2 = document.getElementById('tarjeta1')
//         noSeleccion2.style.display = 'none';
//     }
//     btnReset = `
//               <button type="reset" onclick="resetear(${nombre.n})">resetear</button>

//         `
//     res.innerHTML = btnReset;

//     nombre.ataques.forEach((element) => {
//         let botoJu = `
//             <button id="${element.id}" class="buttonAt"  > ${element.nombre}</button>
//         `;
//         btnAtaqueJu.innerHTML += botoJu;
//     })

//     // rival()
//     // atacar()

// }