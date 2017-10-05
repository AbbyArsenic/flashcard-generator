console.log('Basic is running');

function BasicCard(front, back) {
  if (!(this instanceof BasicCard)) { 
      return new BasicCard(front, back);
    }
  this.front = front,
  this.back = back
  this.showFront = function() {
    console.log(this.front);
  }
};

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", 
    "George Washington"
    );

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

//module.exports = BasicCard;