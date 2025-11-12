// Service Database
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
    }
};

// Load service details
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceName = urlParams.get('service');

    if (serviceName && serviceData[serviceName]) {
        loadServiceDetails(serviceName);
    } else {
        loadServiceDetails('Cleaning Services');
    }

    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    document.getElementById('bookingForm').addEventListener('submit', handleBooking);
});

function loadServiceDetails(serviceName) {
    const service = serviceData[serviceName];

    document.getElementById('pageTitle').textContent = `${serviceName} - Tikawala Prime`;
    document.getElementById('serviceIcon').textContent = service.icon;
    document.getElementById('serviceName').textContent = serviceName;
    document.getElementById('serviceDescription').textContent = service.description;

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
}

function handleBooking(e) {
    e.preventDefault();

    const formData = {
        service: document.getElementById('serviceName').textContent,
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('message').value
    };

    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    const whatsappMessage = `
*New Service Booking Request*

*Service:* ${formData.service}

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

*Service Details:*
Address: ${formData.address}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

*Additional Requirements:*
${formData.message || 'None'}

---
Please confirm the booking at your earliest convenience.
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '918789772081';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
    alert('Redirecting to WhatsApp... Please send the message to complete your booking!');
}
