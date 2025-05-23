// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight Active Section (Optional Enhancement)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
// Animate steps on scroll
const steps = document.querySelectorAll('.step');

const stepObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }, index * 200); // Stagger animation
    }
  });
}, { threshold: 0.5 });

steps.forEach(step => {
  step.style.opacity = 0;
  step.style.transform = 'translateY(30px)';
  step.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  stepObserver.observe(step);
});

// Handle CTA button click
document.querySelector('.process-cta').addEventListener('click', (e) => {
  e.preventDefault();
  const target = document.querySelector(e.target.getAttribute('href'));
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Optional: Add hover effect to process image
document.querySelector('.process-image img').addEventListener('mouseover', () => {
  document.querySelector('.process-image img').style.transform = 'scale(1.02)';
});

document.querySelector('.process-image img').addEventListener('mouseout', () => {
  document.querySelector('.process-image img').style.transform = 'scale(1)';
});
// Add to your existing script.js
// Service card animation
const serviceCards = document.querySelectorAll('.service-card');

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

serviceCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    cardObserver.observe(card);
});

// Pause animation on hover
const track = document.querySelector('.testimonials-track');

track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
});
// scripts/testimonials.js
// Add smooth hover effect for cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 8px 20px rgba(58, 106, 160, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(58, 106, 160, 0.1)';
    });
});

document.querySelectorAll('.partner-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});
// JavaScript for button functionality (if needed)
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // If using button elements instead of anchor tags
        // window.open(button.dataset.link, '_blank');
    });
});


document.querySelector('.community-cta').addEventListener('click', function() {
    // Add your click handler logic here
    window.location.href = '#inventory'; // Example action
});