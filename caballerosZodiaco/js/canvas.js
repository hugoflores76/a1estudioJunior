import { mostrarJugador} from "./mecanicas.js";


let canvas = document.getElementById("canvas");
let grid = document.getElementById("zonadejuego");
let inicio = document.getElementById("inicio");
let ctx = canvas.getContext("2d");
var img = new Image();
img.src = './assets/mapa.png';
// img.onload = function () {
//     ctx.drawImage(img, 10, 10);

// }


let player = {
    x: 50,
    y: 50,
    width: 20,
    height: 20,
    speed: 5,
    
    
};

let obstaculo = {
    x: 400,
    y: 50,
    width: 20,
    height: 20,
    
};

let keys = {};

function cula() {
    console.log("lo que quiera");

}
function drawPlayer() {
    ctx.fillStyle = "red";
    ctx.fillRect(player.x, player.y, player.width, player.height);
}
function drawObstaculo(obsx,obsy) {
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo.x=obsx, obstaculo.y=obsy, obstaculo.width, obstaculo.height);
}

document.addEventListener("keydown", function (event) {
   
    keys[event.code] = true;
});

document.addEventListener("keyup", function (event) {
    keys[event.code] = false;
});


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
};




function gameLoop() {
    ctx.drawImage(img, 10, 10);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    movePlayer();
    detectarColision(obstaculo); // Llamar a detectarColision después de mover al jugador
    drawObstaculo(300,100);
    drawObstaculo(300, 50);
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
        
         grid.style.display = 'flex';
          inicio.style.display = 'none'

        
    }
}




function seleccionar(nombre) {
    console.log('seleccionart${nombre}' + nombre)
};

setInterval(gameLoop, 1000 / 60);
// mostrarJugador()


