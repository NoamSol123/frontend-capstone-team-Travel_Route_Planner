// src/js/app.js

'use strict';

let currentFilter = '';
let myTrip = [];

// ── DOM refs ──────────────────────────────────────────────────
const countrySelectionScreen = document.getElementById('country-selection-screen');
const countryGridSelect      = document.getElementById('country-grid-select');
const plannerInterface       = document.getElementById('planner-interface');
const selectedCountryTitle   = document.getElementById('selected-country-title');
const catalogGrid            = document.getElementById('catalog-grid');
const itineraryList          = document.getElementById('itinerary-list');
const dropZoneMsg            = document.getElementById('drop-zone-msg');
const totalCostEl            = document.getElementById('total-cost');
const totalTimeEl            = document.getElementById('total-time');
const saveBtn                = document.getElementById('save-btn');
const itinerarySection       = document.querySelector('.itinerary-section');

// Country hero images
const COUNTRY_IMAGES = {
    France: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=70',
    Italy:  'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=70',
    USA:    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=70',
    Japan:  'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=70',
    UK:     'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=70'
};


// ─────────────────────────────────────────────────────────────
// 1. INIT
// ─────────────────────────────────────────────────────────────
function init() {
    renderCountrySelection();
}


// ─────────────────────────────────────────────────────────────
// 2. COUNTRY SELECTION
// ─────────────────────────────────────────────────────────────
function renderCountrySelection() {
    const countries = [...new Set(attractionsData.map(item => item.country))];
    countryGridSelect.innerHTML = '';

    countries.forEach(country => {
        const div = document.createElement('div');
        div.className = 'country-card';
        div.setAttribute('role', 'listitem');
        div.setAttribute('tabindex', '0');
        div.setAttribute('aria-label', `Select ${country}`);

        div.innerHTML = `
            <img src="${COUNTRY_IMAGES[country] || 'https://placehold.co/800x350?text=' + country}"
                 alt="${country} landscape"
                 width="800" height="350"
                 loading="lazy">
            <h3>${country}</h3>
        `;

        div.addEventListener('click', () => startPlanning(country));
        // Keyboard support
        div.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); startPlanning(country); }
        });

        countryGridSelect.appendChild(div);
    });
}


// ─────────────────────────────────────────────────────────────
// 3. START PLANNING
// ─────────────────────────────────────────────────────────────
function startPlanning(country) {
    currentFilter = country;
    selectedCountryTitle.textContent = country;

    countrySelectionScreen.classList.add('hidden');
    plannerInterface.classList.remove('hidden');

    renderCatalog();
    setupDragAndDrop();
    setupSaveButton();
}


// ─────────────────────────────────────────────────────────────
// 4. RENDER CATALOG
// ─────────────────────────────────────────────────────────────
function renderCatalog() {
    catalogGrid.innerHTML = '';

    const filtered = attractionsData.filter(item => item.country === currentFilter);

    filtered.forEach(attraction => {
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.setAttribute('draggable', 'true');
        card.setAttribute('role', 'listitem');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${attraction.name} — $${attraction.price}, ${attraction.duration}h. Press Enter to add.`);
        card.dataset.id = attraction.id;

        card.innerHTML = `
            <img src="${attraction.image}"
                 alt="${attraction.name}"
                 width="600" height="400"
                 loading="lazy">
            <div class="card-body">
                <h3 class="card-title">${attraction.name}</h3>
                <div class="card-details">
                    <span>${attraction.duration}h</span>
                    <span>$${attraction.price}</span>
                </div>
            </div>
        `;

        // Drag (desktop)
        card.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', attraction.id);
            e.dataTransfer.effectAllowed = 'copy';
            card.classList.add('dragging');
        });
        card.addEventListener('dragend', () => card.classList.remove('dragging'));

        // Keyboard / tap to add (mobile-friendly)
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); addToTrip(attraction); }
        });
        card.addEventListener('click', () => addToTrip(attraction));

        catalogGrid.appendChild(card);
    });
}


// ─────────────────────────────────────────────────────────────
// 5. DRAG & DROP (drop zone)
// ─────────────────────────────────────────────────────────────
function setupDragAndDrop() {
    itinerarySection.addEventListener('dragover', e => {
        e.preventDefault();
        itinerarySection.style.backgroundColor = '#fffdf0';
        itinerarySection.style.borderColor = '#d4af37';
    });

    itinerarySection.addEventListener('dragleave', () => {
        itinerarySection.style.backgroundColor = '';
        itinerarySection.style.borderColor = '';
    });

    itinerarySection.addEventListener('drop', e => {
        e.preventDefault();
        itinerarySection.style.backgroundColor = '';
        itinerarySection.style.borderColor = '';

        const id = parseInt(e.dataTransfer.getData('text/plain'), 10);
        const attraction = attractionsData.find(item => item.id === id);
        if (attraction) addToTrip(attraction);
    });
}


// ─────────────────────────────────────────────────────────────
// 6. TRIP STATE
// ─────────────────────────────────────────────────────────────
function addToTrip(attraction) {
    if (myTrip.some(i => i.id === attraction.id)) return; // no duplicates
    myTrip.push(attraction);
    renderItinerary();
    updateSummary();
}

function removeFromTrip(id) {
    myTrip = myTrip.filter(i => i.id !== id);
    renderItinerary();
    updateSummary();
}

// Expose for inline onclick (still needed from rendered HTML)
window.removeFromTrip = removeFromTrip;


// ─────────────────────────────────────────────────────────────
// 7. RENDER ITINERARY
// ─────────────────────────────────────────────────────────────
function renderItinerary() {
    itineraryList.innerHTML = '';
    dropZoneMsg.style.display = myTrip.length === 0 ? 'block' : 'none';

    myTrip.forEach(item => {
        const li = document.createElement('li');
        li.className = 'itinerary-item';

        li.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <div class="item-meta">$${item.price} &nbsp;|&nbsp; ${item.duration}h</div>
            </div>
            <button class="remove-btn" aria-label="Remove ${item.name} from itinerary">
                <i class="fas fa-times" aria-hidden="true"></i>
            </button>
        `;

        li.querySelector('.remove-btn').addEventListener('click', () => removeFromTrip(item.id));
        itineraryList.appendChild(li);
    });
}


// ─────────────────────────────────────────────────────────────
// 8. UPDATE TOTALS
// ─────────────────────────────────────────────────────────────
function updateSummary() {
    const cost = myTrip.reduce((sum, i) => sum + i.price, 0);
    const time = myTrip.reduce((sum, i) => sum + i.duration, 0);
    totalCostEl.textContent = `$${cost}`;
    totalTimeEl.textContent = `${time}h`;
}


// ─────────────────────────────────────────────────────────────
// 9. SAVE TRIP
// ─────────────────────────────────────────────────────────────
function setupSaveButton() {
    saveBtn.addEventListener('click', () => {
        if (myTrip.length === 0) {
            alert('Add at least one experience to save your trip!');
            return;
        }

        const newTrip = {
            id:        Date.now(),
            country:   currentFilter,
            date:      new Date().toLocaleDateString(),
            items:     [...myTrip],
            totalCost: myTrip.reduce((sum, i) => sum + i.price, 0),
            totalTime: myTrip.reduce((sum, i) => sum + i.duration, 0)
        };

        const existing = JSON.parse(localStorage.getItem('allTrips')) || [];
        existing.push(newTrip);
        localStorage.setItem('allTrips', JSON.stringify(existing));

        alert('Journey saved! View it in My Boarding Passes.');
        myTrip = [];
        renderItinerary();
        updateSummary();
    });
}


// ─────────────────────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);