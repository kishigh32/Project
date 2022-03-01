export default class Ball {

    constructor() {}

    drawBall(ctx) {
        const ball = new Image();
        ball.src = "./assets/ball.jpg";
        ball.onload = () => {
            // 475
            ctx.drawImage(ball, 160, 475, 85, 85);
        }
    }
}