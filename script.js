// Menú responsive
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

// initial aria state
menuBtn.setAttribute('aria-expanded', 'false');

menuBtn.addEventListener('click', () => {
    const expanded = navLinks.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    menuBtn.innerHTML = expanded
        ? '<i class="fas fa-times" aria-hidden="true"></i>'
        : '<i class="fas fa-bars" aria-hidden="true"></i>';
});

// Efecto de partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición inicial aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `-10px`;
        
        // Duración de la animación aleatoria
        const duration = Math.random() * 10 + 5;
        particle.style.animation = `fall ${duration}s linear infinite`;
        
        // Retraso inicial aleatorio
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Opacidad aleatoria
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        particlesContainer.appendChild(particle);
    }
}

// Animación al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Smooth scroll para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        // close mobile menu when a link is clicked
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
        }

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // move keyboard focus to the target for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        }
    });
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll)

// Contact form: AJAX submit with fallback and accessible messages
const contactForm = document.querySelector('.contact-form');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!formMessage) return contactForm.submit();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';

        const action = contactForm.getAttribute('action');
        const formData = new FormData(contactForm);

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                mode: 'cors'
            });

            if (response.ok) {
                formMessage.hidden = false;
                formMessage.textContent = 'Gracias — Tu mensaje fue enviado. Responderé en 1-2 días hábiles.';
                contactForm.reset();
                formMessage.focus();
            } else {
                throw new Error('Error en el envío');
            }
        } catch (err) {
            // fallback: try native submit (may navigate away)
            formMessage.hidden = false;
            formMessage.textContent = 'No se pudo enviar mediante AJAX. Intentando envío tradicional...';
            setTimeout(() => {
                contactForm.submit();
            }, 800);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}
