// Populate current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Populate last modified date
document.getElementById('lastModified').textContent = `Last Updated: ${document.lastModified}`;

document.addEventListener('DOMContentLoaded', () => {
    const courseDetails = {
        1: {
            title: 'CSE 110',
            subtitle: 'Introduction to Computer Science',
            credits: '3 credits',
            certificate: 'Certificate: Computer Science',
            description: 'Introduction to the fundamental concepts of computer science. Topics include algorithms, data structures, and programming principles.',
            technology: 'Technology: Python'
        },
        2: {
            title: 'WDD 130',
            subtitle: 'Web Fundamentals',
            credits: '2 credits',
            certificate: 'Certificate: Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in website design and development. The course is hands-on with students actually participating in simple web designs and programming.',
            technology: 'Technology: HTML, CSS'
        },
        3: {
            title: 'CSE 111',
            subtitle: 'Data Structures',
            credits: '3 credits',
            certificate: 'Certificate: Computer Science',
            description: 'An in-depth look at data structures, including lists, stacks, queues, trees, and graphs, with an emphasis on implementation and efficiency.',
            technology: 'Technology: C++'
        },
        4: {
            title: 'WDD 131',
            subtitle: 'Web Development 1',
            credits: '3 credits',
            certificate: 'Certificate: Web and Computer Programming',
            description: 'This course covers the basics of web development using HTML, CSS, and JavaScript. Students will build interactive web pages and learn about web standards.',
            technology: 'Technology: HTML, CSS, JavaScript'
        },
        5: {
            title: 'CSE 210',
            subtitle: 'Advanced Mathematics',
            credits: '3 credits',
            certificate: 'Certificate: Computer Science',
            description: 'Dive into advanced mathematical concepts including calculus, linear algebra, and differential equations. This course is designed for students who wish to deepen their understanding of mathematics as it applies to computer science.',
            technology: 'Technology: MATLAB, Python'
        },
        6: {
            title: 'WDD 231',
            subtitle: 'Web Frontend Development 1',
            credits: '3 credits',
            certificate: 'Certificate: Web and Computer Programming',
            description: 'An introduction to frontend web development using modern JavaScript frameworks. Students will learn about responsive design, accessibility, and performance optimization.',
            technology: 'Technology: HTML, CSS, JavaScript, React'
        }
    };

    const modal = document.getElementById('course-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalCredits = document.getElementById('modal-credits');
    const modalCertificate = document.getElementById('modal-certificate');
    const modalDescription = document.getElementById('modal-description');
    const modalTechnology = document.getElementById('modal-technology');
    const closeButton = document.querySelector('.close-button');

    document.querySelectorAll('.courses button').forEach(button => {
        button.addEventListener('click', (event) => {
            const courseId = event.target.dataset.courseId;
            const course = courseDetails[courseId];

            if (course) {
                modalTitle.textContent = course.title;
                modalSubtitle.textContent = course.subtitle;
                modalCredits.textContent = course.credits;
                modalCertificate.textContent = course.certificate;
                modalDescription.textContent = course.description;
                modalTechnology.textContent = course.technology;
                modal.style.display = 'block';
            }
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function toggleNav() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('nav ul');
    hamburger.classList.toggle('active'); // Toggle 'active' class to transform hamburger to 'X'
    menu.classList.toggle('active'); // Toggle 'active' class to show/hide the menu
}
// Function to filter courses
function filterCourses(category) {
    var courses = document.querySelectorAll('.courses button');
    courses.forEach(function(course) {
        if (category === 'All' || course.classList.contains(category.toLowerCase())) {
            course.style.display = 'block'; // Show courses that match the category
        } else {
            course.style.display = 'none'; // Hide courses that don't match the category
        }
    });
}

// Event listeners for filter buttons
document.addEventListener('DOMContentLoaded', function() {
    var filterButtons = document.querySelectorAll('.filters button');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            filterCourses(button.textContent);
        });
    });
});
// Function to calculate total credits
function calculateTotalCredits() {
    var courses = document.querySelectorAll('.courses button');
    var totalCredits = 0;
    
    courses.forEach(function(course) {
        // Assuming each course is worth 3 credits
        totalCredits += 2;
    });
    
    // Display the total credits
    var creditsElement = document.getElementById('totalCredits');
    if (creditsElement) {
        creditsElement.textContent = `Total Credits: ${totalCredits}`;
    }
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    calculateTotalCredits();
});
// Array of course objects
var coursesArray = [
    { code: 'CSE 110', category: 'CSE', credits: 2 },
    { code: 'WDD 130', category: 'WDD', credits: 2 },
    { code: 'CSE 111', category: 'CSE', credits: 2 },
    { code: 'WDD 131', category: 'WDD', credits: 2 },
    { code: 'CSE 210', category: 'CSE', credits: 2 },
    { code: 'WDD 231', category: 'WDD', credits: 2 },
];

// Function to render courses
function renderCourses() {
    var coursesContainer = document.querySelector('.courses');
    coursesContainer.innerHTML = ''; // Clear existing courses
    
    coursesArray.forEach(function(course) {
        var courseButton = document.createElement('button');
        courseButton.textContent = course.code;
        courseButton.classList.add(course.category.toLowerCase());
        courseButton.onclick = function() {
            // Add any onclick functionality you need here
        };
        coursesContainer.appendChild(courseButton);
    });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
});
// Updated array of course objects with 'completed' property
var coursesArray = [
    { code: 'CSE 110', category: 'CSE', credits: 2, completed: true },
    { code: 'WDD 130', category: 'WDD', credits: 2, completed: true },
    { code: 'CSE 111', category: 'CSE', credits: 2, completed: true },
    { code: 'WDD 131', category: 'WDD', credits: 2, completed: true },
    { code: 'CSE 210', category: 'CSE', credits: 2, completed: true },
    { code: 'WDD 231', category: 'WDD', credits: 2, completed: false },
    // ... add more courses as needed
];

// Function to render courses
function renderCourses() {
    var coursesContainer = document.querySelector('.courses');
    coursesContainer.innerHTML = ''; // Clear existing courses
    
    coursesArray.forEach(function(course) {
        var courseButton = document.createElement('button');
        courseButton.textContent = course.code;
        courseButton.classList.add(course.category.toLowerCase());
        if (course.completed) {
            courseButton.classList.add('completed'); // Add 'completed' class for styling
        }
        courseButton.onclick = function() {
            // Add any onclick functionality you need here
        };
        coursesContainer.appendChild(courseButton);
    });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
});
// Function to update active menu item
function updateActiveMenuItem() {
    var menuItems = document.querySelectorAll('nav a');
    var currentPage = window.location.pathname; // Get current page URL path
    
    menuItems.forEach(function(item) {
        if (item.href.includes(currentPage)) {
            item.classList.add('active'); // Add 'active' class to current menu item
        } else {
            item.classList.remove('active'); // Remove 'active' class from other items
        }
    });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateActiveMenuItem();
});