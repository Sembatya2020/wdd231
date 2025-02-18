import { API_KEY } from '.assets/config.js';

export async function fetchCrops() {
    try {
        const response = await fetch('assets/data.json');
        const data = await response.json();
        const cropsList = document.getElementById('cropsList');

        data.crops.forEach(crop => {
            const cropItem = document.createElement('div');
            cropItem.classList.add('crop-item');
            cropItem.innerHTML = `
                <h3>${crop.name}</h3>
                <p>${crop.description}</p>
                <button class="learn-more" data-crop="${crop.name}">Learn More</button>
            `;
            cropsList.appendChild(cropItem);
        });

        document.querySelectorAll('.learn-more').forEach(button => {
            button.addEventListener('click', (event) => {
                const cropName = event.target.getAttribute('data-crop');
                const crop = data.crops.find(c => c.name === cropName);
                const modalContent = document.getElementById('modalContent');
                modalContent.innerHTML = `
                    <h2>${crop.name}</h2>
                    <p>${crop.description}</p>
                `;
                document.getElementById('cropModal').style.display = 'block';
            });
        });
    } catch (error) {
        console.error('Error fetching crops:', error);
    }
}

export async function fetchPlaces() {
    try {
        const response = await fetch('assets/data.json');
        const data = await response.json();
        const placesList = document.getElementById('placesList');

        data.places.forEach(place => {
            const placeItem = document.createElement('div');
            placeItem.classList.add('place-item');
            placeItem.innerHTML = `
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <img src="${place.image}" alt="${place.name}">
                <a href="${place.url}" target="_blank">Learn More</a>
            `;
            placesList.appendChild(placeItem);
        });

        document.querySelectorAll('.learn-more').forEach(button => {
            button.addEventListener('click', (event) => {
                const placeName = event.target.getAttribute('data-place');
                const place = data.places.find(p => p.name === placeName);
                const modalContent = document.getElementById('modalContent');
                modalContent.innerHTML = `
                    <h2>${place.name}</h2>
                    <p>${place.description}</p>
                    <img src="${place.image}" alt="${place.name}">
                    <a href="${place.url}" target="_blank">Learn More</a>
                `;
                document.getElementById('placeModal').style.display = 'block';
            });
        });
    } catch (error) {
        console.error('Error fetching places:', error);
    }
}

export async function fetchPractices() {
    try {
        const response = await fetch('assets/data.json');
        const data = await response.json();
        const practicesGrid = document.querySelector('.practices-grid');

        data.practices.forEach(practice => {
            const practiceItem = document.createElement('div');
            practiceItem.classList.add('practice-item');
            practiceItem.innerHTML = `
                <h3>${practice.name}</h3>
                <p>${practice.description}</p>
            `;
            practicesGrid.appendChild(practiceItem);
        });
    } catch (error) {
        console.error('Error fetching practices:', error);
    }
}

export async function fetchWeather() {
    try {
        console.log('Fetching weather data...');
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Nairobi`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Weather data:', data);
        const weatherDataDiv = document.getElementById('weatherData');
        weatherDataDiv.innerHTML = `
            <p>Location: ${data.location.name}</p>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}