let dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
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
  printNumber(result);
};

fetch('https://github.com/joakimskoog/AnApiOfIceAndFire/blob/master/data/characters.json')
.then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });


let tenCharacters = [arya, bran, cersei, jaime, jon, sam, sansa, theon, tyrion, varys];

function renderCards(arr) {
  let details = document.querySelector('#cards');
  for (var i=0; i<arr.length; i++){
  let theName = arr[i].Name;
  let titles =arr[i].Titles;
  let born = arr[i].Born;
  let id = arr[i].Id;
  details.innerHTML += "<div class='fetching'> <h2>" + theName + "</h2>"+ "<div class='title'>" + titles + "</div>" + "<div class='bornWrite'><div class='born'>Born: " + born + "</div></div>" + "<button id=" + id + "class='choose'>Choose</button>""</div>";
}
}

/*

  arya = document.querySelector('#arya');
  bran = document.querySelector('#bran');
  cersei = document.querySelector('#cerseu');
  jaime = document.querySelector('#jaime');
  jon = document.querySelector('#jon');
  sam = document.querySelector('#sam');
  sansa = document.querySelector('#sansa');
  theon = document.querySelector('#theon');
  tyrion = document.querySelector('#tyrion');
  varys = document.querySelector('#varys');


arya = document.querySelector('#148');
bran = document.querySelector('#206');
cersei = document.querySelector('#238');
jaime = document.querySelector('#529');
jon = document.querySelector('#583');
sam = document.querySelector('#954');
sansa = document.querySelector('#957');
theon = document.querySelector('#1022');
tyrion = document.querySelector('#1052');
varys = document.querySelector('#2069');*/