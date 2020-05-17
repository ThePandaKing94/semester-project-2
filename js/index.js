function isMyFavorite(character) {
  
  return          character.Id == 148  || // 'Arya Stark'
  character.Id == 206  || // 'Bran Stark'
  character.Id == 238  || // 'Cersei Lanister'
  character.Id == 529 || // 'Jaime Lannister'
  character.Id == 583 || //'Jon Snow'
  character.Id == 954  || // 'Sam Tyrell'
  character.Id == 957  || // 'Sansa Stark'
  character.Id == 1022 || // 'Theon Greyjoy'
  character.Id == 1052 || //'Tyrion Lannister'
  character.Id == 2069 //'Lord Varys'
}


fetch('https://raw.githubusercontent.com/joakimskoog/AnApiOfIceAndFire/master/data/characters.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    data.filter(isMyFavorite).forEach((character) => { 

      
      if (character.Id === 148) {
        document.querySelector('#aryaName').innerHTML = character.Name;
      }

      else if (character.Id === 206 ) {
        document.querySelector('#branName').innerHTML = character.Name;
      }

      else if (character.Id === 238) {
        document.querySelector('#cerseiName').innerHTML = character.Name;
      }

      else if (character.Id === 529) {
        document.querySelector('#jaimeName').innerHTML = character.Name;
      }

      else if (character.Id === 583) {
        document.querySelector('#jonName').innerHTML = character.Name;
      }

      else if (character.Id === 954) {
        document.querySelector('#samName').innerHTML = character.Name;
      }

      else if (character.Id === 957) {
        document.querySelector('#sansaName').innerHTML = character.Name;
      }

      else if (character.Id === 1022) {
        document.querySelector('#theonName').innerHTML = character.Name;
      }

      else if (character.Id === 1052) {
        document.querySelector('#tyrionName').innerHTML = character.Name;
      }

      else if (character.Id === 2069) {
        document.querySelector('#varysName').innerHTML = "Lord " + character.Name;
      }
    });
  });



//I've been lazy thinking about the way of doing this, I could have used a for loop and iterated the classes, I know, but it's easier said than done, and I need to focus on coding the game at the moment. If I have time to spare, maybe I'll make this code below more practical.

// Get the modal
var myModalArya = document.querySelector(".myModalArya");
var myModalBran = document.querySelector(".myModalBran");
var myModalCersei = document.querySelector(".myModalCersei");
var myModalJaime = document.querySelector(".myModalJaime");
var myModalJon = document.querySelector(".myModalJon");
var myModalSam = document.querySelector(".myModalSam");
var myModalSansa = document.querySelector(".myModalSansa");
var myModalTheon = document.querySelector(".myModalTheon");
var myModalTyrion = document.querySelector(".myModalTyrion");
var myModalVarys = document.querySelector(".myModalVarys");

  // Get the image and insert it inside the modal
var imgArya =   document.getElementById("aryaCard");
var imgBran =   document.getElementById("branCard");
var imgCersei = document.getElementById("cerseiCard");
var imgJaime =  document.getElementById("jaimeCard");
var imgJon =    document.getElementById("jonCard");
var imgSam =    document.getElementById("samCard");
var imgSansa =  document.getElementById("sansaCard");
var imgTheon =  document.getElementById("theonCard");
var imgTyrion = document.getElementById("tyrionCard");
var imgVarys =  document.getElementById("varysCard");


imgArya.onclick = function (){
  myModalArya.style.display = "block";
  imgArya.src = this.src;
}

imgBran.onclick = function(){
  myModalBran.style.display = "block";
  imgBran = this.src;
}

imgCersei.onclick = function(){
  myModalCersei.style.display = "block";
  imgCersei.src = this.src;
}

imgJaime.onclick = function(){
  myModalJaime.style.display = "block";
  imgJaime.src = this.src;
}

imgJon.onclick = function(){
  myModalJon.style.display = "block";
  imgJon.src = this.src;
}

imgSam.onclick = function(){
  myModalSam.style.display = "block";
  imgSam.src = this.src;
}

imgSansa.onclick = function(){
  myModalSansa.style.display = "block";
  imgSansa.src = this.src;
}

imgTheon.onclick = function(){
  myModalTheon.style.display = "block";
  imgTheon.src = this.src;
}

imgTyrion.onclick = function(){
  myModalTyrion.style.display = "block";
  imgTyrion.src = this.src;
}

imgVarys.onclick = function(){
  myModalVarys.style.display = "block";
  imgVarys.src = this.src;
  captionTextVarys.innerHTML = this.div.value;
  captionTextVarys2.innerHTML = this.div.value;
}

// Get the <span> element that closes the modal

var closeArya = document.querySelector(".closeArya");
var closeBran = document.querySelector(".closeBran");
var closeCersei = document.querySelector(".closeCersei");
var closeJaime = document.querySelector(".closeJaime");
var closeJon = document.querySelector(".closeJon");
var closeSam = document.querySelector(".closeSam");
var closeSansa = document.querySelector(".closeSansa");
var closeTheon = document.querySelector(".closeTheon");
var closeTyrion = document.querySelector(".closeTyrion");
var closeVarys = document.querySelector(".closeVarys");


 // When the user clicks on <span> (x), close the modal
  closeArya.onclick = function() {
    myModalArya.style.display = "none";
  }

  closeBran.onclick = function() {
    myModalBran.style.display = "none";
  }

  closeCersei.onclick = function() {
    myModalCersei.style.display = "none";
  }
  
  closeJaime.onclick = function() {
    myModalJaime.style.display = "none";
  }

  closeJon.onclick = function() {
    myModalJon.style.display = "none";
  }

  closeSansa.onclick = function() {
    myModalSansa.style.display = "none";
  }

  closeSam.onclick = function() {
    myModalSam.style.display = "none";
  }

  closeTheon.onclick = function() {
    myModalTheon.style.display = "none";
  }

  closeTyrion.onclick = function() {
    myModalTyrion.style.display = "none";
  }

  closeVarys.onclick = function() {
    myModalVarys.style.display = "none";
  }



  let btnArr = document.querySelectorAll(".choose");
  let amountClicks = 0;
  let playerOneName;
  let playerTwoName;
  
  for (let i = 0; i < btnArr.length; i++) {
  
    btnArr[i].addEventListener('click', (event) => {
      console.log(event.target.id);
      

      amountClicks++;
      console.log(amountClicks);
      if (amountClicks === 1) {
        playerOneName = event.target.id.slice(0, -3);
        
      }
       else if(amountClicks === 2){
        playerTwoName = event.target.id.slice(0, -3);
        console.log(playerOneName +" " + playerTwoName);
        window.location.href = "game.html?p1=" + playerOneName + "&p2=" + playerTwoName;
        
      }
    })  
  }

