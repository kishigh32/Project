// import Ball from "./ball";

export default class Input {

    constructor(ball, hoop, ctx) {

        let shouldHandleKeyDown = true;

        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 37: 
                    ball.left(ctx);
                    break;

                case 39: 
                    ball.right(ctx);
                    break

                case 32:
                    let lastTime = 0;
                    if (!shouldHandleKeyDown) return;
                    shouldHandleKeyDown = false;
                    // ctx.clearRect(0, 300, 400, 600);
                    function gameLoop(timestamp) {
                        // ctx.clearRect(0, 300, 400, 600);
                        let deltaTime = timestamp - lastTime;
                        lastTime = timestamp;
                        
                        // ball.drawArrow(ctx);
                        ball.drawBall(ctx);
                        ball.shoot(deltaTime);

                        if (ball.speedy() >= 0 && hoop.ypos() <= ball.ypos() + ball.ballSize() 
                        && ball.ypos() + ball.ballSize() <= hoop.ypos() + 5
                        && hoop.xpos() - 5 <= ball.xpos() + ball.ballSize()/2 && 
                        ball.xpos() + ball.ballSize()/2 <= hoop.xpos() + 10) {
                            ball.collisionSpeedy();
                        }

                        if (ball.speedy() >= 0 && hoop.ypos() <= ball.ypos() + ball.ballSize() 
                        && ball.ypos() + ball.ballSize() <= hoop.ypos() + 5
                        && hoop.xpos() + 68 <= ball.xpos() + ball.ballSize()/2 && 
                        ball.xpos() + ball.ballSize()/2 <= hoop.xpos() + 83) {
                            ball.collisionSpeedy();
                        }

                        // console.log(ball.ypos() + ball.ballSize());
                        // console.log(ball.xpos() + ball.ballSize()/2);
                        // console.log(hoop.xpos());
                        // console.log("hi");

                        requestAnimationFrame(gameLoop);
                    }
                    gameLoop();
                    break;
            }

        })
    }
}
