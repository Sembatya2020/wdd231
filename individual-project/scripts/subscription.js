document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (validateEmail(email)) {
            alert('Thank you for subscribing!');
            form.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
