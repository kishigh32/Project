export default class Ball {

    constructor() {

        this.position = {
            x: 160,
            y: 475,
        }

        this.size = 86;
        this.speed = -5;
        this.maxSpeed = 5;
        this.x = this.position.x;
        this.y = this.position.y;
    }

    clearArc(context, x, y, radius) {
        context.save();
        context.globalCompositeOperation = 'destination-out';
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fill();
        context.restore();
      }

    drawBall(ctx) {
        const ball = new Image();
        ball.src = "./assets/ball.jpg";
        ball.onload = () => {
            // 160, 475
            this.clearArc(ctx, this.position.x + 43, this.position.y + 53, 44);
            this.clearArc(ctx, this.position.x + 43, this.position.y + 27, 44); // 44
            // ctx.clearRect(this.position.x, this.position.y-5, 85, 100);
            ctx.drawImage(ball, this.position.x, this.position.y + this.speed, this.size, this.size);
            //this.clearArc(ctx, this.position.x + 43, this.position.y + 48, 42.5);
        }
        //this.cutCircle(ctx, this.position.x + 43, this.position.y + 48, 42.5);
    }

    shoot() {
        if (this.position.y < 80) {
            this.speed = -this.speed;
        }
        this.position.y += this.speed;

        if (this.speed === -5) {
            this.size -= 0.35;
        }
    }
}