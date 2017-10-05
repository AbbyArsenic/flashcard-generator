console.log('Cloze is running');

function clozeCard(text, cloze) {
  this.text = text,
  this.cloze = cloze

  this.remove = function() {
    if (text.indexOf(cloze) === -1) {
      console.log('Oops! Text does not contain this entry');
      this.partial = "Please submit valid text to omit";
    } else {
      console.log("Flashcard successfully created!");
      this.partial = text.replace(cloze,'...');
    };
  }
  this.showPartial = function() {
    console.log(this.partial);
  }
  this.showFull = function() {
    console.log(this.text);
  }
  this.remove();
}

var card1 = new clozeCard("There are 2 cups in a pint", "cups");
var card2 = new clozeCard("There are 4 quarts in a gallon", "cups");

card1.showPartial();
card2.showPartial();