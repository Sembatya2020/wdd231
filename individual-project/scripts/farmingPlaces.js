export async function displayFarmingPlaces() {
    try {
        const response = await fetch('assets/farmers.json');
        const data = await response.json();
        const farmingPlacesGrid = document.querySelector('.farming-places-grid');
        if (farmingPlacesGrid) {
            farmingPlacesGrid.innerHTML = data.farmingPlaces.map(place => `
                <div class="farm-card">
                    <img src="${place.image}" alt="${place.name}" loading="lazy" 
                         onerror="this.src='images/placeholder-farm.jpg'">
                    <div class="farm-info">
                        <h3>
                            <a href="${place.url}" target="_blank" rel="noopener noreferrer">
                                ${place.name}
                            </a>
                        </h3>
                        <p class="farm-location">
                            <i class="fas fa-map-marker-alt"></i> ${place.location}
                        </p>
                        <p>${place.description}</p>
                        <div class="farm-crops">
                            ${place.mainCrops.map(crop => 
                                `<span class="crop-tag">${crop}</span>`
                            ).join('')}
                        </div>
                        <a href="${place.url}" target="_blank" class="learn-more-btn">
                            Learn More
                        </a>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error fetching farming places:', error);
    }
}
// navigation.js
export const initNavigation = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
};
