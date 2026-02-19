// src/js/my-routes.js

'use strict';

const container = document.getElementById('saved-trips-container');
const clearBtn  = document.getElementById('clear-history-btn');


// ─────────────────────────────────────────────────────────────
// LOAD & RENDER ALL TRIPS
// ─────────────────────────────────────────────────────────────
function loadTrips() {
    const trips = JSON.parse(localStorage.getItem('allTrips')) || [];

    if (trips.length === 0) {
        container.innerHTML = `
            <div style="text-align:center; margin-top:80px;">
                <p style="font-size:1.2rem; color:var(--text-light);">No journeys saved yet.</p>
                <a href="planner.html" style="display:inline-block; margin-top:20px; color:var(--primary-dark); font-weight:600; text-decoration:underline;">
                    Plan your first trip →
                </a>
            </div>`;
        return;
    }

    container.innerHTML = '';

    // Newest first
    [...trips].reverse().forEach(trip => {
        const pass = document.createElement('article');
        pass.className = 'boarding-pass';
        pass.setAttribute('aria-label', `Saved trip to ${trip.country} on ${trip.date}`);

        const itemsHtml = trip.items
            .map(i => `<li>${i.name}</li>`)
            .join('');

        pass.innerHTML = `
            <div class="pass-left">
                <span>DESTINATION</span>
                <h2>${trip.country.substring(0, 3).toUpperCase()}</h2>
                <span>${trip.country}</span>
            </div>

            <div class="pass-main">
                <div class="pass-header">
                    <div>
                        <small>DATE</small>
                        <div class="val">${trip.date}</div>
                    </div>
                    <div>
                        <small>TOTAL COST</small>
                        <div class="val cost">$${trip.totalCost}</div>
                    </div>
                    <div>
                        <small>DURATION</small>
                        <div class="val">${trip.totalTime}h</div>
                    </div>
                </div>

                <div class="pass-details">
                    <small style="display:block; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px; color:var(--text-light);">Itinerary</small>
                    <ul aria-label="Trip itinerary">${itemsHtml}</ul>
                </div>

                <button
                    class="delete-trip-btn"
                    data-id="${trip.id}"
                    aria-label="Delete trip to ${trip.country} on ${trip.date}">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        `;

        // Attach delete handler (no inline onclick)
        pass.querySelector('.delete-trip-btn').addEventListener('click', () => deleteTrip(trip.id));

        container.appendChild(pass);
    });
}


// ─────────────────────────────────────────────────────────────
// DELETE ONE TRIP
// ─────────────────────────────────────────────────────────────
function deleteTrip(id) {
    if (!confirm('Remove this journey from your boarding passes?')) return;

    let trips = JSON.parse(localStorage.getItem('allTrips')) || [];
    trips = trips.filter(t => t.id !== id);
    localStorage.setItem('allTrips', JSON.stringify(trips));
    loadTrips();
}

// Expose for any legacy inline usage
window.deleteTrip = deleteTrip;


// ─────────────────────────────────────────────────────────────
// CLEAR ALL
// ─────────────────────────────────────────────────────────────
clearBtn.addEventListener('click', () => {
    if (confirm('Clear all saved journeys? This cannot be undone.')) {
        localStorage.removeItem('allTrips');
        loadTrips();
    }
});


// ─────────────────────────────────────────────────────────────
// BOOT
// ─────────────────────────────────────────────────────────────
loadTrips();