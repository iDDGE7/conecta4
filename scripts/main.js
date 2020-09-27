var arrayTab = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

var players = ["R", "Y"];

var currentPlayer =
  Math.floor(Math.random() * 2) == 0 ? players[0] : players[1];

$('.turn-user').html(`turn player ${currentPlayer == players[0] ?'Red': 'Yellow' } ` );
$('.turn-user').addClass(currentPlayer == players[0] ?'turnRed': 'turnYellow');



$('.column-grid').click(function(){
  var columnSelected = $('.column-grid').index(this);
  var positionChoisen = getRowPosition(arrayTab, columnSelected);


  if (positionChoisen != -1) {
    arrayTab[positionChoisen][columnSelected] = currentPlayer;


    $('.column-grid').eq(columnSelected).find('.item-column').eq(positionChoisen).addClass(currentPlayer == players[0] ? 'redUser' : 'yellowUser' ).removeClass('defaultCell');    
    var checkWinner = checkIfWinner(arrayTab, currentPlayer, columnSelected, positionChoisen);

    if (checkWinner != true) {
      currentPlayer = currentPlayer == players[0] ? players[1] : players[0];
      $('.turn-user').html(`turn player ${currentPlayer == players[0] ?'Red': 'Yellow' } ` );
      $('.turn-user').addClass(currentPlayer == players[0] ?'turnRed': 'turnYellow').removeClass(currentPlayer == players[0] ?'turnYellow': 'turnRed');
    } else {
      console.log(`Game is finished ${currentPlayer} is winner`);


      $('.color-winner').html(currentPlayer == players[0] ?'Red': 'Yellow');
      $('.color-winner').addClass(currentPlayer == players[0] ?'redWinner': 'yellowWinner').removeClass(currentPlayer == players[0] ?'yellowWinner': 'redWinner');
      
      $('.pop-winner').addClass('activePopWinner').removeClass('noActivePopWinner default-popWinner');
    }

    if(checkTied() == true) {
      $('.pop-winner').addClass('activePopWinner').removeClass('noActivePopWinner default-popWinner');
      $('.color-winner').html('nobody');
    }
    
  }
})


function getRowPosition(array, nColumn) {
  var spaces = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i][nColumn] == 0) {
      spaces++;
    }
  }
  return spaces;
}


function checkIfWinner(array, currentPlayer, LastColumn, lastRow) {
  console.table(array)

  if (lastRow == 0 || lastRow == 1 || lastRow == 2) {
    if (array[lastRow + 1][LastColumn] == currentPlayer && array[lastRow + 2][LastColumn] == currentPlayer && array[lastRow + 3][LastColumn] == currentPlayer) {
      return true;
    }
  }


  if (LastColumn == 0 || LastColumn == 1 || LastColumn == 2 || LastColumn == 3) {
    if ( array[lastRow][LastColumn + 1] == currentPlayer && array[lastRow][LastColumn + 2] == currentPlayer && array[lastRow][LastColumn + 3] == currentPlayer) {
      return true;
    }
  }


  if ( LastColumn == 6 || LastColumn == 5 || LastColumn == 4 || LastColumn == 3) {
    if ( array[lastRow][LastColumn - 1] == currentPlayer && array[lastRow][LastColumn - 2] == currentPlayer && array[lastRow][LastColumn - 3] == currentPlayer) {
      return true;
    }
  }


  if ( LastColumn == 1 || LastColumn == 2 || LastColumn == 3 || LastColumn == 4) {
    if ( array[lastRow][LastColumn - 1] == currentPlayer && array[lastRow][LastColumn + 1] == currentPlayer && array[lastRow][LastColumn + 2] == currentPlayer) {
      return true;
    }
  }


  if ( LastColumn == 5 || LastColumn == 4 || LastColumn == 3 || LastColumn == 2) {
    if ( array[lastRow][LastColumn + 1] == currentPlayer && array[lastRow][LastColumn - 1] == currentPlayer && array[lastRow][LastColumn - 2] == currentPlayer) {
      return true;
    }
  }


  if ( (LastColumn == 0 || LastColumn == 1 || LastColumn == 2 || LastColumn == 3) && (lastRow == 0 || lastRow == 1 || lastRow == 2 ) ) {
    if ( array[lastRow + 1][LastColumn + 1] == currentPlayer && array[lastRow + 2][LastColumn + 2] == currentPlayer && array[lastRow + 3][LastColumn + 3] == currentPlayer) {
      return true;
    }
  }

  if ( (LastColumn == 6 || LastColumn == 5 || LastColumn == 4 || LastColumn == 3) && (lastRow == 0 || lastRow == 1 || lastRow == 2 ) ) {
    if ( array[lastRow + 1][LastColumn - 1] == currentPlayer && array[lastRow + 2][LastColumn - 2] == currentPlayer && array[lastRow + 3][LastColumn - 3] == currentPlayer) {
      return true;
    }
  }


  if ( (LastColumn == 3 || LastColumn == 4 || LastColumn == 5 || LastColumn == 6) && (lastRow == 5 || lastRow == 4 || lastRow == 3 ) ) {
    if ( array[lastRow - 1][LastColumn - 1] == currentPlayer && array[lastRow - 2][LastColumn - 2] == currentPlayer && array[lastRow - 3][LastColumn - 3] == currentPlayer) {
      return true;
    }
  }

  if ( (LastColumn == 0 || LastColumn == 1 || LastColumn == 2 || LastColumn == 3) && (lastRow == 5 || lastRow == 4 || lastRow == 3 ) ) {
    if ( array[lastRow - 1][LastColumn + 1] == currentPlayer && array[lastRow - 2][LastColumn + 2] == currentPlayer && array[lastRow - 3][LastColumn + 3] == currentPlayer) {
      return true;
    }
  }


  if ( (LastColumn == 1 || LastColumn == 2 || LastColumn == 3 || LastColumn == 4) && (lastRow == 3 || lastRow == 2 || lastRow == 1 ) ) {
    if ( array[lastRow - 1][LastColumn - 1] == currentPlayer && array[lastRow + 1][LastColumn + 1] == currentPlayer && array[lastRow + 2][LastColumn + 2] == currentPlayer) {
      return true;
    }
  }

  if ( (LastColumn == 5 || LastColumn == 4 || LastColumn == 3 || LastColumn == 2) && (lastRow == 3 || lastRow == 2 || lastRow == 1 ) ) {
    if ( array[lastRow - 1][LastColumn + 1] == currentPlayer && array[lastRow + 1][LastColumn - 1] == currentPlayer && array[lastRow + 2][LastColumn - 2] == currentPlayer) {
      return true;
    }
  }

  if ( (LastColumn == 1 || LastColumn == 2 || LastColumn == 3 || LastColumn == 4) && (lastRow == 2 || lastRow == 3 || lastRow == 4 ) ) {
    if ( array[lastRow + 1][LastColumn - 1] == currentPlayer && array[lastRow - 1][LastColumn + 1] == currentPlayer && array[lastRow - 2][LastColumn + 2] == currentPlayer) {
      return true;
    }
  }

  if ( (LastColumn == 5 || LastColumn == 4 || LastColumn == 3 || LastColumn == 2) && (lastRow == 2 || lastRow == 3 || lastRow == 4 ) ) {
    if ( array[lastRow + 1][LastColumn + 1] == currentPlayer && array[lastRow - 1][LastColumn - 1] == currentPlayer && array[lastRow - 2][LastColumn - 2] == currentPlayer) {
      return true;
    }
  }
    return false;
}

$('.button-play-again').click(function(){
  playAgain();
});

function playAgain(){
  arrayTab = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  var currentPlayer =
  Math.floor(Math.random() * 2) == 0 ? players[0] : players[1];

  $('.turn-user').html(`turn player ${currentPlayer == players[0] ?'Red': 'Yellow' } ` );
  $('.turn-user').addClass(currentPlayer == players[0] ?'turnRed': 'turnYellow');
  $('.item-column').addClass('defaultCell').removeClass('redUser yellowUser');   
  $('.pop-winner').addClass('noActivePopWinner').removeClass('activePopWinner');
}

function checkTied(){
  
    for (let i = 0; i < arrayTab.length; i++) {
      for (let e = 0; e < arrayTab[i].length; e++) {
        if(arrayTab[i][e]==0){
            return false;
        }
      }
    }

    return true;
}