// Light/Dark Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Loader Auto-Dismiss
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide loader immediately after content is loaded
});

// Ripple Effect on Button
document.querySelectorAll('.ripple-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
        circle.classList.add('ripple');

        this.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
});

// Testimonials Carousel
const testimonials = document.querySelectorAll('.testimonial');
let active = 0;

function showTestimonial(index) {
    testimonials.forEach((el, i) => el.classList.toggle('active', i === index));
}
setInterval(() => {
    active = (active + 1) % testimonials.length;
    showTestimonial(active);
}, 3000);

// Scroll-triggered popup
const popup = document.getElementById('popup');
let popupShown = false; // Flag to prevent multiple popups
window.addEventListener('scroll', () => {
    const trigger = document.body.scrollHeight - window.innerHeight - 100;
    if (window.scrollY > trigger && !popupShown) {
        popup.style.display = 'block';
        popupShown = true; // Set flag to true after showing the popup
    }
});
function closePopup() {
    popup.style.display = 'none';
}
