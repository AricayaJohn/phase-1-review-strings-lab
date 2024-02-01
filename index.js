// Write your code in this file!
//ln3 is add variable
const currentUser = 'Spiderman';
console.log(currentUser);

//ln7 concatinate string and interpolate a variable 
const welcomeMessage = `Welcome to Flatbook, ' + ${currentUser}!` ;
console.log(welcomeMessage);

//ln11 is to change the whole varable message using Uppercase function
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);

//ln16 creating a variable assigned for a short greet
//ln16 writing the short greet with only first letter of user's name and adding a !
const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
console.log(shortGreeting);

