console.log('Cloze is running');

function ClozeCard(text, cloze) {
  if (!(this instanceof ClozeCard)) { 
      return new ClozeCard(text, cloze);
    }
  this.fullText = text,
  this.cloze = cloze

  this.remove = function() {
    if (text.indexOf(cloze) === -1) {
      console.log('Oops! Text does not contain the information you selected');
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
    console.log(this.fullText);
  }
  this.remove();
}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", 
    "George Washington"
    );

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

//module.exports = ClozeCard;