window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game()
    game.start()


    document.addEventListener('keydown', (e) => {
      console.log("keydown")
      console.log(e.key)

      if (e.key === 'ArrowUp') {
        console.log(game.player)
        game.player.directionY = -1
      }

      if (e.key === 'ArrowDown') {
        game.player.directionY = 1
      }

      if (e.key === 'ArrowLeft') {
        game.player.directionX = -1
      }

      if (e.key === 'ArrowRight') {
        game.player.directionX = 1
      }

    })
  
  }
};
