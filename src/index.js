import Ball from "./ball";
import Hoop from "./hoop";
import Input from "./input";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    
    const GAME_WIDTH = 400;
    const GAME_HEIGHT = 600;

    let score = 0;

    // let restart = false;

    //ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // let restart = false;

    function start() {

        // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

        let restart = false;
        score = 0;

        let hoop = new Hoop(GAME_HEIGHT, GAME_WIDTH);
        let ball = new Ball();
    
        // let hoop = new Hoop(GAME_HEIGHT, GAME_WIDTH);
        // let ball = new Ball();
        new Input(ball, hoop, ctx);


        // ctx.rect(185, 350, 50, 50);
        // ctx.fill();
        ball.drawBall(ctx);
        ball.drawArrow(ctx);

        // console.log(ball.this.size);

        let lastTime = 0;
        function gameLoop(timestamp) {
            // ctx.clearRect(0, 200, GAME_WIDTH, GAME_HEIGHT);
            let deltaTime = timestamp - lastTime;
            lastTime = timestamp;

            if (ball.ypos() > 600) {
                restart = true;
            }
            // console.log(ball.ypos());
            // ball.drawBall(ctx);
            // ball.drawArrow(ctx);
            hoop.drawHoop(ctx);
            // hoop.updateHoop(deltaTime);

            if (!restart) {
                requestAnimationFrame(gameLoop);
            }
            else {
                ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
                start();
                // ball.drawBall(ctx);
            }

            // console.log("hey");

            // requestAnimationFrame(gameLoop);
        }

        // score = 1;

        gameLoop();

        // requestAnimationFrame(start);
    }

    start();

    // function loop() {
    //     if (score === 0) {
    //         start();
    //     }
    //     // else {
    //     //     console.log(score);
    //     // }
    //     // score = 0;

    //     requestAnimationFrame(loop);
    // }
});