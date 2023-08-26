// Line 1: Initialize variables
let wordClouds = document.querySelectorAll('.word-cloud');

// Line 5: Function to expand word cloud on hover or click
wordClouds.forEach((wordCloud) => {
  wordCloud.addEventListener('mouseover', function() {
    this.classList.add('expand');
  });
  wordCloud.addEventListener('mouseout', function() {
    this.classList.remove('expand');
  });
  wordCloud.addEventListener('click', function() {
    this.classList.toggle('expand');
  });
});

// Line 19: Function for dynamic animation of words
function animateWords(wordCloud) {
  let words = wordCloud.querySelectorAll('.word');
  words.forEach((word) => {
    word.addEventListener('animationend', function() {
      this.style.animation = '';
    });
    let animationType = Math.random() > 0.5 ? 'fadeInOut' : 'moveDynamically';
    let animationDuration = Math.floor(Math.random() * 5 + 3);
    word.style.animation = `${animationType} ${animationDuration}s infinite`;
  });
}

// Line 33: Apply animations to all word clouds
wordClouds.forEach((wordCloud) => {
  animateWords(wordCloud);
});

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
      addSelected(divElementId, line, word);
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

// Function to add the clicked word to the summary section and remove it from the word cloud
function addSelected(divId, word, wordElement) {
  const summaryItem = document.createElement("p");
  summaryItem.textContent = word;
  summarySection.appendChild(summaryItem);
  wordElement.remove();  // Remove the clicked word from the word cloud
}

// Function to display the summary of clicked words
function showSummary() {
  // Clear the previous summary
  summarySection.innerHTML = "";
  
  // Prevent the form from being submitted
  return false;
}
