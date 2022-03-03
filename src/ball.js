export default class Ball {

    constructor() {

        this.position = {
            x: 157,
            y: 510,
        }

        this.xarrow = 0;
        this.rot = 1;
        this.size = 86;
        this.speed = -21.5;      // -20.8
        this.xspeed = 0;
        // this.yspeed = 0;
        this.yspeed = -(((this.speed**2) - (this.xspeed**2))**(0.5));
        // this.maxSpeed = 5;
        this.gravity = 0.56;
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
            if (this.rot === -1) ctx.clearRect(0, 300, 400, 300);
            //ctx.rotate(Math.PI / 2);
            ctx.drawImage(ball, this.position.x + this.xspeed, this.position.y + this.yspeed, this.size, this.size);
        }

    }

    drawArrow(ctx) {
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.position.x + 46 + this.xarrow, this.position.y - 47); // 203, 425
        ctx.lineTo(this.position.x + 46, this.position.y - 20); // 203, 456   490
        ctx.stroke();

        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.position.x + 46 + this.xarrow, this.position.y - 47); // 203, 425
        ctx.lineTo(this.position.x + 41, this.position.y - 35); // 203, 456
        ctx.stroke();

        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.position.x + 46 + this.xarrow, this.position.y - 47); // 203, 425
        ctx.lineTo(this.position.x + 51, this.position.y - 35); // 203, 456
        ctx.stroke();
    }

    shoot() {
        // ctx.clearRect(0, 300, 400, 300);
        this.rot = -1;
        this.position.y += this.yspeed;
        this.yspeed += this.gravity;
        this.position.x += this.xspeed;

        if (this.yspeed < 0) {
            this.size -= 0.8;
            this.position.x += 0.5;
        }
    }

    left(ctx) {
        ctx.clearRect(150, 454, 150, 34.8);
        if (this.xspeed >= -10.2) {
            this.xspeed -= 0.3;
            this.xarrow -= 1;
            this.yspeed = -(((this.speed**2) - (this.xspeed**2))**(0.5));
        }
        this.drawArrow(ctx);
        // console.log(this.xspeed);
        // console.log(this.yspeed);
    }

    right(ctx) {
        ctx.clearRect(150, 454, 150, 34.8);
        if (this.xspeed <= 10.2) {
            this.xspeed += 0.3;
            this.xarrow += 1;
            this.yspeed = -(((this.speed**2) - (this.xspeed**2))**(0.5));
        }
        this.drawArrow(ctx);
        // console.log(this.xspeed);
        // console.log(this.yspeed);
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