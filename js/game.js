var urlParams = new URLSearchParams(window.location.search);

var player1Trapped = false;
var player2Trapped = false;
var player1TrappedRule = 0;
var player2TrappedRule = 0;

var player1Name = urlParams.get('p1');
var player2Name = urlParams.get('p2');
console.log(player1Name);
console.log(player2Name);

var currentPlayer = 1;
var player1Position = 1;
var player2Position = 1;

var player1 = document.createElement('img');
var player2 = document.createElement('img');

player1.setAttribute("src", "images/tokens/" + player1Name + ".png");
player1.setAttribute("class", "tokens");
player1.setAttribute("title", player1Name);



player2.setAttribute("src", "images/tokens/" + player2Name + ".png");
player2.setAttribute("class", "tokens");
player2.setAttribute("title", player2Name);


let dice = {
    sides: 6,
    roll: function () {
      let randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  //Prints dice roll to the page
  
  function printNumber(number) {
    let placeholder = document.querySelector('#placeholder');
    placeholder.innerHTML = number;
  }
  
  let button = document.querySelector('#diceButton');
  
  button.onclick = function() {
    let result = dice.roll();
    doGameRound(result);
  };

  var trapped = document.getElementById('trapped');

  function movePlayer(player, diceRoll) {
    let newContainerNumber = 0;
    trapped.style.display = "none";
    if (player === 1) {
      if (player1Trapped && diceRoll < player1TrappedRule) {
        diceRoll = 0;
        trapped.style.display = "block";
        player1Position = 1;
      }
      newContainerNumber = player1Position+diceRoll;
      if (player1Position > 24 && newContainerNumber > 30  && !player1Trapped) {
        newContainerNumber = 30;
      }
      if (newContainerNumber < 31) {
        let imgContainer = document.querySelector("#imgContainer" + newContainerNumber);
        imgContainer.append(player1);
      }
      player1Position = newContainerNumber;
      if (player1Position > 30) {
        window.location.href = "congratulations.html?winner=" + player1Name + "&loser=" + player2Name;
      }
      player1Trapped = false;
    } else if (player === 2) {
        if (player2Trapped && diceRoll < player2TrappedRule) {
        diceRoll = 0;
        trapped.style.display = "block";
        player2Position = 1;
      }
      newContainerNumber = player2Position+diceRoll;
      if (player2Position > 24 && newContainerNumber > 30 && !player2Trapped) {
        newContainerNumber = 30;
      }
      if (newContainerNumber < 31) {
        let imgContainer = document.querySelector("#imgContainer" + newContainerNumber);
        imgContainer.append(player2);
      }
      player2Position = newContainerNumber;
      if (player2Position > 30) {
        console.log();
        window.location.href = "congratulations.html?loser=" + player1Name + "&winner=" + player2Name;
      }
      player2Trapped = false;
    }
  }
  
  function swapCurrent() {
    if (currentPlayer === 1) {
      currentPlayer = 2;
    }
    
    else if (currentPlayer === 2) {
      currentPlayer = 1;
    }
  }
  
  function diceCheckForTraps() {
    //player 1
    if (currentPlayer === 1 && player1Position === 6 || player1Position === 20) {
      player1Trapped = true;
      player1TrappedRule = 3;
    }
    if (currentPlayer === 1 && player1Position === 2 || player1Position === 4 || player1Position === 9 || player1Position === 10 || player1Position === 11 || player1Position === 14 || player1Position === 22 || player1Position === 24) {
      player1Trapped = true;
      player1TrappedRule = 4;
    }
    if (currentPlayer === 1 && player1Position === 30) {
      player1Trapped = true;
      player1TrappedRule = 6;
    }

    //player 2
    if (currentPlayer === 2 && player2Position === 6 || player2Position ===  20) {
      player2Trapped = true;
      player2TrappedRule = 3;
    }
    if (currentPlayer === 2 && player2Position === 2 || player2Position === 4 || player2Position === 9 || player2Position === 10 || player2Position === 11 || player2Position === 14 || player2Position ===  22 || player2Position === 24) {
      player2Trapped = true;
      player2TrappedRule = 4;
    }
    if (currentPlayer === 2 && player2Position === 30) {
      player2Trapped = true;
      player2TrappedRule = 6;
    }
  }



  function finishRound() {
    if (player1Position === 30) {
      console.log('hi');
    }
    else if (player2Position === 30){
      console.log('hey');   
    }
  }
   
  function doGameRound(diceRoll) {
    printNumber(diceRoll);
    movePlayer(currentPlayer, diceRoll);
    diceCheckForTraps();
    swapCurrent();
    finishRound();
  }

  movePlayer(1, 0);
  movePlayer(2,0);

 

  function showModal(button) {
    var modal = document.querySelector('#modal');
    modal.style.display = "block";
    var img = button.getAttribute('data-img');
    var imgTrap = document.querySelector('#modalImg');
    imgTrap.src = img;
    var info = document.querySelector('#info');
    info.textContent = button.getAttribute('data-info');
    var header = document.querySelector('#header');
    header.textContent = button.innerHTML;
    var close = document.querySelector('#close');
    close.addEventListener('click', spanClose)
    function spanClose() {
      modal.style.display = "none";
    }
  }

  document.querySelectorAll('.buttonCard').forEach(item => {
    item.addEventListener('click', event => {
      showModal(event.target);
    })
  })

