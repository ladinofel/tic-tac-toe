//This piece of code sets the initial gameboard and allows for refreshing it when a round is done. 
const gameBoard = (() => {
  let gameboard = [
    "", "", "",
    "", "", "",
    "", "", "",
  ];
  let cells = document.querySelectorAll('.cell');
  
  const populateBoard = () => {    
    for(let i = 0; i < cells.length; i++){
      cells[i].textContent = gameboard[i];
    }
  }

  const refreshBoard = () => {
    for(let i = 0; i < gameboard.length; i++){
      gameboard[i] = "";
    }
  }
  return {cells, gameboard, refreshBoard, populateBoard};
})();

//This piece of code verifies if there is a winner or a draw.
const checkWinner = (() => {
  const {cells} = gameBoard;
  let {gameboard} = gameBoard;
  let victory = false;
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
    let winId = "";    
    let {modalWin} = announcement;
    for(let comb of winCombo){
      if(cells[comb[0]].textContent == cells[comb[1]].textContent && 
         cells[comb[1]].textContent == cells[comb[2]].textContent &&
         cells[comb[0]].textContent != ""
        ){        
        winId = `${cells[comb[2]].textContent}`;
        victory = true;
        modalWin(winId);
      }      
    }
    return false;
  }

  const draw = () => {
    const {modalDraw} = announcement;
    if(gameboard.includes("") === false && victory === false){
      modalDraw();
    }
  }
  return {winner, draw};
})();

//This piece of code displays the winner or draw modals depending the case. 
const announcement = (() => {
  const modal = document.querySelector('.modal');
  const container = document.querySelector('.announcement_container');
  const title = document.createElement('p');
  const reset_btn = document.querySelector('.reset');
  const {refreshBoard} = gameBoard;
  const {populateBoard} = gameBoard;
  
  const modalWin = (winId) => {           
    title.textContent = `The winner of this round is :  ${winId}`;
    reset_btn.textContent = "START OVER";
    container.appendChild(title); 
    container.appendChild(reset_btn);
    reset_btn.addEventListener('click', () => {
      refreshBoard();
      populateBoard();
      modal.close();
    });
    modal.showModal(); 
  }

  const modalDraw = () => {
    title.textContent = `There has been a tie!`;
    reset_btn.textContent = "START OVER";
    container.appendChild(title); 
    container.appendChild(reset_btn);
    reset_btn.addEventListener('click', () => {
      refreshBoard();
      populateBoard();
      modal.close();
    })
    modal.showModal(); 
  }

  return {modalDraw, modalWin};
})();

//This piece of code allows the user to play a round. 
const playRound = ( () => {
  const {gameboard} = gameBoard;
  const {cells} = gameBoard;
  const {populateBoard} = gameBoard;
  const {winner} = checkWinner;
  const {draw} = checkWinner;
  let content = true;

  const modifyGameboard = () => {
    cells.forEach((btn) => {
      btn.addEventListener('click', () => {
        if(gameboard[btn.id] === ""){
          if(content){
            gameboard[btn.id] = 'X';
            populateBoard();
            content = false;
            winner();  
            draw();  
            } else {
            gameboard[btn.id] = 'O';
            populateBoard();
            content = true;
            winner();
            draw();              
          }} else {
            alert('ERROR');
            return false;
          }
      } )
    }) 
  }
  return {modifyGameboard};
})();

playRound.modifyGameboard();
