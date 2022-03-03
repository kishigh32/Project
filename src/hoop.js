export default class Hoop {

    constructor(gameHeight, gameWidth) {

        this.position = {
            x: 55,
            y: 70,
        }

        this.speed = 20;
    }

    drawHoop(ctx) {
        const board = new Image();
        board.src = "./assets/backboard.jpg";
        const side1 = new Image();
        side1.src = "./assets/side.jpg";
        
        side1.onload = () => {
            //tx.clearRect(0, 0, 400, 300); 
            ctx.drawImage(side1, this.position.x + 112, this.position.y + 143, 5, 5);
        }
        const side2 = new Image();
        side2.src = "./assets/side.jpg";
        side2.onload = () => {
            ctx.drawImage(side2, this.position.x + 183, this.position.y + 143, 5, 5);
        }
        board.onload = () => {
            ctx.clearRect(0, 0, 400, 300);
            ctx.drawImage(board, this.position.x, this.position.y, 300, 200);
        }
    }


    updateHoop(deltaTime) {
        if (!deltaTime) return;
        if (this.position.x + 110 <= 0 || this.position.x + 190 >= 400) {
            this.speed = -this.speed;
        }
        this.position.x += this.speed / deltaTime;
    }

    xpos() {
        return this.position.x;
    }

    ypos() {
        return this.position.y;
    }
}
