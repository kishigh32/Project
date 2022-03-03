export default class Ball {

    constructor() {

        this.position = {
            x: 157,
            y: 475,
        }

        this.size = 86;
        this.speed = -19;
        this.xspeed = 0;
        this.yspeed = -(((this.speed**2) - (this.xspeed**2))**(0.5));
        // this.maxSpeed = 5;
        this.gravity = 0.5;
        this.x = this.position.x;
        this.y = this.position.y;
    }

    // clearArc(context, x, y, radius) {
    //     context.save();
    //     context.globalCompositeOperation = 'destination-out';
    //     context.beginPath();
    //     context.arc(x, y, radius, 0, 2 * Math.PI, false);
    //     context.fill();
    //     context.restore();
    //   }

    drawBall(ctx) {
        const ball = new Image();
        ball.src = "./assets/ball.jpg";
        
        ball.onload = () => {
            // 157, 475
            ctx.clearRect(0, 300, 400, 300);
            ctx.drawImage(ball, this.position.x + this.xspeed, this.position.y + this.yspeed, this.size, this.size);
        }
    }

    shoot() {
        this.position.y += this.yspeed;
        this.yspeed += this.gravity;
        this.position.x += this.xspeed;

        if (this.yspeed < 0) {
            this.size -= 0.8;
            this.position.x += 0.5;
        }
    }

    left() {
        if (this.xspeed >= -18.9) {
            this.xspeed -= 0.3;
            this.yspeed = -(((this.speed**2) - (this.xspeed**2))**(0.5));
        }
        console.log(this.xspeed);
        console.log(this.yspeed);
    }

    right() {
        if (this.xspeed <= 18.9) {
            this.xspeed += 0.3;
            this.yspeed = -(((this.speed**2) - (this.xspeed**2))**(0.5));
        }
        console.log(this.xspeed);
        console.log(this.yspeed);
    }

    // shoot() {
    //     if (this.position.y < 80) {
    //         this.speed = -this.speed;
    //     }
    //     this.position.y += this.speed;

    //     if (this.speed === -5) {
    //         this.size -= 0.35;
    //         this.position.x += 0.21;
    //     }
    // }

}