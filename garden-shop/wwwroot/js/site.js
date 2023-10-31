// Function to toggle between dark and light mode
function toggleDarkMode() {
    // Toggles the dark mode based on the checkbox state
    var body = document.body;
    var darkModeToggle = document.getElementById("darkModeToggle");
    var darkModeIcon = document.getElementById("darkModeIcon");

    if (darkModeToggle.checked) {
        // Enable dark mode
        body.classList.add("dark-mode");
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");

        saveModePreference("dark-mode");
    } else {
        // Enable light mode
        body.classList.remove("dark-mode");
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");

        saveModePreference("light-mode");
    }
}

// Function to save the mode preference in local storage
function saveModePreference(mode) {
    // Saves the user's mode preference in local storage
    localStorage.setItem("modePreference", mode);
}

// Function to apply the saved mode on page load
function applySavedMode() {
    // Retrieves the saved mode preference and applies it to the page
    var savedMode = localStorage.getItem("modePreference");
    var body = document.body;
    var darkModeToggle = document.getElementById("darkModeToggle");
    var darkModeIcon = document.getElementById("darkModeIcon");

    if (savedMode === "dark-mode") {
        // Enable dark mode
        body.classList.add("dark-mode");
        darkModeToggle.checked = true;
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    } else {
        // Enable light mode (default)
        body.classList.remove("dark-mode");
        darkModeToggle.checked = false;
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
    }

    // Show the content after the preferred mode is applied
    var contentWrapper = document.getElementById("contentWrapper");
    contentWrapper.classList.remove("content-hidden");
}

// Apply the saved mode on page load
applySavedMode();

// Array of headlines
var headlines = [
    "Discover the Beauty of Your Garden",
    "Create Your Dream Outdoor Space",
    "Transform Your Garden into a Oasis",
    "Get Inspired with Our Gardening Tips",
    "Find the Perfect Plants for Your Garden"
];

var headlineElement = document.getElementById("headline");
var currentIndex = 0;

// Function to rotate the headlines
function rotateHeadlines() {
    // Rotates through the headlines array and updates the headline element
    headlineElement.textContent = headlines[currentIndex];
    currentIndex = (currentIndex + 1) % headlines.length;
}

// Set interval to rotate headlines every 5 seconds
setInterval(rotateHeadlines, 5000);
