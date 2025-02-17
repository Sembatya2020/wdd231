// main.js

import { fetchPlaces, fetchPractices, fetchWeather } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    fetchPlaces();
    fetchPractices();
    fetchWeather();

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const modal = document.getElementById('placeModal');
    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function showSlide(n) {
        index += n;
        if (index < 0) {
            index = slide.length - 1;
        } else if (index >= slide.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener('click', () => showSlide(-1));
    next.addEventListener('click', () => showSlide(1));

    // Initialize Google Map
    function initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -1.2921, lng: 36.8219 },
            zoom: 8
        });

        const input = document.getElementById('search-input');
        const searchBox = new google.maps.places.SearchBox(input);

        map.addListener('bounds_changed', () => {
            searchBox.setBounds(map.getBounds());
        });

        searchBox.addEventListener('places_changed', () => {
            const places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            const bounds = new google.maps.LatLngBounds();
            places.forEach(place => {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }

                if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    }

    window.initMap = initMap;

    // Fetch and display data dynamically
    async function fetchData() {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function displayData(data) {
        const container = document.querySelector('.data-container');
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item');
            itemElement.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <p>${item.date}</p>
                <p>${item.location}</p>
            `;
            container.appendChild(itemElement);
        });
    }

    fetchData();

    // Use localStorage
    const saveButton = document.querySelector('.save-button');
    saveButton.addEventListener('click', () => {
        const dataToSave = { key: 'value' };
        localStorage.setItem('data', JSON.stringify(dataToSave));
    });

    const loadButton = document.querySelector('.load-button');
    loadButton.addEventListener('click', () => {
        const savedData = JSON.parse(localStorage.getItem('data'));
        console.log(savedData);
    });

    // Display last updated date
    const lastUpdatedElement = document.querySelector('.last-updated');
    if (lastUpdatedElement) {
        const lastUpdated = new Date(document.lastModified);
        lastUpdatedElement.textContent = `Last Updated: ${lastUpdated.toLocaleString()}`;
    }
});