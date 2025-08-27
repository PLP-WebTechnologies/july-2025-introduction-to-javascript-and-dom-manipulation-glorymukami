// ================================
// Part 1: Variables & Conditionals
// ================================
let userName = "Glory"; // variable declaration
let userAge = 19;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult.");
}

// ================================
// Part 2: Functions
// ================================

// Function 1: Greet the user
function greetUser(name) {
  return "Hello, " + name + " 👋";
}

// Function 2: Calculate square of a number
function square(num) {
  return num * num;
}

console.log(greetUser(userName));
console.log("Square of 5 is:", square(5));

// ================================
// Part 3: Loops
// ================================

// Loop 1: For loop to add list items to the DOM
let list = document.getElementById("loopList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i;
  list.appendChild(li);
}

// Loop 2: While loop countdown
let count = 3;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// ================================
// Part 4: DOM Interactions
// ================================

// DOM Interaction 1: Change text content on button click
document.getElementById("actionBtn").addEventListener("click", function () {
  document.getElementById("intro").textContent = greetUser(userName) + " Welcome to DOM!";
});

// DOM Interaction 2: Toggle visibility of text
document.getElementById("toggleBtn").addEventListener("click", function () {
  let text = document.getElementById("toggleText");
  text.style.display = (text.style.display === "none") ? "block" : "none";
});

// DOM Interaction 3: Change page title style dynamically
document.getElementById("pageTitle").style.color = "blue";
