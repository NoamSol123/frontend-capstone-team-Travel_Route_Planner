// src/js/my-routes.js

const container = document.getElementById('saved-trips-container');
const clearBtn = document.getElementById('clear-history-btn');

function loadTrips() {
    const trips = JSON.parse(localStorage.getItem('allTrips')) || [];

    if (trips.length === 0) {
        container.innerHTML = '<p style="text-align:center; margin-top:50px; font-size:1.2rem;">No journeys booked yet.</p>';
        return;
    }

    container.innerHTML = '';
    
    trips.reverse().forEach(trip => {
        // Create Boarding Pass UI
        const pass = document.createElement('div');
        pass.className = 'boarding-pass';
        
        // Items list formatting
        const itemsHtml = trip.items.map(i => `<li>${i.name}</li>`).join('');

        pass.innerHTML = `
            <div class="pass-left">
                <span>DESTINATION</span>
                <h3>${trip.country.substring(0, 3).toUpperCase()}</h3>
                <span>${trip.country}</span>
            </div>
            <div class="pass-main">
                <div class="pass-header">
                    <div>
                        <small style="color:#888;">DATE</small>
                        <div style="font-weight:bold;">${trip.date}</div>
                    </div>
                    <div>
                        <small style="color:#888;">COST</small>
                        <div style="font-weight:bold; color:var(--primary-dark);">$${trip.totalCost}</div>
                    </div>
                    <div>
                        <small style="color:#888;">DURATION</small>
                        <div style="font-weight:bold;">${trip.totalTime}h</div>
                    </div>
                </div>
                <div class="pass-details">
                    <small style="color:#888; display:block; margin-bottom:5px;">ITINERARY</small>
                    <ul>${itemsHtml}</ul>
                </div>
                <button class="delete-trip-btn" onclick="deleteTrip(${trip.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        container.appendChild(pass);
    });
}

window.deleteTrip = function(id) {
    if(!confirm("Cancel this journey?")) return;
    let trips = JSON.parse(localStorage.getItem('allTrips')) || [];
    trips = trips.filter(t => t.id !== id);
    localStorage.setItem('allTrips', JSON.stringify(trips));
    loadTrips();
}

clearBtn.addEventListener('click', () => {
    if(confirm('Clear all history?')) {
        localStorage.removeItem('allTrips');
        loadTrips();
    }
});

loadTrips();