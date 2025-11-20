// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gillian\'s Digital History Site loaded successfully!');
    
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Display success message
            const formMessage = document.getElementById('formMessage');
            formMessage.className = 'form-message success';
            formMessage.textContent = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`;
            
            // Clear the form
            contactForm.reset();
            
            // Log submission to console
            console.log('Form submitted:', { name, email, subject, message });
            
            // Hide message after 5 seconds
            setTimeout(function() {
                formMessage.classList.remove('success');
            }, 5000);
        });
    }
    
    // Add active class highlighting to current page
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
    
    // Add animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in animation to content sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
