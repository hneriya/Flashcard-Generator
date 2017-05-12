//import basic and cloze card functions, allow inquirer to work
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var inquirer = require("inquirer");


// create the actual content of the cards:

//basic cards
var bq1 = new BasicCard("What type of alcohol is Jack Daniel's?", "tennessee whiskey");
var bq2 = new BasicCard("What type of alcohol is Johnny Walker?", "scotch");
var bq3 = new BasicCard("What is Sterling Archer's drink of choice?", "glengooley");
var bq4 = new BasicCard("What state is bourbon from?", "Kentucky");
//cloze cards
var cq1 = new ClozeCard("Johnny Walker is a blended scotch ?", "blended");
var cq2 = new ClozeCard("Ciroc is a grape based vodka?", "grape");
var cq3 = new ClozeCard("Al Capone's drank templeton rye in prison?", "templeton rye");
var cq4 = new ClozeCard("glen, the prefix in many scotches, has an original meaning of valley", "glen");

//array of both
var arrayBasic = [bq1, bq2, bq3, bq4]
var arrayCloze = [cq1, cq2, cq3, cq4]

//ask user which game he wants, then link to the function depending on choice
inquirer.prompt([{
        type: "list",
        message: "which type of flashcard do you want to use?",
        choices: ["BasicCard", "Clozecard"],
        name: "flashcardType"
    }

]).then(function(answer) {
    // If the user selects BasicCard, run basic Card, ELSE run Cloze
    if (answer.flashcardType === "BasicCard") {
        askBasic();
    } else {
        askCloze();
    }
});


var count = 0;

//count starts at zero, goes until end of list
var askBasic = function() {
    if (count < 4) {
        // questions are asked, if user answer matches our answer, print correct, else, print wrong
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: arrayBasic[count].front
        }]).then(function(answers) {
            //all answers in lower case to match our answers
            if (answers.name.toLowerCase() === arrayBasic[count].back)
                console.log("correct!")
            else {
                console.log("wrong, correct answer is:  " + arrayBasic[count].back);
            }
            count++;
            // run the question until all questions asked
            askBasic();
        });
    } else {
        console.log("All questions asked");
    }
};



var askCloze = function() {
    if (count < 4) {
        // questions are asked, if user answer matches our answer, print correct, else, print wrong
        inquirer.prompt([{
            type: "input",
            name: "name",
            message: arrayCloze[count].partial()
        }]).then(function(answers) {
            if (answers.name.toLowerCase() === arrayCloze[count].cloze)
                console.log("correct!")
            else {
                console.log("wrong, correct answer is:  " + arrayCloze[count].cloze);
            }
            count++;
            // runs until all questions asked
            askCloze();
        });
    } else {
        console.log("All questions asked");
    }
};
