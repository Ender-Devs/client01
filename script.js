// ===================================================
// TIKAWALA PRIME - MAIN SCRIPT.JS
// Complete JavaScript for Homepage Functionality
// ===================================================

// ===== SERVICE DATABASE =====
const serviceDatabase = {
    'cleaning': {
        name: 'Cleaning Services',
        icon: '🧹',
        description: 'Professional home & office cleaning',
        keywords: ['clean', 'cleaning', 'house', 'home', 'office', 'deep clean', 'sanitize', 'bathroom', 'kitchen', 'carpet', 'sofa']
    },
    'deep-clean': {
        name: 'Deep Home Cleaning',
        icon: '🧹',
        description: 'Comprehensive deep cleaning service',
        keywords: ['deep', 'thorough', 'complete', 'full house', 'intensive']
    },
    'commercial': {
        name: 'Commercial Cleaning',
        icon: '🏢',
        description: 'Professional office cleaning',
        keywords: ['commercial', 'office', 'business', 'workplace']
    },
    'pest': {
        name: 'Pest Control',
        icon: '🐛',
        description: 'Complete pest management solutions',
        keywords: ['pest', 'bug', 'insect', 'cockroach', 'termite', 'rodent', 'rat', 'mosquito', 'ant']
    },
    'bedbugs': {
        name: 'Bed Bug Control',
        icon: '🛏️',
        description: 'Specialized bed bug treatment',
        keywords: ['bed bug', 'bedbug', 'mattress']
    },
    'painting': {
        name: 'Home Painting',
        icon: '🎨',
        description: 'Interior & exterior painting services',
        keywords: ['paint', 'painting', 'color', 'wall', 'interior', 'exterior', 'waterproof']
    },
    'interior-paint': {
        name: 'Interior Painting',
        icon: '🎨',
        description: 'Professional interior painting',
        keywords: ['interior', 'inside', 'room', 'walls']
    },
    'exterior-paint': {
        name: 'Exterior Painting',
        icon: '🏠',
        description: 'Durable exterior painting',
        keywords: ['exterior', 'outside', 'facade', 'building']
    },
    'salon': {
        name: 'Spa and Salon',
        icon: '💆',
        description: 'Beauty & wellness services at home',
        keywords: ['salon', 'spa', 'beauty', 'hair', 'facial', 'massage', 'makeup', 'manicure', 'pedicure']
    },
    'women-salon': {
        name: 'Salon for Women',
        icon: '💇‍♀️',
        description: 'Complete women salon services',
        keywords: ['women', 'ladies', 'female', 'bridal']
    },
    'men-salon': {
        name: 'Salon for Men',
        icon: '💇‍♂️',
        description: 'Professional men grooming',
        keywords: ['men', 'male', 'gents', 'barber', 'beard']
    }
};

// ===== DOM ELEMENTS =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchSuggestions = document.getElementById('searchSuggestions');
const suggestionsList = document.getElementById('suggestionsList');
const clearSearch = document.getElementById('clearSearch');

// ===== STATE MANAGEMENT =====
let mobileMenuOpen = false;
let activeDropdown = null;
let activeMobileDropdown = null;

// ===== SERVICE NAVIGATION FUNCTION =====
function openService(serviceName) {
    // Navigate to service page with service name as parameter
    window.location.href = `service.html?service=${encodeURIComponent(serviceName)}`;
}

// Make function globally accessible
window.openService = openService;

// ===== QUICK SEARCH FUNCTION =====
function quickSearch(serviceType) {
    const service = serviceDatabase[serviceType];
    if (service) {
        openService(service.name);
    }
}

// Make function globally accessible
window.quickSearch = quickSearch;

// ===== SEARCH INPUT HANDLING =====
if (searchInput && clearSearch) {
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (value) {
            clearSearch.style.display = 'flex';
            showSuggestions(value);
        } else {
            clearSearch.style.display = 'none';
            hideSuggestions();
        }
    });

    // Clear search button
    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        clearSearch.style.display = 'none';
        hideSuggestions();
        searchInput.focus();
    });
}

// ===== SEARCH BUTTON CLICK =====
if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        performSearch();
    });

    // Enter key to search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
}

// ===== SEARCH SUGGESTIONS =====
function showSuggestions(query) {
    if (!query || query.length < 2) {
        hideSuggestions();
        return;
    }

    const matches = findMatches(query.toLowerCase());

    if (matches.length === 0) {
        hideSuggestions();
        return;
    }

    // Clear previous suggestions
    suggestionsList.innerHTML = '';

    // Add matched services
    matches.forEach(match => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <div class="suggestion-icon">${match.icon}</div>
            <div class="suggestion-content">
                <div class="suggestion-title">${highlightMatch(match.name, query)}</div>
                <div class="suggestion-description">${match.description}</div>
            </div>
        `;

        // Click handler
        item.addEventListener('click', () => {
            searchInput.value = match.name;
            hideSuggestions();
            openService(match.name);
        });

        suggestionsList.appendChild(item);
    });

    searchSuggestions.style.display = 'block';
}

function hideSuggestions() {
    if (searchSuggestions) {
        searchSuggestions.style.display = 'none';
    }
}

function findMatches(query) {
    const matches = [];

    for (const [key, service] of Object.entries(serviceDatabase)) {
        const nameMatch = service.name.toLowerCase().includes(query);
        const keywordMatch = service.keywords.some(keyword =>
            keyword.toLowerCase().includes(query) || query.includes(keyword.toLowerCase())
        );

        if (nameMatch || keywordMatch) {
            matches.push(service);
        }
    }

    // Remove duplicates and limit to 5 results
    return matches.slice(0, 5);
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span style="font-weight: 700; color: var(--secondary);">$1</span>');
}

// ===== PERFORM SEARCH =====
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        // Show error animation
        searchInput.style.border = '2px solid #f44336';
        searchInput.placeholder = 'Please enter a service name';

        setTimeout(() => {
            searchInput.style.border = '';
            searchInput.placeholder = 'Search services (Cleaning, Pest Control, Painting...)';
        }, 2000);
        return;
    }

    // Show loading state
    const originalHTML = searchBtn.innerHTML;
    searchBtn.disabled = true;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Searching...</span>';

    // Simulate search (in real app, this would be an API call)
    setTimeout(() => {
        const matches = findMatches(query);
        searchBtn.disabled = false;
        searchBtn.innerHTML = originalHTML;

        if (matches.length > 0) {
            // Navigate to first match
            openService(matches[0].name);
        } else {
            // No results found
            alert(`We couldn't find "${query}" in Bokaro.\n\nAvailable services:\n• Cleaning\n• Pest Control\n• Painting\n• Salon & Spa`);
        }
    }, 500);
}

// ===== MOBILE MENU TOGGLE =====
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOpen = !mobileMenuOpen;

        if (mobileMenuOpen) {
            mobileNav.classList.add('active');
            menuIcon.className = 'fas fa-times';
            document.body.style.overflow = 'hidden'; // Prevent scroll
        } else {
            mobileNav.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
            document.body.style.overflow = '';
            closeMobileDropdowns();
        }
    });
}

// ===== DESKTOP DROPDOWN NAVIGATION =====
document.querySelectorAll('.nav-item.dropdown').forEach(item => {
    const dropdown = item.querySelector('.dropdown-menu');

    if (dropdown) {
        // Mouse enter
        item.addEventListener('mouseenter', () => {
            closeAllDropdowns();
            activeDropdown = dropdown;
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
        });

        // Mouse leave
        item.addEventListener('mouseleave', () => {
            activeDropdown = null;
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(-10px)';
        });
    }
});

// ===== MOBILE NAVIGATION DROPDOWNS =====
document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const dropdown = document.getElementById(targetId);
        const icon = btn.querySelector('i.fa-chevron-down');

        if (dropdown) {
            // Close other dropdowns
            if (activeMobileDropdown && activeMobileDropdown !== dropdown) {
                activeMobileDropdown.classList.remove('active');
                const prevIcon = activeMobileDropdown.parentElement.querySelector('.mobile-nav-btn i.fa-chevron-down');
                if (prevIcon) prevIcon.style.transform = '';
            }

            // Toggle current dropdown
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                if (icon) icon.style.transform = '';
                activeMobileDropdown = null;
            } else {
                dropdown.classList.add('active');
                if (icon) icon.style.transform = 'rotate(180deg)';
                activeMobileDropdown = dropdown;
            }
        }
    });
});

// ===== FOOTER ACCORDION (Mobile) =====
document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const content = document.getElementById(targetId);
        const icon = btn.querySelector('i.fa-chevron-down');

        if (content) {
            const isActive = content.classList.contains('active');

            // Close all accordions
            document.querySelectorAll('.accordion-content.active').forEach(activeContent => {
                activeContent.classList.remove('active');
                const activeBtn = activeContent.parentElement.querySelector('.accordion-btn');
                const activeIcon = activeBtn?.querySelector('i.fa-chevron-down');
                if (activeIcon) activeIcon.style.transform = '';
            });

            // Open clicked accordion if it wasn't open
            if (!isActive) {
                content.classList.add('active');
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        }
    });
});

// ===== UTILITY FUNCTIONS =====
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
    });
}

function closeMobileDropdowns() {
    document.querySelectorAll('.mobile-dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
        const btn = dropdown.parentElement.querySelector('.mobile-nav-btn');
        const icon = btn?.querySelector('i.fa-chevron-down');
        if (icon) icon.style.transform = '';
    });
    activeMobileDropdown = null;
}

// ===== CLOSE ELEMENTS ON OUTSIDE CLICK =====
document.addEventListener('click', (e) => {
    // Close mobile menu
    if (mobileMenuOpen &&
        !mobileNav?.contains(e.target) &&
        !mobileMenuBtn?.contains(e.target)) {
        mobileMenuOpen = false;
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
        document.body.style.overflow = '';
        closeMobileDropdowns();
    }

    // Close search suggestions
    if (!searchSuggestions?.contains(e.target) &&
        !searchInput?.contains(e.target)) {
        hideSuggestions();
    }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== HANDLE WINDOW RESIZE =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on desktop view
        if (window.innerWidth >= 1024 && mobileMenuOpen) {
            mobileMenuOpen = false;
            mobileNav?.classList.remove('active');
            if (menuIcon) menuIcon.className = 'fas fa-bars';
            document.body.style.overflow = '';
            closeMobileDropdowns();
        }
    }, 250);
});

// ===== KEYBOARD ACCESSIBILITY =====
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu and suggestions
    if (e.key === 'Escape') {
        if (mobileMenuOpen) {
            mobileMenuOpen = false;
            mobileNav?.classList.remove('active');
            if (menuIcon) menuIcon.className = 'fas fa-bars';
            document.body.style.overflow = '';
            closeMobileDropdowns();
        }
        hideSuggestions();
    }
});

// ===== SERVICE ITEM CLICKS =====
document.querySelectorAll('.service-item').forEach(item => {
    // Add keyboard support
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');

    item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            item.click();
        }
    });
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Tikawala Prime - Bokaro Home Services Platform Loaded');
    console.log('📍 Location: Bokaro, Jharkhand');
    console.log('📞 WhatsApp: 8789772081');

    // Add any initialization code here
    // For example: Load user preferences, check location, etc.
});

// ===== ANALYTICS TRACKING (Optional) =====
function trackEvent(eventName, data) {
    console.log(`📊 Event: ${eventName}`, data);
    // Integrate with Google Analytics, Facebook Pixel, etc.
    // Example: gtag('event', eventName, data);
}

// Track page view
trackEvent('page_view', {
    page: 'homepage',
    location: 'Bokaro',
    timestamp: new Date().toISOString()
});

// ===== EXPORT FOR EXTERNAL USE =====
window.TikawalaServices = {
    openService,
    quickSearch,
    trackEvent,
    serviceDatabase
};

// ===== END OF SCRIPT.JS =====
