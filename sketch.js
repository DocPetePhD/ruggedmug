let characters = [];
let murderer;

function setup() {
  createCanvas(400, 400);

  // Create an array of Clue characters
  characters.push(createCharacter('Miss Scarlet', [255, 0, 0], 50, 100));
  characters.push(createCharacter('Colonel Mustard', [255, 255, 0], 200, 100));
  characters.push(createCharacter('Professor Plum', [128, 0, 128], 350, 100));
  characters.push(createCharacter('Mrs. Peacock', [0, 0, 255], 100, 250));

  // Randomly select one character to be the murderer
  murderer = random(characters);
}

function draw() {
  background(220);

  // Loop through each character and display them
  for (let i = 0; i < characters.length; i++) {
    characters[i].move();
    characters[i].display();
  }
}

// Function to create a Clue character object
function createCharacter(name, color, x, y) {
  return {
    name: name,
    color: color,
    x: x,
    y: y,

    // Display the character as a colored circle with their name
    display: function() {
      fill(this.color);
      ellipse(this.x, this.y, 50, 50); // Draw character
      fill(0);
      textSize(12);
      textAlign(CENTER);
      text(this.name, this.x, this.y + 35); // Display name below the character
    },

    // Move the character randomly
    move: function() {
      this.x += random(-2, 2); // Move randomly in x-axis
      this.y += random(-2, 2); // Move randomly in y-axis
    },

    // Check if this character was clicked
    isClicked: function(mx, my) {
      let d = dist(mx, my, this.x, this.y);
      return d < 25; // Check if click is within the circle's radius
    }
  };
}

// Check if a character was clicked
function mousePressed() {
  for (let i = 0; i < characters.length; i++) {
    if (characters[i].isClicked(mouseX, mouseY)) {
      if (characters[i] === murderer) {
        console.log(characters[i].name + " is the murderer!");
      } else {
        console.log(characters[i].name + " is not the murderer.");
      }
    }
  }
}
