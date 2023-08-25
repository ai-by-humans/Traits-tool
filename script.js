// Global variables for form elements
const nameSelect = document.getElementById("name");
const ageSelect = document.getElementById("age");
const bodySelect = document.getElementById("body");
const mindSelect = document.getElementById("mind");
const personalitySelect = document.getElementById("personality");
const lovesSelect = document.getElementById("loves");
const hatesSelect = document.getElementById("hates");
const summarySection = document.getElementById("summary");

// Function to add selected option to summary
function addSelected(selectId) {
    const selectedOption = document.getElementById(selectId).value;
    if (selectedOption) {
        const summaryItem = document.createElement("p");
        summaryItem.textContent = `${selectedOption}`;
        summarySection.appendChild(summaryItem);
    } else {
        alert("Please select an option.");
    }
}

// Function to show summary on form submission
function showSummary() {
    summarySection.innerHTML = ""; // Clear previous summary
    // Add selected options to the summary section
    addSelected("name");
    addSelected("age");
    addSelected("body");
    addSelected("mind");
    addSelected("personality");
    addSelected("loves");
    addSelected("hates");
    return false; // Prevent form submission
}
