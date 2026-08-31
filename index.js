let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count")
let count = 0;


// Function to display the counter
function updateCount() {
  document.getElementById("count").innerHTML = count;
}


// Function to increase the counter
function increment() {
  count++;
  updateCount();
}


// Function to decrease the counter
function decrement() {
  if (count > 0) {
    count--;
    updateCount();
  }
}


// Function to  save and reset the counter
function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr;


  countEl.textContent = 0
  count = 0
}
