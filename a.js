function BasicCard(front, back) {
    this.front = front;
    this.back = back;
}

module.exports = BasicCard;

var BasicCard = require("./basicCard.js");

var CardInfo = function(question, answer) {
  // this.students will hold all of our student objects
  this.cardArray = [];
  this.numCards = 0;
  this.question = question;
  this.answer = answer;
  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.cardArray and updates this.numCards
  this.addBasicCard = function(x, y) {
    this.cardArray.push(new BasicCard(x, y));
    this.numCards = this.cardArray.length;
  };
};

// exporting our CardInfo constructor. We will require it in main.js
module.exports = CardInfo;

// requiring our Classroom module exported from classroom.js
var CardInfo = require("./CardInfo.js");

// creating and storing a new classroom object
var firstQuestion = new Classroom("Front", "Back");
var secondQuestion = new Classroom("Front", "Back");
var thirdQuestion = new Classroom("Front", "Back");
var fourthQuestion = new Classroom("Front", "Back");


// calling the addStudent method on our firstQuestion object
firstQuestion.addBasicCard("What type of alcohol is Jack Daniel's?", "Tennessee Whiskey");
SecondQuestion.addBasicCard("What type of alcohol is Johnny Walker?", "Scotch");
FourthQuestion.addBasicCard("What state is bourbon from?", "Kentucky");
console.log(firstQuestion).addBasicCard("What is Sterling Archer's drink of choice?", "Glengooley");

module.exports = BasicCard;
