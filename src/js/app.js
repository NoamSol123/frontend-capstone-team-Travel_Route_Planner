
let currentFilter = '';
let myTrip = [];

// DOM Elements placeholders (Will be connected once HTML is ready)
const countrySelectionScreen = document.getElementById('country-selection-screen');
const countryGridSelect = document.getElementById('country-grid-select');
const plannerInterface = document.getElementById('planner-interface');
const selectedCountryTitle = document.getElementById('selected-country-title');

// Init function
function init() {
    console.log("App Initialized");
    console.log("Data loaded:", typeof attractionsData !== 'undefined');
    // We will render countries here in the next iteration
}

document.addEventListener('DOMContentLoaded', init);


