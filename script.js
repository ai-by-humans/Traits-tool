// Initialize global variables for each form element
const nameSelect = document.getElementById("name");
const ageSelect = document.getElementById("age");
const bodySelect = document.getElementById("body");
const mindSelect = document.getElementById("mind");
const personalitySelect = document.getElementById("personality");
const lovesSelect = document.getElementById("loves");
const hatesSelect = document.getElementById("hates");
const summarySection = document.getElementById("summary");

// Function to populate a select element from a .txt file
async function populateSelect(selectElementId, txtFilePath) {
  const selectElement = document.getElementById(selectElementId);
  
  // Fetch the .txt file
  const response = await fetch(txtFilePath);
  const text = await response.text();
  
  // Split the text by lines and populate the select element
  const lines = text.split('\n');
  lines.forEach(line => {
    const option = document.createElement('option');
    option.value = line;
    option.text = line;
    selectElement.add(option);
  });
}

// Populate the select elements
populateSelect('name', './data/name.txt');
populateSelect('age', './data/age.txt');
populateSelect('body', './data/body.txt');
populateSelect('mind', './data/mind.txt');
populateSelect('personality', './data/personality.txt');
populateSelect('loves', './data/loves.txt');
populateSelect('hates', './data/hates.txt');

// Existing functions for summary
// ... (addSelected and showSummary functions here)



/**
 * Function to add the selected option to the summary section.
 * @param {string} selectId - The ID of the select element.
 */
function addSelected(selectId) {
    // Get the value of the selected option
    const selectedOption = document.getElementById(selectId).value;
    
    // Check if an option is selected
    if (selectedOption) {
        // Create a new paragraph element
        const summaryItem = document.createElement("p");
        
        // Set the text content to the selected option
        summaryItem.textContent = `${selectedOption}`;
        
        // Append the new paragraph to the summary section
        summarySection.appendChild(summaryItem);
    } else {
        // Show an alert if no option is selected
        alert("Please select an option.");
    }
}

/**
 * Function to display the summary of selected options.
 * Clears the previous summary before adding new items.
 */
function showSummary() {
    // Clear the previous summary
    summarySection.innerHTML = "";
    
    // Add selected options for each form element to the summary
    addSelected("name");
    addSelected("age");
    addSelected("body");
    addSelected("mind");
    addSelected("personality");
    addSelected("loves");
    addSelected("hates");
    
    // Prevent the form from being submitted
    return false;
}
