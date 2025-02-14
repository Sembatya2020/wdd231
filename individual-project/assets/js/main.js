import { fetchData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    fetchData().then(data => {
        displayCrops(data.crops);
        displayPractices(data.practices);
    }).catch(error => {
        console.error('Error fetching data:', error);
    });
});

function displayCrops(crops) {
    const cropsContainer = document.getElementById('crops-container');
    crops.forEach(crop => {
        const cropElement = document.createElement('div');
        cropElement.classList.add('crop-item');
        cropElement.innerHTML = `
            <h3>${crop.name}</h3>
            <p>${crop.description}</p>
        `;
        cropsContainer.appendChild(cropElement);
    });
}

function displayPractices(practices) {
    const practicesContainer = document.getElementById('practices-container');
    practices.forEach(practice => {
        const practiceElement = document.createElement('div');
        practiceElement.classList.add('practice-item');
        practiceElement.innerHTML = `
            <h3>${practice.name}</h3>
            <p>${practice.description}</p>
        `;
        practicesContainer.appendChild(practiceElement);
    });
}