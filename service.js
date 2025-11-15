// ===================================================
// TIKAWALA PRIME - SERVICE.JS
// Complete JavaScript for Service Detail Pages
// ===================================================

// ===== SERVICE DATA WITH COMPLETE INFORMATION =====
const serviceData = {
    'Cleaning Services': {
        icon: '🧹',
        description: 'Our professional cleaning services ensure your space is spotless and hygienic. We use eco-friendly products and modern equipment to deliver exceptional results. Whether it\'s your home or office, our trained professionals provide thorough cleaning that exceeds expectations.',
        features: [
            { icon: '✓', title: 'Deep Cleaning', desc: 'Complete cleaning of all rooms and spaces' },
            { icon: '✓', title: 'Sanitization', desc: 'Kitchen and bathroom deep sanitization' },
            { icon: '✓', title: 'Floor Care', desc: 'Mopping and polishing services' },
            { icon: '✓', title: 'Window Cleaning', desc: 'Glass and window cleaning included' },
            { icon: '✓', title: 'Furniture Care', desc: 'Dusting and furniture maintenance' },
            { icon: '✓', title: 'Eco-Friendly', desc: 'Safe cleaning products used' },
            { icon: '✓', title: 'Trained Staff', desc: 'Verified and experienced professionals' },
            { icon: '✓', title: 'Guaranteed', desc: 'Satisfaction guaranteed' }
        ]
    },
    'Deep Home Cleaning': {
        icon: '🧹',
        description: 'Comprehensive deep cleaning service that covers every corner of your home. Perfect for seasonal cleaning or move-in/move-out situations. Our team ensures thorough cleaning of hard-to-reach areas, appliances, and fixtures.',
        features: [
            { icon: '✓', title: 'Complete Sanitization', desc: 'Full home sanitization service' },
            { icon: '✓', title: 'Appliance Cleaning', desc: 'Kitchen appliances deep cleaned' },
            { icon: '✓', title: 'Bathroom Service', desc: 'Complete bathroom deep clean' },
            { icon: '✓', title: 'Balcony Cleaning', desc: 'Balcony and window areas' },
            { icon: '✓', title: 'Wall & Ceiling', desc: 'Dusting of walls and ceilings' },
            { icon: '✓', title: 'Floor Scrubbing', desc: 'Professional floor treatment' },
            { icon: '✓', title: '4-6 Hours', desc: 'Comprehensive service duration' },
            { icon: '✓', title: 'Pro Equipment', desc: 'Professional tools used' }
        ]
    },
    'Commercial Cleaning': {
        icon: '🏢',
        description: 'Professional cleaning solutions for offices, shops, and commercial spaces. We understand business requirements and provide flexible scheduling to minimize disruption to your operations.',
        features: [
            { icon: '✓', title: 'Office Cleaning', desc: 'Desk and furniture cleaning' },
            { icon: '✓', title: 'Floor Maintenance', desc: 'Regular floor care service' },
            { icon: '✓', title: 'Restroom Service', desc: 'Complete restroom sanitization' },
            { icon: '✓', title: 'Reception Area', desc: 'Front desk area maintenance' },
            { icon: '✓', title: 'Flexible Schedule', desc: 'Work according to your hours' },
            { icon: '✓', title: 'Packages', desc: 'Daily/weekly plans available' },
            { icon: '✓', title: 'Uniformed Staff', desc: 'Professional appearance' },
            { icon: '✓', title: 'Quality Checks', desc: 'Regular quality assurance' }
        ]
    },
    'Bathroom Cleaning': {
        icon: '🚿',
        description: 'Specialized bathroom cleaning and sanitization service. We deep clean tiles, fixtures, drains, and ensure complete hygiene.',
        features: [
            { icon: '✓', title: 'Tile Cleaning', desc: 'Deep tile and grout cleaning' },
            { icon: '✓', title: 'Fixture Polish', desc: 'Taps and fixtures polishing' },
            { icon: '✓', title: 'Drain Cleaning', desc: 'Drain and pipe cleaning' },
            { icon: '✓', title: 'Mirror Clean', desc: 'Spotless mirror cleaning' },
            { icon: '✓', title: 'Sanitization', desc: 'Complete sanitization' },
            { icon: '✓', title: 'Anti-Bacterial', desc: 'Anti-bacterial treatment' },
            { icon: '✓', title: 'Odor Removal', desc: 'Fresh fragrance treatment' },
            { icon: '✓', title: 'Quick Service', desc: '1-2 hour completion' }
        ]
    },
    'Kitchen Cleaning': {
        icon: '🍳',
        description: 'Professional kitchen deep cleaning including appliances, cabinets, and surfaces. We ensure your kitchen is hygienic and sparkling clean.',
        features: [
            { icon: '✓', title: 'Appliance Clean', desc: 'Stove, oven, microwave cleaning' },
            { icon: '✓', title: 'Cabinet Cleaning', desc: 'Inside and outside cabinets' },
            { icon: '✓', title: 'Counter Tops', desc: 'All surfaces sanitized' },
            { icon: '✓', title: 'Sink & Drain', desc: 'Deep sink and drain cleaning' },
            { icon: '✓', title: 'Tile & Grout', desc: 'Kitchen tile cleaning' },
            { icon: '✓', title: 'Chimney Clean', desc: 'Chimney degreasing' },
            { icon: '✓', title: 'Fridge Clean', desc: 'Refrigerator cleaning option' },
            { icon: '✓', title: 'Pest-Free', desc: 'Pest prevention tips' }
        ]
    },
    'Carpet Cleaning': {
        icon: '🧺',
        description: 'Professional carpet and rug cleaning using advanced equipment. We remove stains, dirt, and allergens effectively.',
        features: [
            { icon: '✓', title: 'Deep Vacuum', desc: 'Industrial vacuum cleaning' },
            { icon: '✓', title: 'Stain Removal', desc: 'Tough stain treatment' },
            { icon: '✓', title: 'Steam Clean', desc: 'Hot water extraction' },
            { icon: '✓', title: 'Odor Remove', desc: 'Deodorization treatment' },
            { icon: '✓', title: 'Fast Drying', desc: 'Quick drying process' },
            { icon: '✓', title: 'Fiber Safe', desc: 'Safe for all carpet types' },
            { icon: '✓', title: 'Eco Products', desc: 'Eco-friendly solutions' },
            { icon: '✓', title: 'Allergen Free', desc: 'Removes allergens' }
        ]
    },
    'Pest Control': {
        icon: '🐛',
        description: 'Complete pest management solutions using safe and effective treatments. Our certified professionals identify pest sources and provide long-lasting protection for your property. We handle all types of pests including cockroaches, termites, rodents, and more.',
        features: [
            { icon: '✓', title: 'Inspection', desc: 'Comprehensive pest inspection' },
            { icon: '✓', title: 'Cockroach Control', desc: 'Effective cockroach treatment' },
            { icon: '✓', title: 'Termite Prevention', desc: 'Long-lasting termite protection' },
            { icon: '✓', title: 'Rodent Control', desc: 'Complete rodent elimination' },
            { icon: '✓', title: 'Mosquito Fogging', desc: 'Mosquito control service' },
            { icon: '✓', title: 'Odorless', desc: 'Safe, odorless chemicals used' },
            { icon: '✓', title: '3-Month Warranty', desc: 'Service guarantee included' },
            { icon: '✓', title: 'Follow-up', desc: 'Free follow-up visits' }
        ]
    },
    'General Pest Control': {
        icon: '🐛',
        description: 'Effective treatment for common household pests. Our general pest control service targets cockroaches, ants, spiders, and other crawling insects to keep your home pest-free.',
        features: [
            { icon: '✓', title: 'All Pests', desc: 'Treatment for common pests' },
            { icon: '✓', title: 'Safe', desc: 'Safe for children and pets' },
            { icon: '✓', title: 'Gel & Spray', desc: 'Multiple application methods' },
            { icon: '✓', title: 'Kitchen Focus', desc: 'Special attention to kitchen' },
            { icon: '✓', title: 'Warranty', desc: 'Service warranty coverage' },
            { icon: '✓', title: 'Prevention Tips', desc: 'Expert advice provided' },
            { icon: '✓', title: 'Quick Service', desc: '1-2 hour completion' },
            { icon: '✓', title: 'Certified', desc: 'Certified technicians' }
        ]
    },
    'Bed Bug Control': {
        icon: '🛏️',
        description: 'Specialized bed bug elimination service using advanced treatment methods. We ensure complete eradication of bed bugs from mattresses, furniture, and all hiding spots.',
        features: [
            { icon: '✓', title: 'Inspection', desc: 'Thorough bed bug inspection' },
            { icon: '✓', title: 'Heat Treatment', desc: 'Advanced heat treatment option' },
            { icon: '✓', title: 'Chemical Treatment', desc: 'Effective chemical application' },
            { icon: '✓', title: 'Mattress Care', desc: 'Complete mattress treatment' },
            { icon: '✓', title: 'Multiple Visits', desc: 'Guarantee with follow-ups' },
            { icon: '✓', title: 'Guidance', desc: 'Post-treatment instructions' },
            { icon: '✓', title: 'Elimination', desc: 'Complete removal assured' },
            { icon: '✓', title: 'Follow-up', desc: 'Inspection after treatment' }
        ]
    },
    'Cockroach Control': {
        icon: '🪳',
        description: 'Specialized cockroach control treatment that targets all cockroach species. Long-lasting protection for your home.',
        features: [
            { icon: '✓', title: 'Gel Treatment', desc: 'Advanced gel application' },
            { icon: '✓', title: 'Spray Treatment', desc: 'Cracks and crevices spray' },
            { icon: '✓', title: 'All Areas', desc: 'Kitchen, bathroom, all rooms' },
            { icon: '✓', title: 'Odorless', desc: 'No strong chemical smell' },
            { icon: '✓', title: 'Pet Safe', desc: 'Safe for pets' },
            { icon: '✓', title: '90 Days Cover', desc: '3-month warranty' },
            { icon: '✓', title: 'Free Revisit', desc: 'If pests return' },
            { icon: '✓', title: 'Same Day', desc: 'Same day service available' }
        ]
    },
    'Termite Control': {
        icon: '🪵',
        description: 'Professional termite treatment and prevention services. Protect your property from termite damage with our advanced solutions.',
        features: [
            { icon: '✓', title: 'Pre-Treatment', desc: 'Pre-construction treatment' },
            { icon: '✓', title: 'Post-Treatment', desc: 'Post-construction treatment' },
            { icon: '✓', title: 'Wood Treatment', desc: 'Furniture and wood treatment' },
            { icon: '✓', title: 'Soil Treatment', desc: 'Anti-termite soil treatment' },
            { icon: '✓', title: 'Drilling', desc: 'Wall drilling if needed' },
            { icon: '✓', title: '5-Year Warranty', desc: 'Long-term protection' },
            { icon: '✓', title: 'Annual Check', desc: 'Annual inspection included' },
            { icon: '✓', title: 'Certified', desc: 'Licensed professionals' }
        ]
    },
    'Home Painting': {
        icon: '🎨',
        description: 'Transform your space with our professional painting services. We offer interior and exterior painting using premium quality paints and expert techniques. Our painters ensure clean execution with attention to detail.',
        features: [
            { icon: '✓', title: 'Premium Paints', desc: 'High quality paint brands' },
            { icon: '✓', title: 'Interior Work', desc: 'Professional interior painting' },
            { icon: '✓', title: 'Exterior Work', desc: 'Facade painting services' },
            { icon: '✓', title: 'Color Advice', desc: 'Free color consultation' },
            { icon: '✓', title: 'Preparation', desc: 'Complete surface preparation' },
            { icon: '✓', title: 'Clean Work', desc: 'Neat and clean execution' },
            { icon: '✓', title: 'Protection', desc: 'Furniture protection included' },
            { icon: '✓', title: 'Cleanup', desc: 'Post-service cleanup' }
        ]
    },
    'Interior Painting': {
        icon: '🎨',
        description: 'Professional interior painting service to refresh and beautify your home interiors. We handle wall preparation, paint application, and ensure a flawless finish.',
        features: [
            { icon: '✓', title: 'Wall Repair', desc: 'Inspection and crack repair' },
            { icon: '✓', title: 'Putty Work', desc: 'Putty and primer application' },
            { icon: '✓', title: 'Two Coats', desc: 'Two coats of premium paint' },
            { icon: '✓', title: 'Ceiling Work', desc: 'Ceiling painting included' },
            { icon: '✓', title: 'Frame Painting', desc: 'Door and window frames' },
            { icon: '✓', title: 'Color Match', desc: 'Perfect color matching' },
            { icon: '✓', title: 'Protection', desc: 'Floor protection provided' },
            { icon: '✓', title: '1-Year Warranty', desc: 'Service warranty' }
        ]
    },
    'Exterior Painting': {
        icon: '🏠',
        description: 'Weather-resistant exterior painting that protects and enhances your property\'s appearance. We use specialized paints designed to withstand harsh weather conditions.',
        features: [
            { icon: '✓', title: 'Weather-Proof', desc: 'Durable exterior paints' },
            { icon: '✓', title: 'Surface Prep', desc: 'Cleaning and preparation' },
            { icon: '✓', title: 'Crack Filling', desc: 'Wall crack treatment' },
            { icon: '✓', title: 'Anti-Fungal', desc: 'Fungus prevention treatment' },
            { icon: '✓', title: 'Waterproofing', desc: 'Optional waterproofing' },
            { icon: '✓', title: 'UV Resistant', desc: 'Sun protection coating' },
            { icon: '✓', title: 'Safety', desc: 'Safety equipment used' },
            { icon: '✓', title: 'Long-Lasting', desc: 'Durable finish' }
        ]
    },
    'Waterproofing': {
        icon: '💧',
        description: 'Professional waterproofing solutions for roofs, walls, and bathrooms. Prevent water damage and leakage with our advanced waterproofing systems.',
        features: [
            { icon: '✓', title: 'Roof Waterproof', desc: 'Terrace waterproofing' },
            { icon: '✓', title: 'Bathroom Seal', desc: 'Bathroom waterproofing' },
            { icon: '✓', title: 'Wall Treatment', desc: 'External wall treatment' },
            { icon: '✓', title: 'Crack Sealing', desc: 'Crack filling and sealing' },
            { icon: '✓', title: 'Quality Materials', desc: 'Premium waterproofing materials' },
            { icon: '✓', title: 'Leak Detection', desc: 'Leak source identification' },
            { icon: '✓', title: '5-Year Warranty', desc: 'Long-term guarantee' },
            { icon: '✓', title: 'Post-Monsoon', desc: 'After-monsoon inspection' }
        ]
    },
    'Spa and Salon': {
        icon: '💆',
        description: 'Premium beauty and wellness services at your doorstep. Our trained beauticians provide professional salon services in the comfort of your home. From haircuts to facials, we bring the salon experience to you.',
        features: [
            { icon: '✓', title: 'Professionals', desc: 'Trained beauticians' },
            { icon: '✓', title: 'Hair Services', desc: 'Styling and haircuts' },
            { icon: '✓', title: 'Facial', desc: 'Professional facial treatments' },
            { icon: '✓', title: 'Makeup', desc: 'Party and bridal makeup' },
            { icon: '✓', title: 'Manicure', desc: 'Nail care services' },
            { icon: '✓', title: 'Massage', desc: 'Relaxing body massage' },
            { icon: '✓', title: 'Bridal Packages', desc: 'Complete bridal services' },
            { icon: '✓', title: 'Quality Products', desc: 'Premium products used' }
        ]
    },
    'Salon for Women': {
        icon: '💇‍♀️',
        description: 'Complete salon services for women including hair care, skin treatments, and beauty services. All services performed by experienced female beauticians.',
        features: [
            { icon: '✓', title: 'Haircut', desc: 'Hair cut and styling' },
            { icon: '✓', title: 'Coloring', desc: 'Hair coloring and highlights' },
            { icon: '✓', title: 'Facial', desc: 'Facial and cleanup services' },
            { icon: '✓', title: 'Threading', desc: 'Threading and waxing' },
            { icon: '✓', title: 'Manicure', desc: 'Manicure and pedicure' },
            { icon: '✓', title: 'Hair Spa', desc: 'Relaxing hair spa treatment' },
            { icon: '✓', title: 'Bridal Makeup', desc: 'Complete bridal package' },
            { icon: '✓', title: 'Party Makeup', desc: 'Event makeup services' }
        ]
    },
    'Salon for Men': {
        icon: '💇‍♂️',
        description: 'Professional grooming services for men. From classic haircuts to modern styling, beard grooming, and facial treatments.',
        features: [
            { icon: '✓', title: 'Haircut', desc: 'Professional haircut and styling' },
            { icon: '✓', title: 'Beard Trim', desc: 'Beard trimming and shaping' },
            { icon: '✓', title: 'Facial', desc: 'Facial and cleanup' },
            { icon: '✓', title: 'Head Massage', desc: 'Relaxing head massage' },
            { icon: '✓', title: 'Hair Coloring', desc: 'Hair color services' },
            { icon: '✓', title: 'Shaving', desc: 'Professional shaving' },
            { icon: '✓', title: 'Detan', desc: 'Detan treatment' },
            { icon: '✓', title: 'Products', desc: 'Professional products' }
        ]
    },
    'Spa Services': {
        icon: '🧖',
        description: 'Relaxing spa and wellness treatments at home. Rejuvenate your body and mind with our professional spa services.',
        features: [
            { icon: '✓', title: 'Body Massage', desc: 'Full body relaxation massage' },
            { icon: '✓', title: 'Head Massage', desc: 'Stress-relief head massage' },
            { icon: '✓', title: 'Foot Massage', desc: 'Foot reflexology' },
            { icon: '✓', title: 'Aroma Therapy', desc: 'Essential oil therapy' },
            { icon: '✓', title: 'Body Scrub', desc: 'Exfoliation treatment' },
            { icon: '✓', title: 'Face Massage', desc: 'Facial massage included' },
            { icon: '✓', title: 'Customized', desc: 'Personalized packages' },
            { icon: '✓', title: 'Premium Oils', desc: 'Quality massage oils' }
        ]
    },
    'Bridal Makeup': {
        icon: '👰',
        description: 'Complete bridal makeup and grooming packages. Look stunning on your special day with our expert bridal services.',
        features: [
            { icon: '✓', title: 'HD Makeup', desc: 'High-definition bridal makeup' },
            { icon: '✓', title: 'Hair Styling', desc: 'Bridal hair styling' },
            { icon: '✓', title: 'Pre-Bridal', desc: 'Pre-bridal treatments' },
            { icon: '✓', title: 'Mehendi', desc: 'Mehendi application' },
            { icon: '✓', title: 'Draping', desc: 'Saree draping service' },
            { icon: '✓', title: 'Trial Makeup', desc: 'Free trial session' },
            { icon: '✓', title: 'Touch-ups', desc: 'Touch-up services' },
            { icon: '✓', title: 'Premium Brands', desc: 'International makeup brands' }
        ]
    }
};

// ===== DOM ELEMENTS =====
const serviceName = document.getElementById('serviceName');
const serviceIcon = document.getElementById('serviceIcon');
const serviceDescription = document.getElementById('serviceDescription');
const featuresList = document.getElementById('featuresList');
const bookingForm = document.getElementById('bookingForm');
const dateInput = document.getElementById('date');

// ===== LOAD SERVICE DETAILS =====
document.addEventListener('DOMContentLoaded', () => {
    // Get service name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');

    if (service && serviceData[service]) {
        loadServiceDetails(service);
    } else {
        // Default to Cleaning Services if no service specified
        loadServiceDetails('Cleaning Services');
    }

    // Set minimum date to today
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Handle form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBooking);
    }
});

// ===== LOAD SERVICE DETAILS FUNCTION =====
function loadServiceDetails(serviceName) {
    const service = serviceData[serviceName];

    if (!service) {
        console.error('Service not found:', serviceName);
        return;
    }

    // Update page title with SEO-friendly text
    const seoTitle = `${serviceName} in Bokaro - Tikawala Group Prime Clean Solutions`;
    document.getElementById('pageTitle').textContent = seoTitle;
    document.querySelector('meta[property="og:title"]').setAttribute('content', seoTitle);

    // Update meta description
    const seoDescription = `Professional ${serviceName.toLowerCase()} services in Bokaro, Jharkhand. Expert team, 24/7 support, 20% discount. Book now at Tikawala Prime!`;
    document.querySelector('meta[name="description"]').setAttribute('content', seoDescription);
    document.querySelector('meta[property="og:description"]').setAttribute('content', seoDescription);

    // Update service icon
    document.getElementById('serviceIcon').textContent = service.icon;

    // Update service name
    document.getElementById('serviceName').textContent = serviceName;

    // Update service description
    document.getElementById('serviceDescription').textContent = service.description;

    // Update features list
    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';

    service.features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'why-item';
        featureDiv.innerHTML = `
            <div class="why-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.desc}</p>
        `;
        featuresList.appendChild(featureDiv);
    });

    // Add schema markup for service
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName + " in Bokaro",
        "description": service.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Tikawala Group Prime Clean Solutions",
            "telephone": "+918789772081",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bokaro",
                "addressLocality": "Bokaro",
                "addressRegion": "Jharkhand",
                "addressCountry": "IN"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": "Bokaro",
            "addressCountry": "IN"
        },
        "priceRange": "₹₹"
    };

    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(serviceSchema);
}

// ===== HANDLE BOOKING FORM SUBMISSION =====
function handleBooking(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        service: document.getElementById('serviceName').textContent,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value || 'Not provided',
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('message').value || 'None'
    };

    // Validate phone number
    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
        alert('⚠️ Please enter a valid 10-digit phone number');
        document.getElementById('phone').focus();
        return;
    }

    // Format date
    const date = new Date(formData.date);
    const formattedDate = date.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Create WhatsApp message
    const whatsappMessage = `
🏠 *NEW SERVICE BOOKING REQUEST*

📋 *Service Details:*
Service: ${formData.service}

👤 *Customer Information:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

📍 *Service Location:*
Address: ${formData.address}
City: Bokaro, Jharkhand

📅 *Preferred Schedule:*
Date: ${formattedDate}
Time: ${formData.time}

💬 *Additional Requirements:*
${formData.message}

---
_Sent from Tikawala Prime Website_
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp business number (8789772081)
    const whatsappNumber = '918789772081';

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');

    // Show success message
    alert('✅ Redirecting to WhatsApp...\n\nPlease send the message to complete your booking!\n\nOur team will contact you shortly to confirm.');

    // Optional: Reset form after submission
    // bookingForm.reset();
}

// ===== MAKE FUNCTION GLOBALLY ACCESSIBLE =====
window.openService = function (serviceName) {
    window.location.href = `service.html?service=${encodeURIComponent(serviceName)}`;
};

// ===== TRACK PAGE VIEW =====
console.log('📄 Service Page Loaded');
console.log('📍 Location: Bokaro, Jharkhand');
console.log('📞 WhatsApp: 8789772081');

// ===== END OF SERVICE.JS =====
