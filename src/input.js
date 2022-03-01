export default class Input {

    constructor() {

        document.addEventListener("keydown", event => {
            switch(event.keyCode) {
                case 37: 
                    alert("move left");
                    break;

                case 39: 
                    alert("move right");
                    break

                case 32:
                    alert("shoot the ball");
                    break;
            }

        })
    }
}