let counter = 0;
function increment() {
  counter++;
  document.getElementById("count").textContent = counter;
}

function reset() {
  counter = 0;

  document.getElementById("count").textContent = counter;
}
