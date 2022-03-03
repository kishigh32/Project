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

    // function arrow() {
    //     const arrow = new Image();
    //     arrow.src = "./assets/arrow2.jpg"
    //     arrow.onload = () => {
    //         // ctx.clearRect(0, 300, 400, 300);
    //         // 185, 405
    //         ctx.drawImage(arrow, 185, 405, 35, 50);
    //     }
    // }

    // ctx.rect(185, 350, 50, 50);
    // ctx.fill();
    ball.drawBall(ctx);
    // ctx.save();
    // ctx.translate(202.5, 430);
    // ctx.rotate(90 * Math.PI / 180);
    // ctx.translate(-202.5, -430);
    ball.drawArrow(ctx);
    // ctx.rect(185, 350, 50, 50);
    // ctx.fill();
    // ctx.restore();
    // let arrow = ball.drawArrow(ctx);

    let lastTime = 0;
    function gameLoop(timestamp) {
        // ctx.clearRect(0, 200, GAME_WIDTH, GAME_HEIGHT);
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        // ball.drawBall(ctx);
        // ball.drawArrow(ctx);
        hoop.drawHoop(ctx);
        hoop.updateHoop(deltaTime);



        requestAnimationFrame(gameLoop);
    }

    gameLoop();


    
    // const arrow = new Image();
    // arrow.src = "./assets/arrow2.jpg"
    // arrow.onload = () => {
    //     // ctx.clearRect(0, 300, 400, 300);
    //     // 185, 405
    //     ctx.drawImage(arrow, 185, 405, 35, 50);
    // }
    // ctx.restore();
});