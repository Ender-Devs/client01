// ===== MAIN NAVIGATION AND FUNCTIONALITY =====

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

// State Management
let mobileMenuOpen = false;
let activeDropdown = null;
let activeMobileDropdown = null;

// ===== SERVICE NAVIGATION =====
function openService(serviceName) {
    window.location.href = `service.html?service=${encodeURIComponent(serviceName)}`;
}

// Make it globally accessible
window.openService = openService;

// ===== SEARCH FUNCTIONALITY =====
if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        performSearch();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
}

function performSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        searchInput.style.border = '2px solid #f44336';
        searchInput.placeholder = 'Please enter a service name';
        setTimeout(() => {
            searchInput.style.border = '';
            searchInput.placeholder = 'Search for services (e.g., Cleaning, Painting)';
        }, 2000);
        return;
    }

    // Service mapping for search
    const serviceMap = {
        'clean': 'Cleaning Services',
        'cleaning': 'Cleaning Services',
        'pest': 'Pest Control',
        'paint': 'Home Painting',
        'painting': 'Home Painting',
        'salon': 'Spa and Salon',
        'spa': 'Spa and Salon',
        'beauty': 'Spa and Salon'
    };

    // Find matching service
    let matchedService = null;
    for (const [key, service] of Object.entries(serviceMap)) {
        if (query.includes(key)) {
            matchedService = service;
            break;
        }
    }

    if (matchedService) {
        openService(matchedService);
    } else {
        alert(`No exact match found for "${query}". Showing all services.`);
        // Scroll to services section
        document.querySelector('.services-grid-section')?.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== MOBILE MENU =====
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuOpen = !mobileMenuOpen;
        if (mobileMenuOpen) {
            mobileNav.classList.add('active');
            menuIcon.className = 'fas fa-times';
            document.body.style.overflow = 'hidden';
        } else {
            mobileNav.classList.remove('active');
            menuIcon.className = 'fas fa-bars';
            document.body.style.overflow = '';
            closeMobileDropdowns();
        }
    });
}

// ===== DESKTOP DROPDOWN =====
document.querySelectorAll('.nav-item').forEach(item => {
    const btn = item.querySelector('.nav-btn');
    const dropdown = item.querySelector('.dropdown-menu');

    if (btn && dropdown) {
        item.addEventListener('mouseenter', () => {
            closeAllDropdowns();
            activeDropdown = dropdown;
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
        });

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
        const target = btn.getAttribute('data-target');
        const dropdown = document.getElementById(target);
        const icon = btn.querySelector('i.fa-chevron-down');

        if (dropdown) {
            if (activeMobileDropdown && activeMobileDropdown !== dropdown) {
                activeMobileDropdown.classList.remove('active');
                const prevIcon = activeMobileDropdown.parentElement.querySelector('.mobile-nav-btn i.fa-chevron-down');
                if (prevIcon) prevIcon.style.transform = '';
            }

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
    });
    activeMobileDropdown = null;
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ===== CLOSE MOBILE MENU ON OUTSIDE CLICK =====
document.addEventListener('click', (e) => {
    if (mobileMenuOpen &&
        !mobileNav?.contains(e.target) &&
        !mobileMenuBtn?.contains(e.target)) {
        mobileMenuOpen = false;
        mobileNav.classList.remove('active');
        menuIcon.className = 'fas fa-bars';
        document.body.style.overflow = '';
        closeMobileDropdowns();
    }
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Tikawala Prime - Home Services Platform Loaded');
});
