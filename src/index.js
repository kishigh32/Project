import Ball from "./ball";
import Hoop from "./hoop";
import Input from "./input";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");

    // ctx.clearRect(0, 0, 500, 350);
    // ctx.fillStyle = "red";
    // ctx.fillRect(10, 100, 50, 75);

    const GAME_WIDTH = 400;
    const GAME_HEIGHT = 600;

    let hoop = new Hoop(GAME_HEIGHT, GAME_WIDTH);
    let ball = new Ball();
    new Input();

    ball.drawBall(ctx);
    hoop.drawHoop(ctx);

    let lastTime = 0;
    function gameLoop(timestamp) {
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        hoop.drawHoop(ctx);
        hoop.updateHoop(deltaTime);

        requestAnimationFrame(gameLoop);
    }

    gameLoop(ctx, 10);
});