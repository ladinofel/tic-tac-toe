const gameBoard = (() => {
  let gameboard = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ];
  let cells = document.querySelectorAll('.cell');
  
  const populateBoard = () => {    
    for(let i = 0; i < cells.length; i++){
      console.log(cells[i]);
      cells[i].textContent = gameboard[i];
    }
  }

  return {cells, gameboard, populateBoard};

})();

//gameBoard.populateBoard();


const playRound = ( () => {
  const {gameboard} = gameBoard;
  const {cells} = gameBoard;
  const {populateBoard} = gameBoard;

  const modifyGameboard = () => {
    cells.forEach((btn) => {
      btn.addEventListener('click', () => {
        gameboard[btn.id] = btn.id;
        console.log(btn.id);
        populateBoard();
      })
    })
    //gameboard[0] = "test";
    //console.log(gameboard);
  }

  return {modifyGameboard};
})();

playRound.modifyGameboard();
