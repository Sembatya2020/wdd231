// api.js

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
    const apiKey = '045ae9e8c907623cd67700f14b149994';
    const city = 'Nairobi'; // You can change this to any city in East Africa
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherData = document.getElementById('weatherData');

        weatherData.innerHTML = `
            <h3>Weather in ${data.location.name}</h3>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind Speed: ${data.current.wind_kph} kph</p>
        `;
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}