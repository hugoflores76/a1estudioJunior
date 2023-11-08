// export {gameLoop};

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// let player = {
//     x: 50,
//     y: 50,
//     width: 20,
//     height: 20,
//     speed: 5,
// };

let obstaculo = {
    x: 110,
    y: 50,
    width: 20,
    height: 20,

};
let keys = {};

document.addEventListener("keydown", function (event) {
    keys[event.code] = true;
});

document.addEventListener("keyup", function (event) {
    keys[event.code] = false;
});
function drawPlayer() {
    // ctx.fillStyle = "red";
    // ctx.fillRect(player.x, player.y, player.width, player.height);
    // Crear un objeto de imagen
    let img = new Image();
    // Asignar la fuente de la imagen
    img.src = "assets/seya.jpg";
    // Esperar a que la imagen se cargue
    img.onload = function () {
        // Dibujar la imagen en el canvas
        ctx.drawImage(img, player.x, player.y);
    }
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
        // Hay colisión
    }
}

setInterval(gameLoop, 1000 / 60);


