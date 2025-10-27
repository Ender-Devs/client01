// Main JavaScript file for global functionality

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function () {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Scroll to top button
document.addEventListener('DOMContentLoaded', function () {
    // Create scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i data-lucide="arrow-up" class="w-5 h-5"></i>';
    scrollTopBtn.className = 'fixed bottom-8 right-8 bg-green-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-green-700 transition opacity-0 pointer-events-none z-50';
    scrollTopBtn.id = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.pointerEvents = 'auto';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.pointerEvents = 'none';
        }
    });

    // Scroll to top when clicked
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Recreate icons for the new button
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// Phone number click tracking (for analytics)
document.addEventListener('DOMContentLoaded', function () {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

    phoneLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Phone number clicked:', this.href);
            // Add your analytics tracking code here
            // Example: gtag('event', 'phone_click', { phone_number: this.href });
        });
    });
});

// Email click tracking (for analytics)
document.addEventListener('DOMContentLoaded', function () {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('Email clicked:', this.href);
            // Add your analytics tracking code here
            // Example: gtag('event', 'email_click', { email: this.href });
        });
    });
});

// WhatsApp click tracking
document.addEventListener('DOMContentLoaded', function () {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

    whatsappLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('WhatsApp clicked');
            // Add your analytics tracking code here
        });
    });
});

// Console welcome message
console.log('%cTIKAWALA Prime Clean Solutions', 'color: #16a34a; font-size: 24px; font-weight: bold;');
console.log('%cWebsite developed with HTML, CSS (Tailwind), and JavaScript', 'color: #666; font-size: 14px;');
console.log('%cFor inquiries: info@tikawala.com', 'color: #666; font-size: 14px;');

// Prevent console errors in production
window.addEventListener('error', function (e) {
    // Log errors for debugging
    console.error('Error occurred:', e.error);
    // You can send errors to your logging service here
});

// Service worker registration (for PWA - optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        // Uncomment when you create a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// Disable right-click on images (optional - for image protection)
// Uncomment if you want to protect images
/*
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    });
});
*/

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function () {
    const newsletterForms = document.querySelectorAll('form');

    newsletterForms.forEach(form => {
        // Check if it's a newsletter form (has email input only)
        const inputs = form.querySelectorAll('input');
        const hasOnlyEmail = inputs.length === 1 && inputs[0].type === 'email';

        if (hasOnlyEmail) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const email = inputs[0].value;

                if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert('Thank you for subscribing to our newsletter!');
                    form.reset();
                } else {
                    alert('Please enter a valid email address');
                }
            });
        }
    });
});

// Loading state for external links
document.addEventListener('DOMContentLoaded', function () {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    externalLinks.forEach(link => {
        link.addEventListener('click', function () {
            console.log('External link clicked:', this.href);
        });
    });
});

// Copy to clipboard functionality (for contact info)
function copyToClipboard(text, successMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
            showToast(successMessage || 'Copied to clipboard!');
        }).catch(function (err) {
            console.error('Could not copy text:', err);
        });
    }
}

// Toast notification
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    toast.textContent = message;
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duration);
}

// Performance monitoring
window.addEventListener('load', function () {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    }
});
