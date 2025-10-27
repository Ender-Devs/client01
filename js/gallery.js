// Gallery filtering functionality
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filterCategory = this.getAttribute('data-category');

                // Update active button
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'bg-green-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700');
                });

                this.classList.add('active', 'bg-green-600', 'text-white');
                this.classList.remove('bg-gray-200', 'text-gray-700');

                // Filter gallery items
                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    if (filterCategory === 'all' || itemCategory === filterCategory) {
                        item.style.display = 'block';
                        item.classList.add('fade-in');
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Before/After image hover effect
document.addEventListener('DOMContentLoaded', function () {
    const beforeAfterContainers = document.querySelectorAll('.before-after-container');

    beforeAfterContainers.forEach(container => {
        // Desktop hover
        container.addEventListener('mouseenter', function () {
            const afterImage = this.querySelector('.after-image');
            if (afterImage) {
                afterImage.style.opacity = '1';
            }
        });

        container.addEventListener('mouseleave', function () {
            const afterImage = this.querySelector('.after-image');
            if (afterImage) {
                afterImage.style.opacity = '0';
            }
        });

        // Mobile tap/click
        container.addEventListener('click', function () {
            const afterImage = this.querySelector('.after-image');
            if (afterImage) {
                const currentOpacity = window.getComputedStyle(afterImage).opacity;
                afterImage.style.opacity = currentOpacity === '0' ? '1' : '0';
            }
        });
    });
});

// Lazy loading for gallery images (optional enhancement)
document.addEventListener('DOMContentLoaded', function () {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
});
