var urlParams = new URLSearchParams(window.location.search);

var winner = urlParams.get('winner');
var loser = urlParams.get('loser');

var winnerImgElement = document.querySelector('#winnerImg');
winnerImgElement.src = "images/" + winner + "Img.jpg";

var winnerNameElement = document.querySelector('#winnerName');

var winnerName = "";
if (winner === "arya") {
    winnerName = "Arya Stark";
}
else if (winner === "bran") {
    winnerName = "Bran Stark";
}
else if (winner === "cersei") {
    winnerName = "Cersei Lannister";
}
else if (winner === "jaime") {
    winnerName = "Jaime Lannister";
}
else if (winner === "jon") {
    winnerName = "Jon Snow";
}
else if (winner === "sam") {
    winnerName = "Samwell Tarly";
}
else if (winner === "sansa") {
    winnerName = "Sansa Stark";
}
else if (winner === "theon") {
    winnerName = "Theon Greyjoy";
}
else if (winner === "tyrion") {
    winnerName = "Tyrion Lannister";
}
else if (winner === "varys") {
    winnerName = "Lord Varys";
}

winnerNameElement.innerHTML = winnerName;

let confettiElement = document.getElementById('my-canvas');
 let confettiSettings = {"target":confettiElement,"max":"800","size":"1","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"40","rotate":true,"width":"1920","height":"937","start_from_edge":false,"respawn":true};
 let confetti = new ConfettiGenerator(confettiSettings);
 confetti.render();