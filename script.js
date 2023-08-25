// Initialize global variables for each form element
const nameSelect = document.getElementById("name");
const ageSelect = document.getElementById("age");
const bodySelect = document.getElementById("body");
const mindSelect = document.getElementById("mind");
const personalitySelect = document.getElementById("personality");
const lovesSelect = document.getElementById("loves");
const hatesSelect = document.getElementById("hates");
const summarySection = document.getElementById("summary");

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
