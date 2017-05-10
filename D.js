//import CardInfo
var CardInfo = require("./CardInfo.js");

// create the actual content of the cards 
var firstQuestion = new CardInfo("What type of alcohol is Jack Daniel's?", "Tennessee Whiskey");
var secondQuestion = new CardInfo("What type of alcohol is Johnny Walker?", "Scotch");
// var thirdQuestion = new CardInfo("Front", "Back");
// var fourthQuestion = new CardInfo("Front", "Back");


//using addBasicCard to create questions and answers on the cards
firstQuestion.addBasicCard("What type of alcohol is Jack Daniel's?", "Tennessee Whiskey");
secondQuestion.addBasicCard("What type of alcohol is Johnny Walker?", "Scotch");
// thirdQuestion.addBasicCard("What is Sterling Archer's drink of choice?", "Glengooley");
// fourthQuestion.addBasicCard("What state is bourbon from?", "Kentucky");

console.log(firstQuestion.front);
console.log(firstQuestion.back);

console.log(secondQuestion.front);
console.log(secondQuestion.back);

// console.log(thirdQuestion);
// console.log(fourthQuestion);

//------------------------------------------------------------------
// // create the actual content of the cards 
// var firstQuestion = new CardInfo("Front", "Back");
// var secondQuestion = new CardInfo("Front", "Back");
// // var thirdQuestion = new CardInfo("Front", "Back");
// // var fourthQuestion = new CardInfo("Front", "Back");


// //using addBasicCard to create questions and answers on the cards
// firstQuestion.addBasicCard("Front", "Back");
// secondQuestion.addBasicCard("What type of alcohol is Johnny Walker?", "Scotch");
// // thirdQuestion.addBasicCard("What is Sterling Archer's drink of choice?", "Glengooley");
// // fourthQuestion.addBasicCard("What state is bourbon from?", "Kentucky");

// console.log(firstQuestion);
// console.log(secondQuestion);
// // console.log(thirdQuestion);
// // console.log(fourthQuestion);
