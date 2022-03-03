import Ball from "./ball";
import Hoop from "./hoop";
import Input from "./input";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    
    const GAME_WIDTH = 400;
    const GAME_HEIGHT = 600;

    //ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
    let hoop = new Hoop(GAME_HEIGHT, GAME_WIDTH);
    let ball = new Ball();
    new Input(ball, ctx);

    ball.drawBall(ctx);

    let lastTime = 0;
    function gameLoop(timestamp) {
        // ctx.clearRect(0, 200, GAME_WIDTH, GAME_HEIGHT);
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        hoop.drawHoop(ctx);
        hoop.updateHoop(deltaTime);

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
});