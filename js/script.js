// ==========================================
// BETHEEL MARKET - Interactive JavaScript
// ==========================================

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Initialize all features
    initNavigation();
    // initCursorFollower(); // Desactivado para evitar confusión
    initScrollEffects();
    initSmoothScroll();
    initGalleryLightbox();
    initMicroInteractions();
    initFloatingParticles(); // Nueva función para interactividad
    initClickRipples(); // Efecto de onda al hacer clic
    initWhatsAppConfetti(); // Confeti en botones de WhatsApp
    initProductPulse(); // Animación de pulso en productos
});

// ==========================================
// NAVIGATION
// ==========================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Animate hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');

            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// CURSOR FOLLOWER
// ==========================================
function initCursorFollower() {
    const cursorFollower = document.getElementById('cursorFollower');

    // Only enable on desktop
    if (window.innerWidth > 768) {
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;
        let isMoving = false;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isMoving) {
                cursorFollower.classList.add('active');
                isMoving = true;
            }
        });

        // Smooth follow animation
        function animateCursor() {
            const distX = mouseX - followerX;
            const distY = mouseY - followerY;

            followerX += distX * 0.1;
            followerY += distY * 0.1;

            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';

            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Change icon on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .product-card, .gallery-item');

        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorFollower.innerHTML = '<i class="fas fa-hand-pointer"></i>';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.2)';
            });

            element.addEventListener('mouseleave', () => {
                cursorFollower.innerHTML = '<i class="fas fa-shopping-cart"></i>';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
}

// ==========================================
// SCROLL EFFECTS
// ==========================================
function initScrollEffects() {
    // Parallax effect for hero background
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    const fadeElements = document.querySelectorAll('.product-card, .promo-card, .feature-item');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// GALLERY LIGHTBOX
// ==========================================
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const img = this.querySelector('img');
            const imgSrc = img.getAttribute('src');

            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${imgSrc}" alt="Imagen ampliada">
                </div>
            `;

            document.body.appendChild(lightbox);

            // Add styles
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeIn 0.3s ease;
            `;

            const content = lightbox.querySelector('.lightbox-content');
            content.style.cssText = `
                position: relative;
                max-width: 90%;
                max-height: 90%;
                animation: zoomIn 0.3s ease;
            `;

            const lightboxImg = lightbox.querySelector('img');
            lightboxImg.style.cssText = `
                max-width: 100%;
                max-height: 90vh;
                border-radius: 1rem;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            `;

            const closeBtn = lightbox.querySelector('.lightbox-close');
            closeBtn.style.cssText = `
                position: absolute;
                top: -40px;
                right: 0;
                font-size: 40px;
                color: white;
                cursor: pointer;
                transition: transform 0.3s ease;
            `;

            // Close lightbox
            closeBtn.addEventListener('click', () => {
                lightbox.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                }, 300);
            });

            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => {
                        document.body.removeChild(lightbox);
                    }, 300);
                }
            });

            closeBtn.addEventListener('mouseenter', () => {
                closeBtn.style.transform = 'rotate(90deg) scale(1.2)';
            });

            closeBtn.addEventListener('mouseleave', () => {
                closeBtn.style.transform = 'rotate(0) scale(1)';
            });
        });
    });

    // Add animations to document
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        @keyframes zoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// ==========================================
// MICRO INTERACTIONS
// ==========================================
function initMicroInteractions() {
    // Button ripple effect
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // Product card tilt effect
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, #E31E24 0%, #FF6B35 100%);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        scrollProgress.style.width = scrolled + '%';
    });

    // Animate numbers on scroll (for promotions)
    const animateNumber = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    };

    // Observe promo section for number animation
    const promoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const discountAmount = entry.target.querySelector('.discount-amount');
                if (discountAmount && !discountAmount.classList.contains('animated')) {
                    const targetNumber = parseInt(discountAmount.textContent);
                    discountAmount.textContent = '0';
                    animateNumber(discountAmount, targetNumber);
                    discountAmount.classList.add('animated');
                }
            }
        });
    }, { threshold: 0.5 });

    const promoSection = document.querySelector('.promotions');
    if (promoSection) {
        promoObserver.observe(promoSection);
    }

    // Floating animation for hero elements
    const floatingElements = document.querySelectorAll('.floating-card');

    floatingElements.forEach((element, index) => {
        element.style.animation = `floatCard ${6 + index}s ease-in-out infinite`;
    });

    // Add shake animation to WhatsApp button periodically
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        setInterval(() => {
            whatsappFloat.style.animation = 'none';
            setTimeout(() => {
                whatsappFloat.style.animation = 'floatWhatsapp 3s ease-in-out infinite, shake 0.5s ease';
            }, 10);
        }, 5000);
    }

    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(shakeStyle);
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return (window.pageYOffset / windowHeight) * 100;
}

// ==========================================
// FLOATING PARTICLES (Interactividad Visual)
// ==========================================
function initFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Crear contenedor de partículas
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 0;
    `;
    hero.insertBefore(particlesContainer, hero.firstChild);

    // Íconos de productos de primera necesidad para las partículas
    const icons = [
        '🥛', // Leche
        '🥚', // Huevos
        '🥤', // Gaseosas
        '🧈', // Aceite/Mantequilla
        '🍞', // Pan
        '🧀', // Queso
        '🍚', // Arroz
        '🥫', // Enlatados
        '🧂', // Sal/Condimentos
        '🍝', // Pasta
        '☕', // Café
        '🧻', // Papel higiénico
        '🧼', // Jabón
        '🧴', // Shampoo
        '🥩', // Carne
        '🐔', // Pollo
        '🥕', // Verduras
        '🍅', // Tomate
        '🥔', // Papa
        '🌽', // Maíz
        '🍌', // Frutas
        '🍎', // Manzana
        '🥖', // Pan francés
        '🍪', // Galletas
        '🍫', // Chocolate
        '🧃', // Jugos
        '💧', // Agua
        '🧊', // Hielo
        '🍬', // Dulces
        '🛒'  // Carrito
    ];

    // Crear más partículas para mayor dinamismo
    const particleCount = 25;
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer, icons[i % icons.length], i);
    }
}

function createParticle(container, icon, index) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.textContent = icon;

    // Posición aleatoria
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const size = 20 + Math.random() * 20;
    const duration = 15 + Math.random() * 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: absolute;
        left: ${startX}%;
        top: ${startY}%;
        font-size: ${size}px;
        opacity: 0.3;
        animation: float ${duration}s ease-in-out ${delay}s infinite;
        pointer-events: none;
        user-select: none;
    `;

    container.appendChild(particle);
}

// Agregar animación de flotación
const floatAnimation = document.createElement('style');
floatAnimation.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(20px, -30px) rotate(5deg);
        }
        50% {
            transform: translate(-15px, -60px) rotate(-5deg);
        }
        75% {
            transform: translate(25px, -30px) rotate(3deg);
        }
    }
    
    .floating-particle {
        transition: all 0.3s ease;
    }
    
    .floating-particle:hover {
        opacity: 0.6;
        transform: scale(1.5);
    }
`;
document.head.appendChild(floatAnimation);

// ==========================================
// CLICK RIPPLES (Efecto de onda al hacer clic)
// ==========================================
function initClickRipples() {
    document.addEventListener('click', function (e) {
        // Crear onda
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(227, 30, 36, 0.4) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9999;
            animation: rippleEffect 0.8s ease-out;
        `;

        document.body.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 800);
    });

    // Agregar animación
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
                transform: translate(-50%, -50%);
            }
            100% {
                width: 100px;
                height: 100px;
                opacity: 0;
                transform: translate(-50%, -50%);
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// ==========================================
// WHATSAPP CONFETTI (Confeti en botones de WhatsApp)
// ==========================================
function initWhatsAppConfetti() {
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp, .whatsapp-float');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Crear confeti
            const colors = ['#25D366', '#FFD700', '#FF6B35', '#E31E24', '#06D6A0'];
            const confettiCount = 20;

            for (let i = 0; i < confettiCount; i++) {
                createConfetti(e.clientX, e.clientY, colors[i % colors.length]);
            }
        });
    });
}

function createConfetti(x, y, color) {
    const confetti = document.createElement('div');
    const angle = Math.random() * Math.PI * 2;
    const velocity = 3 + Math.random() * 5;
    const size = 5 + Math.random() * 5;

    confetti.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
    `;

    document.body.appendChild(confetti);

    let posX = x;
    let posY = y;
    let velocityX = Math.cos(angle) * velocity;
    let velocityY = Math.sin(angle) * velocity;
    let opacity = 1;

    const animate = () => {
        posX += velocityX;
        posY += velocityY;
        velocityY += 0.3; // Gravedad
        opacity -= 0.02;

        confetti.style.left = posX + 'px';
        confetti.style.top = posY + 'px';
        confetti.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            confetti.remove();
        }
    };

    animate();
}

// ==========================================
// PRODUCT PULSE (Animación de pulso en productos)
// ==========================================
function initProductPulse() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            // Crear efecto de pulso
            const pulse = document.createElement('div');
            pulse.className = 'product-pulse';
            pulse.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: 100%;
                border: 2px solid var(--primary-red);
                border-radius: var(--radius-lg);
                pointer-events: none;
                animation: pulseEffect 1s ease-out;
            `;

            this.style.position = 'relative';
            this.appendChild(pulse);

            setTimeout(() => {
                pulse.remove();
            }, 1000);
        });
    });

    // Agregar animación de pulso
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulseEffect {
            0% {
                transform: translate(-50%, -50%) scale(0.8);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(1.5);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(pulseStyle);

    // Agregar efecto de brillo aleatorio
    setInterval(() => {
        const randomCard = productCards[Math.floor(Math.random() * productCards.length)];
        randomCard.style.animation = 'none';
        setTimeout(() => {
            randomCard.style.animation = 'shimmer 1.5s ease-in-out';
        }, 10);
    }, 3000);

    // Animación de brillo
    const shimmerStyle = document.createElement('style');
    shimmerStyle.textContent = `
        @keyframes shimmer {
            0%, 100% {
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
            }
            50% {
                box-shadow: 0 8px 32px rgba(227, 30, 36, 0.3), 0 0 20px rgba(227, 30, 36, 0.2);
            }
        }
    `;
    document.head.appendChild(shimmerStyle);
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c🛒 BETHEEL MARKET', 'font-size: 24px; font-weight: bold; color: #E31E24;');
console.log('%c✨ Página web desarrollada con amor y dedicación', 'font-size: 14px; color: #666;');
console.log('%c💚 ¡Gracias por visitarnos!', 'font-size: 14px; color: #25D366;');
