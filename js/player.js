class Player {

    constructor(gameScreen, left, top, width, height, element) {

        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0
        this.directionY = 0
        this.element = document.createElement('img')
        this.element.src = `${element}`
        this.element.style.position = 'absolute'
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element)

    }

    move() {

        console.log("moving")

        this.left += this.directionX 
        this.top += this.directionY

        if (this.left <= 0) {
            this.left = 5
            this.directionX *= -1
        }

        if (this.top <= 0) {
            this.top = 5
            this.directionY *= -1
        }

        if (this.left > this.gameScreen.offsetWidth - this.width - 5) {
            this.left = this.gameScreen.offsetWidth - this.width - 5;
            this.directionX *= -1
          }
      
          // handles bottom side
        if (this.top > this.gameScreen.offsetHeight - this.height - 5) {
            this.top = this.gameScreen.offsetHeight - this.height - 5;
            this.directionY *= -1
        }

        this.updatePosition()

    }

    updatePosition() {

        console.log("player line 57")

        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`

    }

    didCollide(obstacle) {

        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true;
        } else {
          return false;
        }

    }


}