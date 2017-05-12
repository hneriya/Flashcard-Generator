//constructor to create cards called ClozeCards
var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;

    this.partial = function(){
    	var s = this.text.replace(this.cloze, "...");
    	return s;
    }
};

//export BasicCard
module.exports = ClozeCard;

