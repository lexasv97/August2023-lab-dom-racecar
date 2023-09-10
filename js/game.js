class Game {
    
    constructor() {

        this.startScreen = document.getElementById("game-intro")
        this.gameScreen = document.getElementById("game-screen")
        this.gameEndScreen = document.getElementById("game-end")
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png")
        this.height = 600
        this.width = 500
        this.obstacles = []
        this.counter = 0
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
        this.scoreElement = document.getElementById('score')
        this.livesElement = document.getElementById('lives')

    }


    start() {

        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'inherit'
        this.gameLoop()

    }

    gameLoop() {


        if (this.gameIsOver) {

            return
        }

        this.counter++
        if (this.counter % 120 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
        }

        this.update()

        window.requestAnimationFrame(() => this.gameLoop())


    }

    update() {

        for (let i = 0; i < this.obstacles.length; i++) {

            this.obstacles[i].move()
            
            
            if (this.player.didCollide(this.obstacles[i])) {
                this.obstacles[i].element.remove();
                this.obstacles.splice(i, 1)
                this.lives--
                break
            }

            if (this.obstacles[i].top > this.height) {
                this.obstacles[i].element.remove();
                this.obstacles.splice(i, 1)
                this.score++
                // i--
            }
            
        }
        
        this.player.move()

        if (this.lives <= 0) {
            this.endGame()
        }

        this.scoreElement.innerHTML = this.score
        this.livesElement.innerHTML = this.lives
    }

    endGame() {


        this.player.element.remove();
        this.obstacles.forEach(function (obstacle) {
          obstacle.element.remove();
        });
    
        this.gameIsOver = true;

        this.gameScreen.style.display = "none";

        this.gameEndScreen.style.display = "block";
    }
}