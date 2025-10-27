// Contact form handling
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!validateForm(formData)) {
                return;
            }

            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const submitText = submitButton.querySelector('#submit-text');
            const originalText = submitText.textContent;

            submitButton.disabled = true;
            submitText.textContent = 'Sending...';

            try {
                // Simulate API call (replace with your actual API endpoint)
                await new Promise(resolve => setTimeout(resolve, 1500));

                // Show success message
                showNotification('success', 'Thank you! We will contact you soon.');

                // Reset form
                contactForm.reset();

            } catch (error) {
                // Show error message
                showNotification('error', 'Something went wrong. Please try again.');
                console.error('Form submission error:', error);
            } finally {
                // Reset button state
                submitButton.disabled = false;
                submitText.textContent = originalText;
            }
        });
    }
});

// Form validation
function validateForm(data) {
    // Name validation
    if (data.name.trim().length < 2) {
        showNotification('error', 'Please enter a valid name');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('error', 'Please enter a valid email address');
        return false;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('error', 'Please enter a valid 10-digit phone number');
        return false;
    }

    // Service validation
    if (!data.service) {
        showNotification('error', 'Please select a service');
        return false;
    }

    return true;
}

// Show notification
function showNotification(type, message) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-20 right-4 px-6 py-4 rounded-lg shadow-lg z-50 ${type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
        }`;
    notification.textContent = message;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// FAQ accordion
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('[data-lucide]');

            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                if (ans !== answer && ans.classList.contains('active')) {
                    ans.classList.remove('active');
                    ans.style.display = 'none';
                }
            });

            // Toggle current answer
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                answer.style.display = 'none';
                if (icon) {
                    icon.setAttribute('data-lucide', 'chevron-down');
                }
            } else {
                answer.classList.add('active');
                answer.style.display = 'block';
                if (icon) {
                    icon.setAttribute('data-lucide', 'chevron-up');
                }
            }

            // Recreate icons
            lucide.createIcons();
        });
    });
});

// Real-time phone number formatting
document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            // Remove non-numeric characters
            let value = e.target.value.replace(/\D/g, '');

            // Limit to 10 digits
            if (value.length > 10) {
                value = value.slice(0, 10);
            }

            e.target.value = value;
        });
    }
});
