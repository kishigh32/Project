import Game from "./game";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");

    // ctx.clearRect(0, 0, 500, 350);
    // ctx.fillStyle = "red";
    // ctx.fillRect(10, 100, 50, 75);

    const GAME_WIDTH = 400;
    const GAME_HEIGHT = 600;

    let game = new Game(GAME_HEIGHT, GAME_WIDTH);

    game.ball(ctx);

    //var ball = new Image();
    //var ball = document.getElementById("basketball.png");
    //ball.src = "./assets/basketball.png";
    //document.body.appendChild(ball);
    //ctx.drawImage(ball, 250, 250);
});