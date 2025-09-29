// =========================
// Part 2: Functions
// =========================

// Example: local vs global scope
let globalCount = 0;

function incrementCounter(step) {
  // local scope
  let localMessage = "Counter updated!";
  globalCount += step;
  console.log(localMessage, "New count:", globalCount);
  return globalCount;
}

// Example: reusable logic
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// =========================
// Part 3: JS + CSS Integration
// =========================

// Animate box button
const animateBoxBtn = document.getElementById("animateBoxBtn");
const animateBox = document.getElementById("animateBox");
animateBoxBtn.addEventListener("click", function() {
  toggleClass(animateBox, "animate");
  incrementCounter(1); // demonstrate function reuse
});

// Flip card
const flipCardBtn = document.getElementById("flipCardBtn");
const flipCard = document.getElementById("flipCard");
flipCardBtn.addEventListener("click", function() {
  toggleClass(flipCard, "flipped");
  incrementCounter(2);
});

// Modal popup
const modalBtn = document.getElementById("toggleModalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", function() {
  toggleClass(modal, "show");
  incrementCounter(3);
});

closeModal.addEventListener("click", function() {
  modal.classList.remove("show");
});
