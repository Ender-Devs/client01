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
        keywords: ['clean', 'cleaning', 'house', 'home', 'office', 'deep clean', 'sanitize']
    },
    'deep-clean': {
        name: 'Deep Home Cleaning',
        icon: '🏡',
        description: 'Comprehensive cleaning for your entire home, ensuring every corner is spotless and sanitized.',
        keywords: ['deep', 'home', 'thorough', 'complete', 'full house', 'intensive']
    },
    'commercial': {
        name: 'Commercial Cleaning',
        icon: '🏢',
        description: 'Professional cleaning services tailored for commercial spaces, maintaining a pristine and healthy work environment.',
        keywords: ['commercial', 'office', 'business', 'workplace', 'retail']
    },
    'empty-home': {
        name: 'Empty Home Cleaning',
        icon: '🏠',
        description: 'Thorough cleaning for empty homes, perfect for moving in or out, leaving the space fresh and ready.',
        keywords: ['empty', 'move', 'moving', 'vacant']
    },
    'interior-clean': {
        name: 'Interior Home Cleaning',
        icon: '✨',
        description: 'Detailed interior cleaning services, focusing on all surfaces, floors, and fixtures within your home.',
        keywords: ['interior', 'inside', 'home', 'surfaces']
    },
    'bathroom': {
        name: 'Bathroom Cleaning',
        icon: '�',
        description: 'Experience pristine bathroom hygiene with our specialized cleaning techniques. We tackle tough stains, sanitize surfaces, and leave your bathroom fresh and gleaming.',
        keywords: ['bathroom', 'washroom', 'toilet', 'shower', 'hygiene']
    },
    'kitchen': {
        name: 'Kitchen Cleaning',
        icon: '�',
        description: 'Transform your kitchen into a spotless culinary haven. Our comprehensive deep cleaning service covers every surface, appliance, and corner to ensure a hygienic and sparkling kitchen environment.',
        keywords: ['kitchen', 'appliance', 'stove', 'utensil', 'cooking']
    },
    'sofa': {
        name: 'Sofa Cleaning',
        icon: '🛋️',
        description: 'Revitalize your sofas with our professional cleaning, removing dirt, stains, and odors for a fresh look and feel.',
        keywords: ['sofa', 'couch', 'furniture', 'upholstery']
    },
    'carpet': {
        name: 'Carpet Cleaning',
        icon: '💠',
        description: 'Deep cleaning for carpets, removing embedded dirt and allergens to restore their original vibrancy and hygiene.',
        keywords: ['carpet', 'rug', 'floor', 'mat']
    },
    'chair': {
        name: 'Chair Cleaning',
        icon: '🪑',
        description: 'Expert cleaning for various types of chairs, ensuring they are spotless and comfortable.',
        keywords: ['chair', 'furniture', 'seating']
    },
    'mattress': {
        name: 'Mattress Cleaning',
        icon: '🛏️',
        description: 'Sanitize and refresh your mattresses, eliminating dust mites and allergens for a healthier sleep environment.',
        keywords: ['mattress', 'bed', 'sleep', 'hygiene']
    },
    'balcony': {
        name: 'Balcony Cleaning',
        icon: '�',
        description: 'Thorough cleaning of your balcony area, including railings, floors, and windows, to make it sparkling clean.',
        keywords: ['balcony', 'terrace', 'outdoor', 'patio']
    },
    'windows': {
        name: 'Windows And Door Cleaning',
        icon: '🪟',
        description: 'Professional cleaning for all your windows and doors, ensuring streak-free glass and sparkling frames.',
        keywords: ['window', 'door', 'glass', 'frame']
    },
    'refrigerator': {
        name: 'Refrigerator Cleaning',
        icon: '🗄️',
        description: 'Deep cleaning and sanitization of your refrigerator, inside and out, removing odors and food residues.',
        keywords: ['refrigerator', 'fridge', 'kitchen', 'appliance']
    },
    'water-tank': {
        name: 'Water Tank Cleaning',
        icon: '🌊',
        description: 'Specialized cleaning for water tanks, ensuring clean and safe water supply for your household or business.',
        keywords: ['water tank', 'tank', 'water', 'supply']
    },
    'bedroom': {
        name: 'Bedroom Cleaning',
        icon: '�️',
        description: 'Comprehensive cleaning for bedrooms, including dusting, vacuuming, and tidying, for a serene sleeping space.',
        keywords: ['bedroom', 'room', 'bed', 'sleep']
    },
    'hotel': {
        name: 'Hotel Interior Cleaning',
        icon: '🏨',
        description: 'High-standard interior cleaning services for hotels, ensuring guest satisfaction and a pristine environment.',
        keywords: ['hotel', 'resort', 'hospitality', 'guest']
    },
    'microwave': {
        name: 'Microwave Cleaning',
        icon: '📟',
        description: 'Thorough cleaning of your microwave oven, removing food splatters and odors for hygienic cooking.',
        keywords: ['microwave', 'oven', 'kitchen', 'appliance']
    },
    'cabinet': {
        name: 'Cabinet Cleaning',
        icon: '🚪',
        description: 'Detailed cleaning of kitchen and other cabinets, inside and out, for an organized and clean storage space.',
        keywords: ['cabinet', 'storage', 'kitchen', 'organization']
    },
    'party': {
        name: 'Party Cleaning',
        icon: '🎉',
        description: 'Post-party cleanup services to take care of all the mess, leaving your space neat and tidy.',
        keywords: ['party', 'event', 'cleanup', 'after']
    },
    'office': {
        name: 'Office Cleaning',
        icon: '🏢',
        description: 'Reliable and efficient office cleaning services to maintain a clean, healthy, and productive workspace.',
        keywords: ['office', 'workspace', 'work', 'professional']
    },
    'villa': {
        name: 'Villa Cleaning',
        icon: '🏠',
        description: 'Exclusive cleaning services for villas, ensuring every part of your spacious home is impeccably clean.',
        keywords: ['villa', 'mansion', 'large home', 'luxury']
    },
    'landscape': {
        name: 'Landscape & Turf',
        icon: '🌿',
        description: 'Lawn care, trimming, and turf upkeep for beautiful outdoor spaces.',
        keywords: ['landscape', 'lawn', 'garden', 'outdoor', 'turf', 'green']
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
