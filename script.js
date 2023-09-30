const gameBoard = (() => {
  let gameboard = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9 
  ];

  const populateBoard = () => {
    let cells = document.querySelectorAll('.cell');
    for(let i = 0; i < cells.length; i++){
      console.log(cells[i]);
      cells[i].textContent = gameboard[i];
    }
  
    //gameboard.forEach((item) => console.log(item));
    //console.log(cells);
  }

  return {populateBoard};

})();

gameBoard.populateBoard();

