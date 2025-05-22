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

// CTA button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
    move to the left
    window.location.href = '/contact'; // Example redirect
});
document.addEventListener('DOMContentLoaded', function() {
    // Partner data - you can add/remove partners here
    const partners = [
        { name: 'Wealthsimple', logo: 'images/wealthsimple.png', url: '#' },
        { name: 'Notion', logo: 'images/logo2', url: '#' },
        { name: 'Medium', logo: 'images/Gemini_Generated_Image_rkkjwarkkjwarkkj-Photoroom.png', url: '#' },
        { name: 'Drage', logo: 'images/24489870_6937154-Photoroom-Photoroom.png', url: '#' },
        { name: 'SONOS', logo: 'images/24489870_6937154-Photoroom-Photoroom.png', url: '#' }
    ];

    const container = document.querySelector('.partners-container');

    // Create partner elements
    partners.forEach(partner => {
        const partnerElement = document.createElement('div');
        partnerElement.className = 'partner-item';
        
        const logoLink = document.createElement('a');
        logoLink.href = partner.url;
        logoLink.target = '_blank';
        logoLink.rel = 'noopener noreferrer';
        
        const logoImg = document.createElement('img');
        logoImg.src = partner.logo;
        logoImg.alt = `${partner.name} logo`;
        logoImg.className = 'partner-logo';
        logoImg.loading = 'lazy';
        
        logoLink.appendChild(logoImg);
        partnerElement.appendChild(logoLink);
        container.appendChild(partnerElement);
    });

    // Animation on scroll
    const animatePartnersOnScroll = () => {
        const partnerItems = document.querySelectorAll('.partner-item');
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, options);

        partnerItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `all 0.5s ease ${index * 0.1}s`;
            observer.observe(item);
        });
    };

    animatePartnersOnScroll();

    // Optional: Logo carousel functionality for mobile
    const setupMobileCarousel = () => {
        if (window.innerWidth <= 768) {
            // Add carousel functionality here if needed
            console.log('Mobile carousel would be initialized here');
        }
    };

    window.addEventListener('resize', setupMobileCarousel);
    setupMobileCarousel();
});