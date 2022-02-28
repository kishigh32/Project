export default class Game {

    constructor(gameHeight, gameWidth) {
        // this.height = 25;
        // this.width = 25;

        this.position = {
            x: gameWidth / 2 - 40,
            y: gameHeight - 125,
        }
    }
    
    ball(ctx) {
        //var ball = document.createElement("img");
        const ball = new Image();
        ball.src = "./assets/basketball.png";
        //document.body.appendChild(ball);
        //ctx.drawImage(ball, this.position.x, this.position.y);
        ball.onload = () => {
            ctx.drawImage(ball, this.position.x, this.position.y, 100, 100);
        }
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
