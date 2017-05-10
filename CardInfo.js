
var BasicCard = require("./BasicCard.js");

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
