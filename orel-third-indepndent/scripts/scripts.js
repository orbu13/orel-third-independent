// User Interface Logic

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // prevent refresh

  // Get input value
  let inputValue = document.getElementById("numberInput").value;

  // Call business logic function and display the result
  let result = processNumbers(inputValue);
  displayResult(result);
}

// Function to display the result in the output element
function displayResult(result) {
  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = result.join(", ");
}

// Add event listener to the form submit event
let form = document.getElementById("numberForm");
form.addEventListener("submit", handleSubmit);



// Business Logic

// Function to process numbers
function processNumbers(inputValue) {
  let result = [];

  for (let i = 0; i <= inputValue; i++) {
    let num = i + "";
    if (num.includes("3")) {
      result.push("Won't you be my neighbor?!");
    } else if (num.includes("2")) {
      result.push("Boop!");
    } else if (num.includes("1")) {
      result.push("Beep!");
    } else {
      result.push(num);
    }
  }

  return result;
}