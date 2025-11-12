// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');

// State
let mobileMenuOpen = false;
let activeDropdown = null;
let activeMobileDropdown = null;

// Mobile Menu Toggle
mobileMenuBtn?.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileNav.classList.add('active');
        menuIcon.className = 'fas fa-times';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        // Close any open mobile dropdowns
        closeMobileDropdowns();
    }
});

// Keyboard navigation for mobile menu
mobileMenuBtn?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuBtn.click();
    }
});

// Desktop Dropdown Functionality
document.querySelectorAll('.nav-item').forEach(item => {
    const btn = item.querySelector('.nav-btn');
    const dropdown = item.querySelector('.dropdown-menu');
    
    if (btn && dropdown) {
        // Mouse events
        item.addEventListener('mouseenter', () => {
            activeDropdown = item;
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
            btn.setAttribute('aria-expanded', 'true');
        });
        
        item.addEventListener('mouseleave', () => {
            activeDropdown = null;
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(-10px)';
            btn.setAttribute('aria-expanded', 'false');
        });

        // Keyboard events
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                if (isExpanded) {
                    dropdown.style.opacity = '0';
                    dropdown.style.visibility = 'hidden';
                    dropdown.style.transform = 'translateY(-10px)';
                    btn.setAttribute('aria-expanded', 'false');
                } else {
                    dropdown.style.opacity = '1';
                    dropdown.style.visibility = 'visible';
                    dropdown.style.transform = 'translateY(0)';
                    btn.setAttribute('aria-expanded', 'true');
                }
            }
            if (e.key === 'Escape') {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(-10px)';
                btn.setAttribute('aria-expanded', 'false');
                btn.focus();
            }
        });
    }
});

// Mobile Navigation Dropdowns
document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const dropdown = document.getElementById(target);
        const icon = btn.querySelector('i.fa-chevron-down');
        
        if (dropdown) {
            // Close other mobile dropdowns
            if (activeMobileDropdown && activeMobileDropdown !== dropdown) {
                activeMobileDropdown.classList.remove('active');
                const prevBtn = activeMobileDropdown.parentElement.querySelector('.mobile-nav-btn');
                const prevIcon = prevBtn.querySelector('i.fa-chevron-down');
                if (prevIcon) prevIcon.classList.remove('rotate', 'active');
                prevBtn.setAttribute('aria-expanded', 'false');
            }
            
            // Toggle current dropdown
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                icon?.classList.remove('rotate', 'active');
                btn.setAttribute('aria-expanded', 'false');
                activeMobileDropdown = null;
            } else {
                dropdown.classList.add('active');
                icon?.classList.add('rotate', 'active');
                btn.setAttribute('aria-expanded', 'true');
                activeMobileDropdown = dropdown;
            }
        }
    });

    // Keyboard navigation for mobile nav buttons
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});

// Footer Accordion Functionality
document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const content = document.getElementById(target);
        const icon = btn.querySelector('i.fa-chevron-down');
        
        if (content) {
            // Close other accordion sections
            document.querySelectorAll('.accordion-content.active').forEach(activeContent => {
                if (activeContent !== content) {
                    activeContent.classList.remove('active');
                    const activeBtn = activeContent.parentElement.querySelector('.accordion-btn');
                    const activeIcon = activeBtn.querySelector('i.fa-chevron-down');
                    if (activeIcon) activeIcon.classList.remove('rotate', 'active');
                    activeBtn.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Toggle current section
            if (content.classList.contains('active')) {
                content.classList.remove('active');
                icon?.classList.remove('rotate', 'active');
                btn.setAttribute('aria-expanded', 'false');
            } else {
                content.classList.add('active');
                icon?.classList.add('rotate', 'active');
                btn.setAttribute('aria-expanded', 'true');
            }
        }
    });

    // Keyboard navigation for accordion
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});

// Helper function to close mobile dropdowns
function closeMobileDropdowns() {
    document.querySelectorAll('.mobile-dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
        const btn = dropdown.parentElement.querySelector('.mobile-nav-btn');
        const icon = btn.querySelector('i.fa-chevron-down');
        if (icon) icon.classList.remove('rotate', 'active');
        btn.setAttribute('aria-expanded', 'false');
    });
    activeMobileDropdown = null;
}

// Search functionality with improved UX
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input input');
const citySelector = document.querySelector('.city-selector select');

searchBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    performSearch();
});

const performSearch = () => {
    const query = searchInput?.value.trim() || '';
    const city = citySelector?.value || 'Bangalore';
    
    if (query) {
        // Add loading state
        const originalText = searchBtn.textContent;
        addLoadingState(searchBtn, originalText);
        
        // Track search event
        trackEvent('search_performed', { query, city });
        
        // Simulate search (replace with actual implementation)
        setTimeout(() => {
            console.log(`Searching for "${query}" in ${city}`);
            alert(`Searching for "${query}" in ${city}\n\nIn a real application, this would show search results.`);
        }, 1000);
    } else {
        // Show validation error
        searchInput.style.borderColor = 'red';
        searchInput.placeholder = 'Please enter a service to search for';
        searchInput.focus();
        
        setTimeout(() => {
            searchInput.style.borderColor = '';
            searchInput.placeholder = 'Search for services';
        }, 3000);
    }
};

// Handle Enter key in search input
searchInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
    }
});

// Clear search input validation on input
searchInput?.addEventListener('input', () => {
    if (searchInput.style.borderColor === 'red') {
        searchInput.style.borderColor = '';
        searchInput.placeholder = 'Search for services';
    }
});

// Service item clicks with visual feedback
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        const serviceName = item.querySelector('p')?.textContent || '';
        
        // Add click feedback
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = '';
        }, 150);
        
        console.log(`Clicked on service: ${serviceName}`);
        // Here you would typically navigate to the service page
        trackEvent('service_clicked', { service: serviceName });
        alert(`You clicked on: ${serviceName}`);
    });

    // Add touch feedback
    item.addEventListener('touchstart', () => {
        item.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
    });

    item.addEventListener('touchend', () => {
        setTimeout(() => {
            item.style.backgroundColor = '';
        }, 200);
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenuOpen && !mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenuOpen = false;
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
        closeMobileDropdowns();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        // Close mobile menu on desktop
        mobileMenuOpen = false;
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
        closeMobileDropdowns();
    }
});

// Animate elements on scroll (Intersection Observer)
const animateOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('service-card') || 
                    entry.target.classList.contains('testimonial-card') || 
                    entry.target.classList.contains('why-item')) {
                    const siblings = entry.target.parentElement.children;
                    const index = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe sections for animation
    document.querySelectorAll('.service-card, .testimonial-card, .why-item, .stat-item, .service-item').forEach(el => {
        observer.observe(el);
    });

    // Counter animation for stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.stat-number');
                if (numberElement && !numberElement.classList.contains('counted')) {
                    numberElement.classList.add('counted');
                    animateNumber(numberElement);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(stat => {
        statsObserver.observe(stat);
    });
};

// Animate numbers in stats
const animateNumber = (element) => {
    const targetText = element.textContent;
    const targetNumber = parseInt(targetText.replace(/[^0-9]/g, ''));
    const suffix = targetText.replace(/[0-9,]/g, '');
    let currentNumber = 0;
    const increment = targetNumber / 50;
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentNumber).toLocaleString() + suffix;
    }, 40);
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Form validation for contact forms (if any)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (phone) => {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
};

// Add loading states for buttons
const addLoadingState = (button, originalText) => {
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    
    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalText;
    }, 2000);
};

// Handle service card clicks
document.querySelectorAll('.service-card-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceName = link.parentElement.querySelector('h3')?.textContent || '';
        console.log(`Learn more about: ${serviceName}`);
        alert(`Learn more about: ${serviceName}`);
    });
});

// Handle phone number clicks
document.querySelectorAll('.phone-container, .contact-item').forEach(item => {
    const phoneElement = item.querySelector('span:last-child');
    if (phoneElement && phoneElement.textContent.includes('11111111111')) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            window.location.href = 'tel:+911111111111';
        });
    }
});

// Handle email clicks
document.querySelectorAll('.email-link, .contact-item').forEach(item => {
    if (item.textContent.includes('@')) {
        item.style.cursor = 'pointer';
        if (!item.href) {
            item.addEventListener('click', () => {
                const email = item.textContent.includes('support@NAME.com') ? 
                    'support@NAME.com' : 'support@techsquadteam.com';
                window.location.href = `mailto:${email}`;
            });
        }
    }
});

// Track user interactions for analytics (placeholder)
const trackEvent = (eventName, data) => {
    console.log(`Analytics Event: ${eventName}`, data);
    // Here you would typically send to your analytics service
};

// Track clicks on important elements
document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-track]');
    if (target) {
        const eventName = target.getAttribute('data-track');
        trackEvent(eventName, {
            element: target.tagName,
            text: target.textContent?.slice(0, 50) || '',
            timestamp: new Date().toISOString()
        });
    }
});

// Performance monitoring (basic)
window.addEventListener('load', () => {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log(`Page loaded in ${loadTime}ms`);
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // Here you would typically send error reports to your monitoring service
});

// Console welcome message
console.log('%c🏠 Welcome to Home Service Platform!', 
    'color: #ff6b35; font-size: 16px; font-weight: bold;');
console.log('Built with HTML, CSS, and JavaScript');

// Export functions for potential use in other scripts
window.HomeService = {
    trackEvent,
    validateEmail,
    validatePhone,
    addLoadingState
};