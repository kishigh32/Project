export default class Hoop {

    constructor(gameHeight, gameWidth) {
        // this.height = 25;
        // this.width = 25;

        this.position = {
            x: 102,
            y: 70,
        }

        this.speed = 10;
    }

    drawHoop(ctx) {
        const board = new Image();
        board.src = "./assets/hoop.jpg";
        board.onload = () => {
            ctx.drawImage(board, this.position.x, this.position.y, 200, 200);
        }
    }


    updateHoop(deltaTime) {
        if (!deltaTime) return;
        if (this.position.x < 0 || this.position.x + 200 > 400) {
            this.speed = -this.speed;
        }
        this.position.x += this.speed / deltaTime;
    }
}
