let dice = document.querySelector(".dice");
let button = document.querySelector(".button");
let spots = document.querySelectorAll(".spot");
let display = document.querySelector(".display");
let round = document.querySelector(".round");
let score = document.querySelector(".score");
let displayArea = document.getElementById("display_area");

let round_count = 0;

const spotPositions = {
    1: { top: '10%', left: '10%' },
    2: { top: '10%', left: '45%' },
    3: { top: '10%', left: '80%' },
    4: { top: '45%', left: '10%' },
    5: { top: '50%', left: '50%' },
    6: { top: '45%', left: '80%' },
    7: { top: '80%', left: '10%' },
    8: { top: '80%', left: '45%' },
    9: { top: '80%', left: '80%' },
};
spots.forEach((spot,index=0) => {
        let pos = spotPositions[index+1];
        spot.style.setProperty('--top',pos.top);
        spot.style.setProperty('--left',pos.left)
});
spots[0].style.display = "block";
spots[8].style.display = "block";

let spot = {
    1 : [5],
    2 : [1,9],
    3 : [1,5,9],
    4 : [1,3,7,9],
    5 : [1,3,7,5,9],
    6 : [1,3,4,6,7,9]
};

function rollDice(){
    let a = Math.floor(Math.random() * 6) + 1;
    console.log(a);
    return(a);
}
function generateSpot(random){
    spots.forEach(spot => {
        spot.style.display = "none";
    });

   setTimeout(() => {
    let active_spot = spot[random];
    active_spot.forEach(i => {
        spots[i-1].style.display = "block";
    });
   },500);
}

function displayScore(random){
round_count++;

let card = document.createElement("div");
card.classList.add("display_field");

let newRound = document.createElement("p");
newRound.textContent = `Round ${round_count}`;
newRound.classList.add("Round");

let newScore = document.createElement("p");
newScore.textContent = `🎲 ${random}`;
newScore.classList.add("Score");

card.appendChild(newRound);
card.appendChild(newScore);

displayArea.appendChild(card);
}

button.addEventListener("click", function() {
    dice.classList.add("roll-animation");

    setTimeout(() => {
        dice.classList.remove("roll-animation")
    },500);

    let random = rollDice();
    generateSpot(random);
    displayScore(random);
});