
//  import {  gameLoop } from "./canvas.js";


class Moquepon {
    constructor(nombre, foto, vida, n) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.n = n;
        this.ataques = [];
    }


}
let pokemon1 = new Moquepon("pokemon1", "./assets/seya.jpg", 100, 1);
let pokemon2 = new Moquepon("pokemon2", "./assets/pokemon2.jpg", 100, 2);
let pokemon3 = new Moquepon("pokemon3", "./assets/pokemon3.jpg", 100, 3);

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
let estructuraHtml
let btnReset
let miSeleccion
let noSeleccion
let grid = document.getElementById('grid')
let tarjetas = document.getElementById('tarjetas')
let res = document.getElementById('resetear')
let riva = document.getElementById('rival')
let btnAtaqueJu = document.getElementById('ataqueJugador')
let btnAtaquerival = document.getElementById('ataqueRival')
let mensaje = document.getElementById('mensaje')
let btnBatalla
let grupoBoton
let mayor;
let moquepones = []
let arrayAtaque = []
let arrayAtaqueRiv = []
let myArray = []
let nuevoArray = []
moquepones.push(pokemon1, pokemon2, pokemon3)
////////////  canvas ////////////
let imagen = new Image();
imagen.src = './assets/mapa.png';

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
 ctx.drawImage(imagen, 0, 0);
let player = {
    x: 50,
    y: 50,
    width: 20,
    height: 20,
    speed: 5,


};

let obstaculo = {
    x: 110,
    y: 50,
    width: 20,
    height: 20,

};

let keys = {};

function inicioJuego() {
    grid.style.display = 'none'
    moquepones.forEach((element) => {
        estructuraHtml = `
            <div id="tarjeta${element.n}">
            <p>${element.nombre}</p>
            <img src="${element.foto}" alt="${element.nombre}" onclick="seleccionar(${element.nombre})">
            </div>

        `;
        tarjetas.innerHTML += estructuraHtml;


    });

    gameLoop();
}

inicioJuego();


function seleccionar(nombre) {

    if (nombre.n == 1) {
        let noSeleccion1 = document.getElementById('tarjeta2');
        noSeleccion1.style.display = 'none';
        let noSeleccion2 = document.getElementById('tarjeta3')
        noSeleccion2.style.display = 'none';

    } else if (nombre.n == 2) {
        let noSeleccion1 = document.getElementById('tarjeta1');
        noSeleccion1.style.display = 'none';
        let noSeleccion2 = document.getElementById('tarjeta3')
        noSeleccion2.style.display = 'none';
    } else {
        let noSeleccion1 = document.getElementById('tarjeta2');
        noSeleccion1.style.display = 'none';
        let noSeleccion2 = document.getElementById('tarjeta1')
        noSeleccion2.style.display = 'none';
    }
    btnReset = `
              <button type="reset" onclick="resetear(${nombre.n})">resetear</button>

        `
    res.innerHTML = btnReset;

    nombre.ataques.forEach((element) => {
        let botoJu = `
            <button id="${element.id}" class="buttonAt"  > ${element.nombre}</button>
        `;
        btnAtaqueJu.innerHTML += botoJu;
    })

    rival()
    atacar()

}
function eneAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rival() {
    n = eneAleatorio(0, moquepones.length - 1)

    let enemigo = moquepones[n];

    let tajEnemigo = `
            <p>ataque rival</p>
            <div id="tarjeta${enemigo.n}">
            <h2>tu rival es </h2>
            <p>${enemigo.nombre}</p>
            <img src="${enemigo.foto}" alt="${enemigo.nombre}" >
            </div>
        `
    riva.innerHTML = tajEnemigo
    //////////////////////////////////////////////////////////////////////////


    enemigo.ataques.forEach((element) => {
        let boto = `
            <button id="${element.id}" class="button" > ${element.nombre}</button>

        `;
        btnAtaquerival.innerHTML += boto;
        myArray.push(element.nombre);

    });
    // console.log(myArray);

    nuevoArray = aleArray(myArray)

    console.log(nuevoArray);

    nuevoArray.forEach((element) => {

        if (element === "🔥") {
            arrayAtaqueRiv.push("fuego")
        } else if (element === "💦") {
            arrayAtaqueRiv.push("agua")
        } else {
            arrayAtaqueRiv.push("tierra")
        }
    });

}

function resetear(nombre) {


    if (nombre == 1) {
        let noSeleccion1 = document.getElementById('tarjeta2');
        noSeleccion1.style.display = 'inline';
        let noSeleccion2 = document.getElementById('tarjeta3')
        noSeleccion2.style.display = 'inline';

    } else if (nombre == 2) {
        let noSeleccion1 = document.getElementById('tarjeta1');
        noSeleccion1.style.display = 'inline';
        let noSeleccion2 = document.getElementById('tarjeta3')
        noSeleccion2.style.display = 'inline';
    } else if (nombre == 3) {
        let noSeleccion1 = document.getElementById('tarjeta2');
        noSeleccion1.style.display = 'inline';
        let noSeleccion2 = document.getElementById('tarjeta1')
        noSeleccion2.style.display = 'inline';

    }

    let tajEnemigo = `        
        `
    riva.innerHTML = tajEnemigo

    btnReset = ` `
    res.innerHTML = btnReset;

}
function atacar() {
    grupoBoton = document.querySelectorAll('.buttonAt')
    let c = 0
    grupoBoton.forEach((element) => {


        element.addEventListener('click', (e) => {

            if (e.target.id === 'botonFuego') {

                arrayAtaque.push("fuego");

                element.style.background = "#112f58";
                c = c + 1
            } else if (e.target.id === 'botonAgua') {
                arrayAtaque.push("agua");
                ;
                element.style.background = "#112f58";
                c = c + 1
            } else {
                arrayAtaque.push("tierra");

                element.style.background = "#112f58"
                c = c + 1

            }
            // console.log(arrayAtaque);

            if (c == 5) {

                btnAtaqueJu.innerHTML = `
                <button id="" class="button" onclick=(batalla())> batalla</button>
            `
                // batalla(arrayAtaque, arrayAtaqueRiv)

            }
        });


    });


}

function mensajeFinal(gano, perdio, empato) {
    let win = gano;
    let loss = perdio;
    let tie = empato;
    console.log(win + " gano");
    console.log(loss + " perdio");
    console.log(tie + " empato");
    console.log(arrayAtaque);
    console.log(arrayAtaqueRiv);
    for (let i = 0; i < arrayAtaque.length; i++) {
        mensaje.innerHTML = `

           <table>
                <tr>
                     <th>Mi ataque</th>
                    <td>${arrayAtaque[0]}</td>
                    <td>${arrayAtaque[1]}</td>
                    <td>${arrayAtaque[2]}</td>
                    <td>${arrayAtaque[3]}</td>
                    <td>${arrayAtaque[4]}</td>
                  
                </tr>
                
                <tr>
                    <th>Ataque enemigo</th>
                    <td>${arrayAtaqueRiv[0]}</td>
                    <td>${arrayAtaqueRiv[1]}</td>
                    <td>${arrayAtaqueRiv[2]}</td>
                    <td>${arrayAtaqueRiv[3]}</td>
                    <td>${arrayAtaqueRiv[4]}</td>
                </tr>
                <tr>
                    <th>resultados</th>
                    <td>gano ${win}</td>
                    <td>empato ${tie}</td>
                    <td>perdio ${loss}</td>
                    <td>4</td>
                    <td>5</td>
                </tr>

            </table>
        `

    };


}

function aleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function batalla() {
    let win = 0
    let loss = 0
    let tie = 0

    aray2 = arrayAtaqueRiv
    aray1 = arrayAtaque

    for (let i = 0; i < aray1.length; i++) {
        if (this.aray1[i] === this.aray2[i]) {
            tie = tie + 1
        } else if (this.aray1[i] === "fuego" && this.aray2[i] === "tierra") {

            win = win + 1
        } else if (this.aray1[i] === "agua" && this.aray2[i] === "fuego") {

            win = win + 1
        } else if (this.aray1[i] === "tierra" && this.aray2[i] === "agua") {

            win = win + 1

        } else {
            loss = loss + 1

        }


    }

    mensajeFinal(win, loss, tie)
}





document.addEventListener("keydown", function (event) {
    keys[event.code] = true;
});

document.addEventListener("keyup", function (event) {
    keys[event.code] = false;
});
function drawPlayer() {
     ctx.fillStyle = "red";
    let miMg=pokemon1.foto
    var imagen2 = new Image();
    imagen2.src = './assets/pokemon1.jpg';
  ctx.drawImage(imagen2, player.x, player.y, player.width, player.height);
    ctx.fillRect(player.x, player.y, player.width, player.height);



   
}
function drawObstaculo() {
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo.x, obstaculo.y, obstaculo.width, obstaculo.height);
}









function movePlayer() {
    if (keys.ArrowLeft) {
        player.x -= player.speed;
    }
    if (keys.ArrowRight) {
        player.x += player.speed;
    }
    if (keys.ArrowUp) {
        player.y -= player.speed;
    }
    if (keys.ArrowDown) {
        player.y += player.speed;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    movePlayer();
    detectarColision(obstaculo); // Llamar a detectarColision después de mover al jugador
    drawObstaculo();
}

function detectarColision(cubo2) {
    const rect1 = {
        top: player.y,
        bottom: player.y + player.height,
        left: player.x,
        right: player.x + player.width
    };
    const rect2 = {
        top: cubo2.y,
        bottom: cubo2.y + cubo2.height,
        left: cubo2.x,
        right: cubo2.x + cubo2.width
    };

    if (
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom ||
        rect1.left > rect2.right ||
        rect1.right < rect2.left
    ) {
        // No hay colisión
    } else {
       console.log("colision");
        grid.style.display = 'flex'
    }
}

setInterval(gameLoop, 1000 / 60);




