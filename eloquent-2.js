for (var i = "#"; i.length <= 8; i+="#")
  console.log(i);

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

//i had code that was very close to completeing the fizzbuzz challenge useing the if/else if/else method, but i could not get it to work
//so i had to look up the answer :/

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);

// WOW once again i was way off on this one and struggled for an hour, before looking up the answer above :/