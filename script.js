// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
window.addEventListener('load', highlightActiveNav);

// CTA button click handler
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.type !== 'submit') { // Exclude form submit buttons
            alert('Ready to start your green journey? Contact us for a consultation!');
        }
    });
});

// Scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑ Top';
scrollTopBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced image zoom on hover
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transition = 'transform 0.5s ease-in-out';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transition = 'transform 0.3s ease';
    });
});

// Form handling with validation
document.querySelector('#contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = this.querySelector('.form-button');
    button.textContent = 'Sending...';
    button.disabled = true;

    setTimeout(() => {
        alert('Thank you for your inquiry! Our nursery team will get back to you soon.');
        this.reset();
        button.textContent = 'Send Inquiry';
        button.disabled = false;
    }, 1500);
});

// Real-time form validation
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.style.borderColor = '#4caf50';
        } else {
            this.style.borderColor = '#ff4444';
        }
    });
});

// Fade-in animation for sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});