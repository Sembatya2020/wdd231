 // formHandler.js
  export const handleFormSubmission = () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };
      
      // Store in localStorage
      localStorage.setItem('lastSubmission', JSON.stringify(formData));
      
      // Redirect to thank you page
      window.location.href = 'thankyou.html';
    });
  };
  