let center = document.getElementById("center");
let gameBox = document.getElementById("gameBox");
let input = document.getElementById("inputField");
let submit = document.getElementById("submit");
let results = document.getElementById("results");
let reroll = document.getElementById("reroll");

// Sequences
let firstQues = ["1", "1", "2", "?", "5", "8"];
let secQues = ["2", "4", "6", "?"];
let thirdQues = ["1", "5", "5", "25", "?"];
let fourthQues = ["2", "4", "?", "256"];
let fifthQues = ["32", "?", "128"];
let sixthQues = ["?", "64", "53"];
let sventhQues = ["?", "22", "17", "12"];
let eigthQues = ["1000", "0100", "?", "0001"];

// Random Question Generating
let rand = Math.ceil(Math.random() * 8);

// Print The Random Generated Num In The Console
console.log("Random Sequence Number", rand);

// Get The Random Question In The Display
if (rand == 1) {
    gameBox.textContent = firstQues;
} else if (rand == 2) {
    gameBox.textContent = secQues;
} else if (rand == 3) {
    gameBox.textContent = thirdQues;
} else if (rand == 4) {
    gameBox.textContent = fourthQues;
} else if (rand == 5) {
    gameBox.textContent = fifthQues;
} else if (rand == 6) {
    gameBox.textContent = sixthQues;
} else if (rand == 7) {
    gameBox.textContent = sventhQues;
} else if (rand == 8) {
    gameBox.textContent = eigthQues;
}

// Check The Answers
submit.addEventListener("click", function () {
    switch (input.value) {
        case rand == 1 && "3":
        case rand == 2 && "8":
        case rand == 3 && "125":
        case rand == 4 && "16":
        case rand == 5 && "64":
        case rand == 6 && "75":
        case rand == 7 && "27":
        case rand == 8 && "0010":
            results.innerText = "Correct";
            reroll.innerText = "Reroll ?";
            break;
        case "":
            results.innerText = "Enter The Correct Number To Complete The Sequence";
            break;
        default:
            results.innerText = "Wrong Answer";
            reroll.innerText = "Reroll ?";
    }
});

// Rerolling Sequences
reroll.addEventListener("click", function () {
    window.location.reload();
})