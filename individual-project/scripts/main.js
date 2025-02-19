document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Display farming places
    const farmingPlacesGrid = document.querySelector('.farming-places-grid');
    if (farmingPlacesGrid) {
        farmingPlacesGrid.innerHTML = farmingPlaces.map(place => `
            <div class="farm-card">
                <img src="${place.image}" alt="${place.name}" loading="lazy" 
                     onerror="this.src='images/placeholder-farm.jpg'">
                <div class="farm-info">
                    <h3>${place.name}</h3>
                    <p class="farm-location">
                        <i class="fas fa-map-marker-alt"></i> ${place.location}
                    </p>
                    <p>${place.description}</p>
                    <div class="farm-crops">
                        ${place.mainCrops.map(crop => 
                            `<span class="crop-tag">${crop}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
});