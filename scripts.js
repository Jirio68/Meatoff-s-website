// Анимация появления элементов меню
gsap.from(".menu-item", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#menu",
        start: "top 80%"
    }
});

// Эффект шапки при прокрутке
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#111";
    } else {
        header.style.backgroundColor = "#222";
    }
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});