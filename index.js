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


//get the info
var captionTextArya = document.querySelector(".captionArya");
var captionTextArya2 = document.querySelector(".captionArya2");
var captionTextBran = document.querySelector(".captionBran");
var captionTextBran2 = document.querySelector(".captionBran2");
var captionTextCersei = document.querySelector(".captionCersei");
var captionTextCersei2 = document.querySelector(".captionCersei2");
var captionTextJaime = document.querySelector(".captionJaime");
var captionTextJaime2 = document.querySelector(".captionJaime2");
var captionTextJon = document.querySelector(".captionJon");
var captionTextJon2 = document.querySelector(".captionJon2");
var captionTextSam = document.querySelector(".captionSam");
var captionTextSam2 = document.querySelector(".captionSam2");
var captionTextSansa = document.querySelector(".captionSansa");
var captionTextSansa2 = document.querySelector(".captionSansa2");
var captionTextTheon = document.querySelector(".captionTheon");
var captionTextTheon2 = document.querySelector(".captionTheon2");
var captionTextTyrion = document.querySelector(".captionTyrion");
var captionTextTyrion2 = document.querySelector(".captionTyrion2");
var captionTextVarys = document.querySelector(".captionVarys");
var captionTextVarys2 = document.querySelector(".captionVarys2");

imgArya.onclick = function (){
  nextModalArya.style.display = "block";
  modalImgArya.src = this.src
  captionTextArya.innerHTML = this.div;
  captionTextArya2.innerHTML = this.div;
}

imgBran.onclick = function(){
  nextModalBran.style.display = "block";
  modalImgBran = this.src
  captionTextBran.inne = this.div;
  captionTextBran2.innerHTML = this.div;
}

imgCersei.onclick = function(){
  nextModalCersei.style.display = "block";
  modalImgCersei.src = this.src
  captionTextCersei.innerHTML = this.div;
  captionTextCersei2.innerHTML = this.div;
}

imgJaime.onclick = function(){
  nextModalJaime.style.display = "block";
  modalImgJaime.src = this.src
  captionTextJaime.innerHTML = this.div;
  captionTextJaime2.innerHTML = this.div;
}

imgJon.onclick = function(){
  nextModalJon.style.display = "block";
  modalImgJon.src = this.src
  captionTextJon.innerHTML = this.div;
  captionTextJon2.innerHTML = this.div;
}

imgSam.onclick = function(){
  nextModalSam.style.display = "block";
  modalImgSam.src = this.src
  captionTextSam.innerHTML = this.div;
  captionTextSam2.innerHTML = this.div;
}

imgSansa.onclick = function(){
  nextModalSansa.style.display = "block";
  modalImgSansa.src = this.src
  captionTextSansa.innerHTML = this.div;
  captionTextSansa2.innerHTML = this.div;
}

imgTheon.onclick = function(){
  nextModalTheon.style.display = "block";
  modalImgTheon.src = this.src
  captionTextTheon.innerHTML = this.div;
  captionTextTheon2.innerHTML = this.div;
}

imgTyrion.onclick = function(){
  nextModalTyrion.style.display = "block";
  modalImgTyrion.src = this.src
  captionTextTyrion.innerHTML = captionTextTyrion.value;
  captionTextTyrion2.innerHTML = this.div;
}

imgVarys.onclick = function(){
  nextModalVarys.style.display = "block";
  modalImgVarys.src = this.src
  captionTextVarys.innerHTML = this.div;
  captionTextVarys2.innerHTML = this.div;
}

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  nextModal.style.display = "none";
}




