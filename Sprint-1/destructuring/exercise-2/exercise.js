let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// Loop through each character in the hogwarts array. I can use forEach()
//  to loop through each item:


hogwarts.forEach(function(character) {
  // Destructure - extract firstName, lastName, and house from current character object
  const { firstName, lastName, house } = character;
  
  // Check if this character belongs to Gryffindor house
  if (house === "Gryffindor") {
    // If yes, print their full name
    console.log(firstName + " " + lastName);
  }
});


// Loop through each character in the hogwarts array
hogwarts.forEach(function(character) {
  // Destructure - extract firstName, lastName, occupation, and pet from current character
  const { firstName, lastName, occupation, pet } = character;
  
  // Check if this person is a teacher AND has a pet (pet is not null)
  if (occupation === "Teacher" && pet !== null) {
    // If both conditions are true, print their name. 
    console.log(firstName + " " + lastName);
  }
});