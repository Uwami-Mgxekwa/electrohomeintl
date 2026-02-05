// ================================
// Navigation & Header
// ================================
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTop');

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ================================
// Active Navigation Link
// ================================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ================================
// Smooth Scroll
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Only prevent default for anchor links
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ================================
// Scroll to Top Button
// ================================
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================
// Contact Form Handling
// ================================
const contactForm = document.getElementById('contactForm');

// Initialize EmailJS (you'll need to set up your EmailJS account)
// Visit https://www.emailjs.com/ to get your keys
const EMAILJS_PUBLIC_KEY = 'VNaptzurXMluqfUZq'; // Your actual public key
const EMAILJS_SERVICE_ID = 'service_8dc78q5'; // Your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_fptvu1d'; // Your actual Contact Us template ID

// Initialize EmailJS when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
});

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Validate form
    let isValid = true;
    const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        showNotification('Please fix the errors in the form', 'error');
        return;
    }
    
    try {
        // Send via EmailJS
        if (typeof emailjs !== 'undefined') {
            await sendEmailJS(data);
        }
        
        // Option 2: Send to your backend API (if you have one)
        // await sendToBackend(data);
        
        // Show success message
        showNotification('Request sent successfully! We will contact you shortly.', 'success');
        
        // Reset form
        this.reset();
        
    } catch (error) {
        console.error('Error sending form:', error);
        showNotification('There was an error sending your request. Please try again or contact us directly.', 'error');
    } finally {
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// EmailJS integration
async function sendEmailJS(data) {
    if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not loaded');
    }
    
    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        address: data.address,
        appliance: data.appliance,
        message: data.message,
        to_email: 'electrohomeintl@gmail.com' // Your email
    };
    
    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
    
    if (response.status !== 200) {
        throw new Error('EmailJS failed');
    }
    
    return response;
}

// Backend API integration (for when you set up your backend)
async function sendToBackend(data) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Backend API failed');
    }
    
    return response.json();
}

// WhatsApp message creation (always works as fallback)
function createWhatsAppMessage(data) {
    const message = `*New Callout Request*

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Address: ${data.address}
Appliance: ${data.appliance}

Issue Description:
${data.message}

Sent from: ElectroHome International Website
Time: ${new Date().toLocaleString()}`.trim();
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp number
    const whatsappNumber = '27818981775';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab (small delay to ensure notification shows first)
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
    }, 1000);
}

// ================================
// Notification System
// ================================
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: type === 'success' ? '#0052CC' : '#CC0000',
        color: '#FFFFFF',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0, 82, 204, 0.2)',
        zIndex: '9999',
        fontWeight: '500',
        animation: 'slideIn 0.3s ease',
        maxWidth: '90%',
        width: 'auto'
    });
    
    // Add animation keyframes
    if (!document.querySelector('#notificationStyles')) {
        const style = document.createElement('style');
        style.id = 'notificationStyles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Append to body
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// ================================
// Intersection Observer for Animations
// ================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .feature-item, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ================================
// Form Validation Enhancement
// ================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        validateField(this);
    });
    
    input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
            validateField(this);
        }
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Remove previous error
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    field.classList.remove('error');
    
    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        showFieldError(field, 'This field is required');
    }
    
    // Validate email
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            showFieldError(field, 'Please enter a valid email address');
        }
    }
    
    // Validate phone
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            isValid = false;
            showFieldError(field, 'Please enter a valid phone number');
        }
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#CC0000';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    field.parentElement.appendChild(errorDiv);
}

// ================================
// Performance: Enhanced Image Loading
// ================================
document.addEventListener('DOMContentLoaded', () => {
    // Preload critical images
    const criticalImages = ['top.jpg'];
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Enhanced lazy loading with intersection observer
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        // Observe all lazy images
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.classList.add('loaded');
        });
    }
    
    // Mark eager images as loaded immediately
    document.querySelectorAll('img[loading="eager"]').forEach(img => {
        img.classList.add('loaded');
    });
});

// ================================
// Performance: Resource Hints
// ================================
window.addEventListener('load', () => {
    // Prefetch next page resources
    const prefetchLinks = [
        'shop.html',
        'shop.css',
        'shop.js'
    ];
    
    prefetchLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
    });
});

// ================================
// External Links - Open in New Tab
// ================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ================================
// Click to Call/WhatsApp/Email
// ================================
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Track analytics if needed
        console.log('Contact link clicked:', this.href);
    });
});

// ================================
// Preload Critical Resources
// ================================
window.addEventListener('load', () => {
    // Preload images in the viewport
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
});

// ================================
// Service Worker Registration (PWA)
// ================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ================================
// Console Info
// ================================
console.log('%cElectroHome International', 'color: #0052CC; font-size: 20px; font-weight: bold;');
console.log('%cWebsite developed by brelinx.com', 'color: #003D99; font-size: 12px;');