// Carrossel de Imagens
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Muda de slide a cada 3 segundos

// Validação do Formulário
const form = document.querySelector('.contact form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        alert('Obrigado por entrar em contato! Responderemos em breve.');
        form.reset();
    });
}

// Botão "Voltar ao Topo"
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '↑';
backToTopBtn.classList.add('back-to-top');
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Efeitos de Rolagem
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Interação do menu hamburguer
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show'); // Mostra ou oculta o menu
});
