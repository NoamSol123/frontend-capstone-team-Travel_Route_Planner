// src/js/app.js

let currentFilter = ''; // Will be set by user
let myTrip = [];

// DOM Elements
const countrySelectionScreen = document.getElementById('country-selection-screen');
const countryGridSelect = document.getElementById('country-grid-select');
const plannerInterface = document.getElementById('planner-interface');
const selectedCountryTitle = document.getElementById('selected-country-title');

const catalogGrid = document.getElementById('catalog-grid');
const itineraryList = document.getElementById('itinerary-list');
const dropZoneMsg = document.getElementById('drop-zone-msg');
const totalCostEl = document.getElementById('total-cost');
const totalTimeEl = document.getElementById('total-time');
const saveBtn = document.getElementById('save-btn');
const itinerarySection = document.querySelector('.itinerary-section');

// 1. INIT
function init() {
    renderCountrySelection();
}

// 2. RENDER COUNTRY SELECTION SCREEN
function renderCountrySelection() {
    // Get unique countries
    const countries = [...new Set(attractionsData.map(item => item.country))];
    
    // Country Images (Hardcoded for demo style)
    const countryImages = {
        'France': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
        'Italy': 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&q=80',
        'USA': 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
        'Japan': 'https://images.unsplash.com/photo-1528164344705-475426879f93?auto=format&fit=crop&w=600&q=80',
        'UK': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80'
    };

    countryGridSelect.innerHTML = '';
    
    countries.forEach(country => {
        const div = document.createElement('div');
        div.className = 'country-card';
        div.innerHTML = `
            <img src="${countryImages[country] || 'https://placehold.co/600x400'}" alt="${country}">
            <h3>${country}</h3>
        `;
        div.onclick = () => startPlanning(country);
        countryGridSelect.appendChild(div);
    });
}

// 3. START PLANNING (Transition)
function startPlanning(country) {
    currentFilter = country;
    selectedCountryTitle.innerText = country;
    
    // Hide Selection, Show Planner
    countrySelectionScreen.classList.add('hidden');
    plannerInterface.classList.remove('hidden');
    
    renderCatalog();
    setupDragAndDrop();
    setupEventListeners();
}

// 4. RENDER CATALOG
function renderCatalog() {
    catalogGrid.innerHTML = '';
    
    const filteredData = attractionsData.filter(item => item.country === currentFilter);
    
    filteredData.forEach(attraction => {
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.setAttribute('draggable', 'true');
        card.dataset.id = attraction.id;
        
        card.innerHTML = `
            <img src="${attraction.image}" alt="${attraction.name}">
            <div class="card-body">
                <h3 class="card-title">${attraction.name}</h3>
                <div class="card-details">
                    <span>${attraction.duration}h</span>
                    <span>$${attraction.price}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', attraction.id);
            e.dataTransfer.effectAllowed = "copy";
        });
        
        catalogGrid.appendChild(card);
    });
}

// 5. DRAG & DROP
function setupDragAndDrop() {
    itinerarySection.addEventListener('dragover', (e) => {
        e.preventDefault();
        itinerarySection.style.backgroundColor = '#f9f9f9';
        itinerarySection.style.borderColor = '#d4af37';
    });

    itinerarySection.addEventListener('dragleave', (e) => {
        itinerarySection.style.backgroundColor = 'white';
        itinerarySection.style.borderColor = '#dcdcdc';
    });

    itinerarySection.addEventListener('drop', (e) => {
        e.preventDefault();
        itinerarySection.style.backgroundColor = 'white';
        itinerarySection.style.borderColor = '#dcdcdc';
        
        const id = e.dataTransfer.getData('text/plain');
        const attraction = attractionsData.find(item => item.id == id);
        
        if (attraction) addToTrip(attraction);
    });
}

function addToTrip(attraction) {
    // Check duplicates
    if (myTrip.some(i => i.id === attraction.id)) return;
    
    myTrip.push(attraction);
    renderItinerary();
    updateSummary();
}

window.removeFromTrip = function(index) {
    myTrip.splice(index, 1);
    renderItinerary();
    updateSummary();
}

function renderItinerary() {
    itineraryList.innerHTML = '';
    
    if (myTrip.length === 0) {
        dropZoneMsg.style.display = 'block';
    } else {
        dropZoneMsg.style.display = 'none';
    }
    
    myTrip.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'itinerary-item';
        li.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <div style="font-size:0.8rem; color:#666;">$${item.price} | ${item.duration}h</div>
            </div>
            <i class="fas fa-times" onclick="removeFromTrip(${index})" style="cursor:pointer; color:#e74c3c;"></i>
        `;
        itineraryList.appendChild(li);
    });
}

function updateSummary() {
    const cost = myTrip.reduce((sum, i) => sum + i.price, 0);
    const time = myTrip.reduce((sum, i) => sum + i.duration, 0);
    totalCostEl.innerText = `$${cost}`;
    totalTimeEl.innerText = `${time}h`;
}

// 6. SAVE
function setupEventListeners() {
    saveBtn.onclick = () => {
        if (myTrip.length === 0) return alert("Empty trip!");
        
        const newTrip = {
            id: Date.now(),
            country: currentFilter,
            date: new Date().toLocaleDateString(),
            items: myTrip,
            totalCost: myTrip.reduce((sum, i) => sum + i.price, 0),
            totalTime: myTrip.reduce((sum, i) => sum + i.duration, 0)
        };
        
        const trips = JSON.parse(localStorage.getItem('allTrips')) || [];
        trips.push(newTrip);
        localStorage.setItem('allTrips', JSON.stringify(trips));
        
        alert("Journey Saved!");
        myTrip = [];
        renderItinerary();
        updateSummary();
    };
}

document.addEventListener('DOMContentLoaded', init);