// Initialize global variables for each form element
const nameDiv = document.getElementById("name");
const ageDiv = document.getElementById("age");
const bodyDiv = document.getElementById("body");
const mindDiv = document.getElementById("mind");
const personalityDiv = document.getElementById("personality");
const lovesDiv = document.getElementById("loves");
const hatesDiv = document.getElementById("hates");
const summarySection = document.getElementById("summary");

// Function to populate a div element from a .txt file
async function populateDiv(divElementId, txtFilePath) {
  const divElement = document.getElementById(divElementId);
  
  // Fetch the .txt file
  const response = await fetch(txtFilePath);
  const text = await response.text();
  
  // Split the text by lines and populate the div element
  const lines = text.split('\n');
  lines.forEach(line => {
    const word = document.createElement('span');
    word.className = 'word-item';
    word.textContent = line;
    word.addEventListener('click', function() {
      addSelected(divElementId, line);
    });
    divElement.appendChild(word);
  });
}

// Populate the div elements
populateDiv('name', './data/name.txt');
populateDiv('age', './data/age.txt');
populateDiv('body', './data/body.txt');
populateDiv('mind', './data/mind.txt');
populateDiv('personality', './data/personality.txt');
populateDiv('loves', './data/loves.txt');
populateDiv('hates', './data/hates.txt');

// Function to add the clicked word to the summary section
function addSelected(divId, word) {
  const summaryItem = document.createElement("p");
  summaryItem.textContent = word;
  summarySection.appendChild(summaryItem);
}

// Function to display the summary of clicked words
function showSummary() {
  // Clear the previous summary
  summarySection.innerHTML = "";
  
  // Prevent the form from being submitted
  return false;
}

let lastX = 0;
let lastY = 0;

// Function to dynamically scale and move words based on mouse movement and proximity
document.addEventListener('mousemove', function(event) {
  const x = (event.clientX + lastX) / 2;
  const y = (event.clientY + lastY) / 2;

  lastX = x;
  lastY = y;

  document.querySelectorAll('.word-item').forEach(word1 => {
    let dxSum = 0;
    let dySum = 0;

    // Calculate the effect of other words on this word
    document.querySelectorAll('.word-item').forEach(word2 => {
      if (word1 !== word2) {
        const rect1 = word1.getBoundingClientRect();
        const rect2 = word2.getBoundingClientRect();
        const dx = rect1.left - rect2.left;
        const dy = rect1.top - rect2.top;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          dxSum += dx / distance;
          dySum += dy / distance;
        }
      }
    });

    const rect = word1.getBoundingClientRect();
    const dx = rect.left + rect.width / 2 - x;
    const dy = rect.top + rect.height / 2 - y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const scale = Math.min(20 / distance, 1.2);

    word1.style.transform = `translate(${dxSum * 5}px, ${dySum * 5}px) scale(${scale})`;
  });
});