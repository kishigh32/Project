export default class Game {

    constructor(gameHeight, gameWidth) {
        // this.height = 25;
        // this.width = 25;

        this.position = {
            x: 101,
            y: 70,
        }
    }
    
    ball(ctx) {
        const ball = new Image();
        ball.src = "./assets/basketball1.png";
        ball.onload = () => {
            // 475
            ctx.drawImage(ball, 160, 100, 85, 85);
        }
    }

    hoop(ctx) {
        const hoop = new Image();
        hoop.src = "./assets/hoop.jpg";
        hoop.onload = () => {
            ctx.drawImage(hoop, this.position.x, this.position.y, 200, 200);
        }
    }

    updateHoopHor(deltaTime) {
        if (!deltaTime) return;
        this.position.x += 10 / deltaTime;
        if (this.position.x < 0) {
            this.position.x += 50 / deltaTime;
        }
        if (this.position.x > 400) {
            this.position.x = 400;
            while (this.position.x > -10) {
                this.position.x -= 10 / deltaTime;
            }
        }
    }
}
