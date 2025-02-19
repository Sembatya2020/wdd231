document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/farmers.json')
        .then(response => response.json())
        .then(data => {
            const farmersSection = document.getElementById('farmersList');
            data.farmers.forEach(farmer => {
                const farmerDiv = document.createElement('div');
                farmerDiv.classList.add('farmer');
                farmerDiv.innerHTML = `
                    <h3>${farmer.place}</h3>
                    <img src="${farmer.picture}" alt="${farmer.place}">
                    <p>${farmer.description}</p>
                    <a href="${farmer.url}" target="_blank">Learn more</a>
                `;
                farmersSection.appendChild(farmerDiv);
            });
        })
        .catch(error => console.error('Error fetching farmers data:', error));
});