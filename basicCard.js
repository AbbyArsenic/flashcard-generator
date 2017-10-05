console.log('Basic is running');

function basicCard(front, back) {
  this.front = front,
  this.back = back
  this.showCard = function() {
    console.log(this);
  }
}

var card1 = new basicCard("How many cups are in a pint?", 2);

console.log(card1);
console.log(card1.front);
console.log(card1.back);

card1.showCard();

console.log(card1);