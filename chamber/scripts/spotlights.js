document.addEventListener("DOMContentLoaded", () => {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const members = data.filter(member => member.membershipLevel >= 2); // Show only gold/silver members
            shuffleArray(members);
            
            const spotlightContainer = document.getElementById("spotlight-container");
            spotlightContainer.innerHTML = ""; // Clear previous content

            members.slice(0, 3).forEach(member => {
                const card = document.createElement("div");
                card.classList.add("spotlight");

                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}" class="spotlight-image">
                    <h3>${member.name}</h3>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Email:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
                    <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                `;

                spotlightContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading members:", error));
});

// Shuffle function for random spotlights
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
