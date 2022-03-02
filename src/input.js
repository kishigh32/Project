import Ball from "./ball";

export default class Input {

    constructor(ball, ctx) {

        let shouldHandleKeyDown = true;

        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 37: 
                    alert("move left");
                    break;

                case 39: 
                    alert("move right");
                    break

                case 32:
                    let lastTime = 0;
                    if (!shouldHandleKeyDown) return;
                    shouldHandleKeyDown = false;
                    function gameLoop(timestamp) {
                        let deltaTime = timestamp - lastTime;
                        lastTime = timestamp;
                        
                        ball.drawBall(ctx);
                        ball.shoot(deltaTime);
                        requestAnimationFrame(gameLoop);
                    }
                    gameLoop();
                    break;
            }

        })
    }
}
