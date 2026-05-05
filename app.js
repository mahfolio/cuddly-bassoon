function createPlayer(marker) {
  let playerMarker = marker;

  function isSpotEmpty(board, index) {
    return index !== undefined && board[index] === null;
  }

  function putMarker(board, spot) {
    let index = spot - 1;
    
    while (!isSpotEmpty(board, index)) {
      const newSpot = +prompt("Spot is already marked, pick a different spot (1-9):");
      if (isNaN(newSpot) || newSpot < 1 || newSpot > 9) continue;
      index = newSpot - 1;
    }
    board[index] = playerMarker;
  }

  return {
    playerMarker,
    putMarker
  };
}

let game = (function () {
  const grid = [null, null, null, null, null, null, null, null, null];
  const board = grid;
  let player1;
  let player2;
  let nextPlayer;
  let spot;

  function start() {
    player1 = createPlayer("X");
    player2 = createPlayer("O");

    let count = 0;
    while (count < 9) {
      if (count % 2 === 0) {
        nextPlayer = player1;
      } else {
        nextPlayer = player2;
      }

      spot = prompt(`Player ${nextPlayer.playerMarker}, which block do you want to mark? (1-9)`);
      nextPlayer.putMarker(board, spot);
      console.log(board);
      count++;
    }
    // nextPlayer = player1;

    // spot = prompt("Which block do you want to mark?");
    // nextPlayer.putMarker(board, spot);
    // nextPlayer = player2;

    // spot = prompt("Which block do you want to mark?");
    // nextPlayer.putMarker(board, spot);

    // console.log(board);
  }

  return {
    player1,
    player2,
    nextPlayer,
    start
  };
})();

game.start();
