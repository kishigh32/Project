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
        this.x = 0;
        this.y = 0;
        this.elas = 0.2
        this.afterCollSize = 0;
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
        this.x = this.position.x + this.xspeed;
        this.y = this.position.y + this.yspeed;
    }

    drawArrow(ctx) {

        // let y = ((729 - (this.xarrow**2))**(0.5));
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.position.x + 46 + this.xarrow, this.position.y - 37); // 47
        ctx.lineTo(this.position.x + 46, this.position.y - 20); // 203, 456   490
        ctx.stroke();

    //     ctx.strokeStyle = 'blue';
    //     ctx.lineWidth = 1;
    //     ctx.beginPath();
    //     ctx.moveTo(this.position.x + 46 + this.xarrow, this.position.y - 47); // 203, 425
    //     ctx.lineTo(this.position.x + 41, this.position.y - 35); // 203, 456
    //     ctx.stroke();

    //     ctx.strokeStyle = 'blue';
    //     ctx.lineWidth = 1;
    //     ctx.beginPath();
    //     ctx.moveTo(this.position.x + 46 + this.xarrow, this.position.y - 47); // 203, 425
    //     ctx.lineTo(this.position.x + 51, this.position.y - 35); // 203, 456
    //     ctx.stroke();

    }

    shoot() {
        // ctx.clearRect(0, 300, 400, 300);
        this.rot = -1;
        this.position.y += this.yspeed;
        this.yspeed += this.gravity;
        this.position.x += this.xspeed;

        if (this.yspeed < 0) {
            this.size -= 0.8 + this.afterCollSize;
            this.position.x += 0.5;
        }
    }

    left(ctx) {
        ctx.clearRect(150, 454, 150, 34.8);
        if (this.xspeed >= -10.2) {
            this.xspeed -= 0.3;
            this.xarrow -= 0.44; // 0.7
            this.yspeed = -(((this.speed**2) - (this.xspeed**2))**(0.5));
        }
        this.drawArrow(ctx);

        // console.log(this.xarrow);

        // console.log(this.xspeed);
        // console.log(this.yspeed);
    }

    right(ctx) {
        ctx.clearRect(150, 454, 150, 34.8);
        if (this.xspeed <= 10.2) {
            this.xspeed += 0.3;
            this.xarrow += 0.44; // 0.7
            this.yspeed = -(((this.speed**2) - (this.xspeed**2))**(0.5));
        }
        this.drawArrow(ctx);

        // console.log(this.xarrow);

        // console.log(this.xspeed);
        // console.log(this.yspeed);
    }

    speedy() {
        return this.yspeed;
    }

    collisionSpeedy() {
        this.yspeed -= this.yspeed * this.elas;
        this.yspeed = -this.yspeed;
        this.afterCollSize = -0.8;
    }

    xpos() {
        return this.x;
    }

    ypos() {
        return this.y;
    }

    ballSize() {
        return this.size;
    }

}