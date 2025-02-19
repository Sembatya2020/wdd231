document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/farmers.json')
        .then(response => response.json())
        .then(data => {
            const farmersSection = document.querySelector('.farming-places-grid');
            data.farmingPlaces.forEach(place => {
                const placeDiv = document.createElement('div');
                placeDiv.classList.add('farming-place');
                placeDiv.innerHTML = `
                    <h3>${place.name}</h3>
                    <p><strong>Location:</strong> ${place.location}</p>
                    <p><strong>Main Crops:</strong> ${place.mainCrops.join(', ')}</p>
                    <img src="${place.image}" alt="${place.name}">
                    <p>${place.description}</p>
                    <a href="${place.url}" target="_blank">Learn more</a>
                `;
                farmersSection.appendChild(placeDiv);
            });
        })
        .catch(error => console.error('Error fetching farming places data:', error));
});
