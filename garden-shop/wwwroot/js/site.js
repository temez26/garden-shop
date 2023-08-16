function toggleDarkMode() {
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

function saveModePreference(mode) {
    localStorage.setItem("modePreference", mode);
}

function applySavedMode() {
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



var headlines = [
    "Discover the Beauty of Your Garden",
    "Create Your Dream Outdoor Space",
    "Transform Your Garden into a Oasis",
    "Get Inspired with Our Gardening Tips",
    "Find the Perfect Plants for Your Garden"
];
var headlineElement = document.getElementById("headline");
var currentIndex = 0;

function rotateHeadlines() {
    headlineElement.textContent = headlines[currentIndex];
    currentIndex = (currentIndex + 1) % headlines.length;
}

setInterval(rotateHeadlines, 5000);






