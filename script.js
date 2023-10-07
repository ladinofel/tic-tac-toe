const gameBoard = (() => {
  let gameboard = [
    , , ,
    , , ,
    , , ,
  ];
  let cells = document.querySelectorAll('.cell');
  
  const populateBoard = () => {    
    for(let i = 0; i < cells.length; i++){
      cells[i].textContent = gameboard[i];
    }
  }

  return {cells, gameboard, populateBoard};

})();

const checkWinner = (() => {
  const {cells} = gameBoard;
  let winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  const winner = () => {
    for(let comb of winCombo){
      if(cells[comb[0]].textContent == cells[comb[1]].textContent && 
         cells[comb[1]].textContent == cells[comb[2]].textContent &&
         cells[comb[0]].textContent != ""
      ) {
        alert('winning combination!');
      }
    }
    return false;
  }

  return {winner};
  
  })();



const playRound = ( () => {
  const {gameboard} = gameBoard;
  const {cells} = gameBoard;
  const {populateBoard} = gameBoard;
  const {winner} = checkWinner;
  let content = true;

  const modifyGameboard = () => {
    cells.forEach((btn) => {
      btn.addEventListener('click', () => {
        if(content){
          gameboard[btn.id] = 'X';
          populateBoard();
          content = false;
          winner();        
          } else {
          gameboard[btn.id] = 'O';
          populateBoard();
          content = true;
          winner();            
      } })
    }) 
  }
  return {modifyGameboard};
})();






playRound.modifyGameboard();

const PlayerFactory = (name, team) => {
  const {modifyGameboard} = playRound;
  return {name, team, modifyGameboard}
};

const playerA = PlayerFactory('test', 'X');
