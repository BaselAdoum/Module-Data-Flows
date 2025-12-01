const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};
function introduceYourself({ name, age, favouriteFood }) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}
// I add this line to check if the function is being called
console.log("Script is running and function is being called!");
introduceYourself(personOne);